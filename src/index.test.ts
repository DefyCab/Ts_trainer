import "mocha"
import assert from "assert"
import { greet } from "./index"

describe("ts test", () => {
  it("get greeting", () => {
    const birthYear = 1979
    const name = "Love"

    const result = greet(name, birthYear)

    assert.strictEqual(result, "Hello Love, you are 45 years old")
  })
})
