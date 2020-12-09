enum Sizes {
  Small,
  Medium,
  Large,
}
Sizes.Medium; // => 1 // default to 0-indexed

// Enums can also be string-based
enum ThemeColors {
  Primary = "primary",
  Secondary = "secondary",
}

// "Interfaces": declaring the "shape" of an object
interface User {
  username: string;
  age: number;
  friends: User[];
}

// You can "union" values that may be more than one type:
let x: number | string = 42;
x = "test"; //  ✅
x = false; // ❌ - not a number or string

// `type` keyword allows declaring many type combinations,
type NumberOrString = number | string;


