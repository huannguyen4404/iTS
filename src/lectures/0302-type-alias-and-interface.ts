// type Student = {
//   readonly id: number;
//   name: string;
//   age?: number; // optional
// };

interface Student {
  readonly id: number;
  name: string;
  age?: number; // optional
}

const peterProfile: Student = {
  id: 1,
  name: 'Peter',
};

// union
type MyStatus = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;
interface StudentUnion {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

// Intersection type
interface Partner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = Partner & Contact;
// interface way
interface Employee2 extends Identity, Contact {}
interface Customer2 extends Partner, Contact {}

type Employee3 = Identity & Contact & Partner;
let x: Employee3 = {
  id: 10,
  name: 'Sam',
  email: 'sam@abc.com',
  phone: '123456',
  credit: 100,
};

interface Bird {
  velocity: number;
  name: string;
}

const chimSe: Bird = {
  velocity: 11,
  name: 'Se xam',
};

// declaration merging: ONLY FOR `interface`, `type` will no accept, see Vehice below
interface Bird {
  age?: number;
}

type Vehice = {
  id: string;
  name: string;
};
// ERROR: Duplicate identifier 'Vehice'.
// type Vehice = {
//   velocity: int;
// };
