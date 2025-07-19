export type CamelizeKeys<Key extends String> =
  Key extends `${infer First}_${infer Rest}`
  ? `${First}${Capitalize<CamelizeKeys<Rest>>}`
  : Key;

export type Camelize<T> = {
  [Key in keyof T as CamelizeKeys<string & Key>]: T[Key];
};

interface Person {
  first_name: string;
  last_name: string;
}

type CamelizedPerson = Camelize<Person>;

const person: CamelizedPerson = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.firstName); // John
console.log(person.lastName); // Doe
