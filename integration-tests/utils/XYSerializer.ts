import XY from "../../src/XY";

export const serialize = (val: XY, config: any, indentation: any, depth: any, refs: any, printer: any) => {
    return val.toString();
};

export const test = (val: any) => {
    return val instanceof XY;
};
