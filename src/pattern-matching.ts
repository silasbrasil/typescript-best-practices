import { match, P } from 'ts-pattern'


/**Check types */
const toString = (value: unknown): string =>
  match(value)
    .with(P.string, (str) => str)
    .with(P.number, (num) => num.toFixed(0))
    .with(P.boolean, (bool) => `${bool}`)
    .otherwise(() => 'Unknown')

console.log(toString(true))
console.log(toString(23))
console.log(toString('My text'))


/**Prevent null values to number type */
const handleNullValues = (value?: number): string =>
  match(value)
    .with(P.nonNullable, () => 'it is a number')
    .otherwise(() => 'it is either null or undefined')

console.log(handleNullValues())
console.log(handleNullValues(334))
