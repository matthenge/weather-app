import { formatTimestamp } from "../utils/dateTimeUtils";

describe("formatTimestamp", () => {
  it("converts timestamp to formatted time string", () => {
    const timestamp = 1651234567;
    const formattedTime = formatTimestamp(timestamp);
    expect(formattedTime).toBe("3:16 pm");
  });
});
