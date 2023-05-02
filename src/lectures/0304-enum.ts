// NUMBER ENUM
enum Status {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
enum Status2 {
  PENDING = 3, // 3
  IN_PROGRESS, // 4
  DONE, // 5
  CANCELLED, // 6
}
enum Status3 {
  PENDING = 3,
  IN_PROGRESS = 5,
  DONE = 8,
  CANCELLED = 10,
}

// can assign any number to your enum variable
const stats1: Status = Status.PENDING;
const stats2: Status = 1;
// const stats3: Status = 10; // Err

// number enum --> support reverse mapping
console.log(Status[0]); // 'PENDING'
console.log(Status['DONE']); // 2

// -----------
// STRING ENUM
enum MediaTypes {
  JSON = 'application/json',
  XML = 'application/xml',
}
// ex
fetch('https://example.com/api/endpoint', {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then((response) => {
  // ...
});
