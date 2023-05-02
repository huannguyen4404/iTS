interface Course {
  id: number;
  name: string;
}

const numberList: Array<number> = [1, 2, 3];
const wordList: Array<string> = ['i', 'write', 'somethings'];
const myCourses: Array<Course> = [
  { id: 1, name: 'TS Ez' },
  { id: 2, name: 'TS deep dive' },
];

// Define my generic
interface List<T> {
  length: number;
  [index: number]: T;
}
const courseList: List<Course> = [
  { id: 1, name: 'TS handbook' },
  { id: 2, name: 'TS playground' },
];

// --- keyof
type CourseKeys = keyof Course;
// const keys: CourseKeys = ''

// ---- typeof
const isServer = typeof window !== 'undefined';

// ----
// Mapped types
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
type OptionsFlags<Type> = {
  [prop in keyof Type]: boolean;
};
type FeatureOptions = OptionsFlags<FeatureFlags>;
// we will have new type like as:
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// };

// or more effect: build new with getter functions with return type :cheer:
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
// we will have new type like this
// type LazyPerson = {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// }
