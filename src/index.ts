import { getSystemErrorName } from "util"

function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear
  return `Hello ${name}, you are ${age} years old`
}

// // My solution using for loop
// function countOdd(numbers: number[]): number {
//   const numbersLength = []
//   for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0) {
//       numbersLength.push(i)
//     }
//   }
//   return numbersLength.length

// filter throug each instance of the array checking if it's divisible by 2.
// Returing all values the rest not equal zero i.e odd nubmer.
// if you remove :number number will change to any in filter function.
function countOdd(array: number[]): number {
  return array.filter((number) => number % 2 !== 0).length
}

// function divisibleByThree(array: number[]): number {
//   return array.filter((number) => number % 3 === 0).length
// }

const divisibleByThree = (array: number[]) =>
  array.filter((number) => number % 3 === 0).length

function isOld(age: number): boolean {
  return age >= 35
}

// function sumEven(array: number[]): number {
//   const evenNumbers = array.filter((number) => number % 2 === 0)
//   let sum = 0
//   for (let i = 0; i < evenNumbers.length; i++) {
//     sum += evenNumbers[i]
//   }
//   return sum
// }

// function sumEven(array: number[]): number{
//   const evenNumbers = array.filter((number) => number % 2 === 0)
//   const total = evenNumbers.reduce((sum, number) => {
//     return sum + number
//   }, 0)
// return total
// }

type Address = {
  street: string
  streetNo: number
  city: string
}

type Person = {
  name: string
  birthYear: number
  address: Address
}

function sumEven(array: number[]): number {
  return array
    .filter((num) => num % 2 === 0)
    .reduce((sum, currentValue) => sum + currentValue, 0)
}

const getPersonStreetNo = (p: Person) => p.address.streetNo

// function getPersonStreetNo(p: Person): number {
//   return p.address.streetNo;
// }

class PersonC {
  name: string = ""

  birthYear: number = 0
  constructor(name: string, birthYear: number) {
    this.name = name
    this.birthYear = birthYear
  }

  getName() {
    return this.name
  }
}

class EmployeeC extends PersonC {
  employeeId: number = -1
}

interface IPerson {
  name: string
  birthYear: number
}

function getPersonNameString(n: IPerson): string {
  return `${n.name}, ${n.birthYear}`
}

function printThis(p: Person) {
  if (!p) {
    return "no person supplied"
  }
  return p.name
}

type Union = String | Number

function addToStart<ElementType>(
  list: ElementType[],
  itemToAdd: ElementType
): ElementType[] {
  return [itemToAdd, ...list]
}

export {
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
}
