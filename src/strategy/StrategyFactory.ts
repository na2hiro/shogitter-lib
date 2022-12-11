import Ban from "../Ban";
import Strategy, { StrategyContainer } from "./Strategy";
import { CaptureControlStrategy } from "./CaptureControlStrategy";
import {
  MochigomaIOStrategy,
  MochigomaIOStrategyContainer,
} from "./MochigomaIOStrategy";
import KomaSuggestStrategy from "./KomaSuggestStrategy";
import CaptureStrategy from "./CaptureStrategy";
import DestinationStrategy from "./DestinationStrategy";
import JudgeStrategy, { JudgeStrategyContainer } from "./JudgeStrategy";
import MoveControlStrategy, {
  MoveControlStrategyContainer,
} from "./MoveControlStrategy";
import MoveEffectStrategy, {
  MoveEffectStrategyContainer,
} from "./MoveEffectStrategy";
import MoveFilterStrategy, {
  MoveFilterStrategyContainer,
} from "./MoveFilterStrategy";
import NifuStrategy from "./NifuStrategy";
import PromotionStrategy from "./PromotionStrategy";
import TebanRotationStrategy from "./TebanRotationStrategy";
import MochigomaControlStrategy, {
  MochigomaControlStrategyContainer,
} from "./MochigomaControlStrategy";

const strategyNameToClass: { [name in StrategyName /*typeof Strategy*/]: any } =
  {
    CaptureControl: CaptureControlStrategy,
    Capture: CaptureStrategy,
    Destination: DestinationStrategy,
    KomaSuggest: KomaSuggestStrategy,
    Nifu: NifuStrategy,
    Promotion: PromotionStrategy,
    TebanRotation: TebanRotationStrategy,
    MochigomaIO: MochigomaIOStrategy,
    MochigomaControl: MochigomaControlStrategy,
    MoveControl: MoveControlStrategy,
    MoveEffect: MoveEffectStrategy,
    MoveFilter: MoveFilterStrategy,
    Judge: JudgeStrategy,
  };

type VariantAndConfig = { [variant: string]: Config };
export type Config = any;

export type IteratorConfig = {
  BanScan?: VariantAndConfig;
};

export type BanStrategyRaw = {
  Destination: DestinationStrategy;
  CaptureControl: CaptureControlStrategy<any>;
  Capture: CaptureStrategy;
  Promotion: PromotionStrategy;
  Nifu: NifuStrategy;
  TebanRotation: TebanRotationStrategy;
  KomaSuggest: KomaSuggestStrategy;
};
export type BanStrategyNameRaw = keyof BanStrategyRaw;

export type BanStrategyWithContainer = {
  Judge: JudgeStrategy<any>;
  MoveControl: MoveControlStrategy<any>;
  MoveFilter: MoveFilterStrategy;
  MoveEffect: MoveEffectStrategy<any>;
};
export type BanStrategyNameWithContainer = keyof BanStrategyWithContainer;
export type BanStrategy = BanStrategyRaw & BanStrategyWithContainer;

export type BanStrategyName = BanStrategyNameRaw | BanStrategyNameWithContainer;

/**
 * Mochigoma
 */

export type MochigomaStrategyRaw = {};
export type MochigomaStrategyNameRaw = keyof MochigomaStrategyRaw;

export type MochigomaStrategyWithContainer = {
  MochigomaIO: MochigomaIOStrategy<any>;
  MochigomaControl: MochigomaControlStrategy<any>;
};
export type MochigomaStrategyNameWithContainer =
  keyof MochigomaStrategyWithContainer;

export type MochigomaStrategy = MochigomaStrategyRaw &
  MochigomaStrategyWithContainer;

export type MochigomaStrategyName =
  | MochigomaStrategyNameRaw
  | MochigomaStrategyNameWithContainer;

export type StrategyName = BanStrategyName | MochigomaStrategyName;

export type StrategyContainerName =
  | BanStrategyNameWithContainer
  | MochigomaStrategyNameWithContainer;

export type StrategyConfig = {
  [name in StrategyName]?: VariantAndConfig;
};

export const generateStrategy = (
  strategyName: StrategyName,
  obj: Config,
  ban: Ban
) => {
  let setting: { common?: any } = {},
    name;
  if (obj) {
    if (typeof obj !== "string") {
      for (let key in obj) {
        name = key;
        setting = obj[key];
        break;
      }
    } else {
      name = obj;
    }
  } else {
    name = "Normal";
  }

  const ret: Strategy = strategyNameToClass[strategyName].create(
    name,
    ban,
    setting
  );
  ret.setCommonSetting(setting.common);
  return ret;
};

const strategyContainerNameToClass: {
  [name in StrategyContainerName /*typeof StrategyContainer*/]?: any;
} = {
  MochigomaIO: MochigomaIOStrategyContainer,
  MochigomaControl: MochigomaControlStrategyContainer,
  MoveControl: MoveControlStrategyContainer,
  MoveEffect: MoveEffectStrategyContainer,
  MoveFilter: MoveFilterStrategyContainer,
  Judge: JudgeStrategyContainer,
};

export const generateStrategyContainer = (
  strategyName: StrategyContainerName,
  obj: Config,
  ban: Ban
) => {
  var klass: any = strategyContainerNameToClass[strategyName];
  const setting = {
    ...klass.defaultSetting,
    ...obj,
  };
  const sc: StrategyContainer<any> = new klass(obj, ban);
  let ok = false;
  for (let key in setting) {
    ok = true;
    sc.add(generateStrategy(strategyName, { [key]: setting[key] }, ban));
  }
  if (!ok) sc.add(generateStrategy(strategyName, null, ban));
  sc.ban = ban;
  return sc;
};
