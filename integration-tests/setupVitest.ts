import * as ShogiSerializer from "./utils/ShogiSerializer";
import * as XYSerializer from "./utils/XYSerializer";

expect.addSnapshotSerializer(ShogiSerializer);
expect.addSnapshotSerializer(XYSerializer);
