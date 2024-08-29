function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear
  return `Hello ${name}, you are ${age} years old`
}

// function isOld(age: number): boolean {
//   if (age >= 35) {
//     return true
//   }
//   return false
// }
// export { greet, isOld }

function isOld(age: number): boolean {
  return age >= 35
}
export { greet, isOld }
