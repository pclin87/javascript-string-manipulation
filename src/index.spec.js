/* eslint-disable no-unused-vars */
const { describe, it } = require("mocha");
const { lf } = global.lf || require("index.js");

describe("CRLF Converter", () => {
  describe("lf", () => {
    it("should replace CRLF at the beginning of a string", () => {
      const result = lf`\r\nHello there.`;
    String.prototype.startsWith(`\r\nHello`)
    });

    it("should replace CRLF at the end of a string", () => {
      const result = lf`Hello there.\r\n`;

      // Use `String.prototype.endsWith()`
    });

    it("should replace CRLF in the middle of a string", () => {
      const result = lf`Hello \r\n\r\nthere.`;

      // Use `String.prototype.includes()`
    });
  });
});
