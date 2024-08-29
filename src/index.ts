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

function divisibleByThree(array: number[]): number {
  return array.filter((number) => number % 3 === 0).length
}

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

function sumEven(array: number[]): number{
  const evenNumbers = array.filter((number) => number % 2 === 0)
  const total = evenNumbers.reduce((sum, number) => {
    return sum + number
  }, 0)
return total
}


export { greet, isOld, countOdd, divisibleByThree, sumEven }
