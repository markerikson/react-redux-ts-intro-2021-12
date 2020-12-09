// "Generics" are similar to Java, C#, and C++: declare
// a placeholder type value, which will be made concrete.
const fillArray = <T>(len: number, elem: T) => {
  return new Array() < T > len.fill(elem);
};
const newArray = fillArray < string > (3, "hi"); // => ['hi', 'hi', 'hi']
newArray.push("bye"); // ✅
newArray.push(true); // ❌ - only strings can be added to the array

// "Intersection" types are combined together:
type Student = { id: string, age: number };
type Employee = { companyId: string };
let person: Student & Employee;
person.age = 21; // ✅
person.companyId = "SP302334"; // ✅
person.id = "10033402"; // ✅
person.name = "Henry"; // ❌ - not in Student & Employee

// Optional types are indicated with a `?`:
interface Person {
  name: string;
  age: number;
  favoriteColor?: string; // This property is optional
}
