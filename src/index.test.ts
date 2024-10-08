import "mocha"
import assert from "assert"
import {
  greet,
  isOld,
  countOdd,
  divisibleByThree,
  sumEven,
  Person,
  Address,
  getPersonStreetNo,
  PersonC,
  EmployeeC,
  IPerson,
  getPersonNameString,
  printThis,
  Union,
  addToStart,
  Wrapper,
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

it("using classes", () => {
  // arrange
  const p = new PersonC("Marcus", 1972)
  const e = new EmployeeC("Marcus Employee", 1972)

  // act
  e.employeeId = 12345

  // assert
  assert.strictEqual(p.name, "Marcus") // breaks with Property 'name' is private and only accessible within class 'PersonClass'
  assert.strictEqual(p.getName(), "Marcus")
  assert.strictEqual(e.getName(), "Marcus Employee")
  assert.strictEqual(e.employeeId, 12345)
})

it("prints an IPerson", () => {
  // arrange
  const p1: IPerson = { name: "Marcus", birthYear: 1972 }
  const p2 = { name: "David", birthYear: 1975, drummer: true }

  // act
  const p1Address = getPersonNameString(p1)
  const p2Address = getPersonNameString(p2)

  // assert
  assert.strictEqual(p1Address, "Marcus, 1972")
  assert.strictEqual(p2Address, "David, 1975")
})

it("uses union types to allow null", () => {
  // act
  const result1 = printThis(undefined)
  const result2 = printThis(null)

  // assert
  assert.strictEqual(result1, "no person supplied")
  assert.strictEqual(result2, "no person supplied")
})

it("uses union type as string or number", () => {
  const num: Union = 23
  const num2: Union = "Love"

  // assert
  assert.strictEqual(num, 23)
  assert.strictEqual(num2, "Love")
})

it("add to list", () => {
  // arrange
  const listOfPeople: IPerson[] = [{ name: "Marcus", birthYear: 1972 }]
  const listOfAddresses: Address[] = [
    { street: "Strålgatan", streetNo: 23, city: "Stockholm" },
    { street: "SchraeschazschStrasse", streetNo: 2, city: "Amsterdam" },
  ]

  // act
  const numberOfPeople = addToStart<IPerson>(listOfPeople, {
    name: "David",
    birthYear: 1975,
  })
  const numberOfAddresses = addToStart<Address>(listOfAddresses, {
    street: "Champs Elysee",
    streetNo: 1,
    city: "Paris",
  })

  // assert
  assert.strictEqual(numberOfPeople[0].name, "David")
  assert.strictEqual(numberOfAddresses[0].city, "Paris")
})

it("wrapper for addresses", () => {
  // arrange
  const listOfAddresses: Address[] = [
    { street: "Strålgatan", streetNo: 23, city: "Stockholm" },
    { street: "SchraeschazschStrasse", streetNo: 2, city: "Amsterdam" },
    { street: "Champs Elysee", streetNo: 1, city: "Paris" },
  ]

  // act
  const list = new Wrapper<Address>(listOfAddresses)

  // assert
  assert.strictEqual(list.getFirst().city, "Stockholm")
  assert.strictEqual(list.getLast().city, "Paris")
})

it("wrapper for persons", () => {
  const listOfPersons: IPerson[] = [
    { name: "Love", birthYear: 1979 },
    { name: "Harry", birthYear: 1999 },
    { name: "Elise", birthYear: 1967 },
    { name: "Hariette", birthYear: 2003 },
    { name: "Sven", birthYear: 1980 },
  ]

  const list = new Wrapper<IPerson>(listOfPersons)

  assert.strictEqual(list.getFirst().name, "Love")
  assert.strictEqual(list.getLast().birthYear, 1980)
})
