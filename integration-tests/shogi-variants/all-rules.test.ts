import Shogi from "../../src/Shogi";

const ruleIds: number[] = [];
for (let i = 0; i <= 113; i++) {
  ruleIds.push(i);
}
describe("All rules with common check", () => {
  test.each(ruleIds)("rule %i", (ruleId) => {
    Shogi.ofRuleId(ruleId);
  });
});
