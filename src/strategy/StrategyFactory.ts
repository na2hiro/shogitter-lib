import Ban from "../Ban";
import {StrategyContainer} from "./Strategy";
import {CaptureControlStrategy} from "./CaptureControlStrategy";
import {MochigomaIOStrategy, MochigomaIOStrategyContainer} from "./MochigomaIOStrategy";
import KomaSuggestStrategy from "./KomaSuggestStrategy";
import CaptureStrategy from "./CaptureStrategy";
import DestinationStrategy from "./DestinationStrategy";
import JudgeStrategy, {JudgeStrategyContainer} from "./JudgeStrategy";
import MoveControlStrategy, {MoveControlStrategyContainer} from "./MoveControlStrategy";
import MoveEffectStrategy, {MoveEffectStrategyContainer} from "./MoveEffectStrategy";
import MoveFilterStrategy, {MoveFilterStrategyContainer} from "./MoveFilterStrategy";
import NifuStrategy from "./NifuStrategy";
import PromotionStrategy from "./PromotionStrategy";
import TebanRotationStrategy from "./TebanRotationStrategy";
import MochigomaControlStrategy, {MochigomaControlStrategyContainer} from "./MochigomaControlStrategy";

const strategyNameToClass: {[name in StrategyName]: /*typeof Strategy*/any} = {
    "CaptureControl": CaptureControlStrategy,
    "Capture": CaptureStrategy,
    "Destination": DestinationStrategy,
    "KomaSuggest": KomaSuggestStrategy,
    "Nifu": NifuStrategy,
    "Promotion": PromotionStrategy,
    "TebanRotation": TebanRotationStrategy,
    "MochigomaIO": MochigomaIOStrategy,
    "MochigomaControl": MochigomaControlStrategy,
    "MoveControl": MoveControlStrategy,
    "MoveEffect": MoveEffectStrategy,
    "MoveFilter": MoveFilterStrategy,
    "Judge": JudgeStrategy,
};

type VariantAndConfig = {[variant: string]: Config }
export type Config = any;

export type IteratorConfig = {
    BanScan?: VariantAndConfig,
}
export type StrategyName = StrategyContainerName |
    "KomaSuggest"|
    "Nifu"|
    "Capture"|
    "Promotion"|
    "CaptureControl"|
    "TebanRotation"|
    "Destination"|
    "Judge"|
    "MoveControl"|
    "MoveFilter"|
    "MoveEffect";

export type StrategyContainerName =
    "MochigomaIO"|
    "MochigomaControl"|
    "MoveControl"|
    "MoveEffect"|
    "MoveFilter"|
    "Judge";

export type StrategyConfig = {
    [name in StrategyName]?: VariantAndConfig;
};

export const generateStrategy = (strategyName: StrategyName, obj: Config, ban: Ban) => {
    let setting: {common?: any} = {}, name;
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

    const ret = strategyNameToClass[strategyName].create(name, ban, setting);
    ret.setCommonSetting(setting.common);
    return ret;
};

const strategyContainerNameToClass: {[name in StrategyContainerName]?: /*typeof StrategyContainer*/any} = {
    "MochigomaIO": MochigomaIOStrategyContainer,
    "MochigomaControl": MochigomaControlStrategyContainer,
    "MoveControl": MoveControlStrategyContainer,
    "MoveEffect": MoveEffectStrategyContainer,
    "MoveFilter": MoveFilterStrategyContainer,
    "Judge": JudgeStrategyContainer,
};

export const generateStrategyContainer = (strategyName: StrategyContainerName, obj: Config, ban: Ban) => {
    var klass: any = strategyContainerNameToClass[strategyName];
    const setting = {
        ...klass.defaultSetting,
        ...obj
    };
    const sc: StrategyContainer<any> = new klass(obj, ban);
    let ok = false;
    for (let key in setting) {
        ok = true;
        sc.add(generateStrategy(strategyName, {[key]: setting[key]}, ban));
    }
    if (!ok) sc.add(generateStrategy(strategyName, null, ban));
    sc.ban = ban;
    return sc;
};