import "mocha"
import assert from "assert"
import {
  greet,
  isOld,
  countOdd,
  divisibleByThree,
  sumEven,
  Person,
  getPersonStreetNo
} from "./index"

describe("ts test", () => {
  it("get greeting", () => {
    const birthYear = 1979
    const name = "Love"

    const result = greet(name, birthYear)

    assert.strictEqual(result, "Hello Love, you are 45 years old")
  })

  it("returns true if age is above or equal to 35", () => {
    // act
    const is34Old = isOld(34)
    const is35Old = isOld(35)
    const is36Old = isOld(36)

    // assert
    assert.strictEqual(is34Old, false)
    assert.strictEqual(is35Old, true)
    assert.strictEqual(is36Old, true)
  })
})

it("fun with variables", () => {
  // act
  let name: string = "Love"
  let nameImplicit = "Love"
  let nameImplicit2 = name

  const cool: boolean = true
  const birthYear = 1979

  // arrange
  assert.strictEqual(typeof cool, "boolean")
  assert.strictEqual(typeof birthYear, "number")
  assert.strictEqual(typeof name, "string")
  assert.strictEqual(typeof nameImplicit, "string")
  assert.strictEqual(typeof nameImplicit2, "string")
})

it("arrays are typed in ts", () => {
  const names: string[] = ["Marcus", "Julia", "Catherine"]
  const firstFive = [1, 2, 3, 4, 5]
  // const crazy = [true, "Hej", 23.5]
})

it("count odd numbers", () => {
  // arrange
  const firstFive = [1, 2, 3, 4, 5]

  // act
  const numberOfOdds = countOdd(firstFive)

  // arrange
  assert.strictEqual(numberOfOdds, 3)
})

it("count divisible by three numbers", () => {
  // arrange
  const firstNine = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // act
  const numberOfThrees = divisibleByThree(firstNine)

  // arrange
  assert.strictEqual(numberOfThrees, 3)
})

it("sum even numbers", () => {
  // arrange
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // act
  const sum = sumEven(nums)

  // arrange
  assert.strictEqual(sum, 30)
})

it("gets the street number for a person", () => {
  // arrange
  const p: Person = {
    name: "Marcus",
    birthYear: 1972,
    address: {
      street: "Strålgatan",
      streetNo: 23,
      city: "Stockholm",
    },
  }
  const streetNo = getPersonStreetNo(p)

  assert.strictEqual(streetNo, 23)
})
