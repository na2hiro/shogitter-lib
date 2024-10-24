import Ban from "../Ban.js";
import Strategy, { StrategyContainer } from "./Strategy.js";
import { CaptureControlStrategy } from "./CaptureControlStrategy.js";
import {
  MochigomaIOStrategy,
  MochigomaIOStrategyContainer,
} from "./MochigomaIOStrategy.js";
import KomaSuggestStrategy from "./KomaSuggestStrategy.js";
import CaptureStrategy from "./CaptureStrategy.js";
import DestinationStrategy from "./DestinationStrategy.js";
import JudgeStrategy, { JudgeStrategyContainer } from "./JudgeStrategy.js";
import MoveControlStrategy, {
  MoveControlStrategyContainer,
} from "./MoveControlStrategy.js";
import MoveEffectStrategy, {
  MoveEffectStrategyContainer,
} from "./MoveEffectStrategy.js";
import MoveFilterStrategy, {
  MoveFilterStrategyContainer,
} from "./MoveFilterStrategy.js";
import NifuStrategy from "./NifuStrategy.js";
import PromotionStrategy from "./PromotionStrategy.js";
import TebanRotationStrategy from "./TebanRotationStrategy.js";
import MochigomaControlStrategy, {
  MochigomaControlStrategyContainer,
} from "./MochigomaControlStrategy.js";
import OnStartStrategy from "./OnStartStrategy.js";

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
    OnStart: OnStartStrategy,
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
  OnStart: OnStartStrategy;
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
