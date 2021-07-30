import Shogi from "../../src/Shogi";

export const serialize = (val: Shogi, config: any, indentation: any, depth: any, refs: any, printer: any) => {
    const {ban, kifu, players, ...obj} = val.getObject();

    return `ban:
(1) ${prettifyMochigoma(players[1].mochigoma)}${players[3] ? `\n(3) ${prettifyMochigoma(players[3].mochigoma)}` : ""}
${val.ban.__toString()}(0) ${prettifyMochigoma(players[0].mochigoma)}${players[2] ? `\n(2) ${prettifyMochigoma(players[2].mochigoma)}` : ""}
kifu:
${val.kifu.arrayKifu.map(line => `${line.disp} ${JSON.stringify(line.move)}`).join("\n")}
${JSON.stringify(obj, null, 2)}`;
};

export const test = (val: any) => {
    return val instanceof Shogi;
};

const prettifyMochigoma = (map: {[species: string]: number}) => {
    let ret = "";
    for (let species in map) {
        ret+=species+map[species]+" ";
    }
    return ret;
}