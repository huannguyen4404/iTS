function sayHello() {
  console.log('Hi Reader');
}

// optional parameter
// this is how ts understand
// function getLength(numberList?: number[] | undefined): number
function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// default parameter
// this is how ts understand
// function getLength(numberList?: number[]): number
function getLength2(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// ts error: Parameter cannot have question mark and initializer.ts(1015)
// function getLength3(numberList?: number[] = []) {
//   return Array.isArray(numberList) ? numberList.length : 0;
// }

// -----
// FUNCTION OVERLOADS
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
//ERR: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
// const d3 = makeDate(1, 3);

// ------
// DESTRUCTURING PARAMS
function addVehicle(vehicle: { id: number; name: string; velocity: number }) {
  const { id, name, velocity } = vehicle;
  console.log(id, name, velocity);
}
addVehicle({ id: 1, name: 'tourdefrance', velocity: 12 });

// or better
interface Bike {
  id: number;
  name: string;
  velocity: number;
}
function addBike({ id, name, velocity }: Bike) {
  console.log(id, name, velocity);
}
addBike({
  id: 1,
  name: 'tourdefrance',
  velocity: 12,
} as Bike);
