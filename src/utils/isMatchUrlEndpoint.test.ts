import {isMatchUrlEndpoint} from "@/utils/isMatchUrlEndpoint";

describe("function isMatchUrlEndpoint", () => {
    const pathname: string = "https://trello.com/board/uuid123456";
    const endpoint: string = "board"

    it("should return true", () => {
       expect(isMatchUrlEndpoint(pathname, endpoint)).toBe(true);
    });

    it("should return false", () => {
       expect(isMatchUrlEndpoint(pathname, "task")).toBe(false);
    });
});