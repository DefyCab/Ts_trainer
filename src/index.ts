function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear
  return `Hello ${name}, you are ${age} years old`
}

function countOdd(numbers: number[]): number {
  const numbersLength = []
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      numbersLength.push(i)
    }
  }
  return numbersLength.length
}
function isOld(age: number): boolean {
  return age >= 35
}
export { greet, isOld, countOdd }
