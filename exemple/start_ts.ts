// number
function calculateArea(radius: number): number {
    return  Math.PI * radius  * radius;
}
console.log(calculateArea(17.84)); //  רדיוס של 17.84 שווה ל 999 מ"ר שזה 1 דונם 

// string
function createGreeting(name: string): string {
    return `Hello, ${name}! Welcome to our website.`;
}
console.log(createGreeting("John")); // Hello, John! Welcome to our website.

// boolean
function canVote(age: number): boolean {
    return age >= 18;
}
console.log(canVote(20)); // true
console.log(canVote(16)); // false

// object
interface User {
    name: string;
    age: number;
}
function getAge(user: User): number {
    return user.age;
}
console.log(getAge({ name: "John", age: 25 })); // 25

// array
function getAverage(arr: number[]): number {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}
console.log(getAverage([1, 2, 3, 4, 5])); // 3

// tuple
function getFullName(name: [string, string]): string {
    return `${name[0]} ${name[1]}`;
}
console.log(getFullName(["John", "Doe"])); // John Doe

// enum
enum Role {Admin, User, Guest}
function checkAccess(role: Role): string {
    if (role === Role.Admin) {
        return "Full access";
    } else if (role === Role.User) {
        return "Limited access";
    } else {
        return "No access";
    }
}
console.log(checkAccess(Role.Admin)); // Full access
console.log(checkAccess(Role.Guest)); // No access

// any
function stringify(value: any): string {
    return JSON.stringify(value);
}
console.log(stringify({ name: "John", age: 25 })); // {"name":"John","age":25}

// null and undefined
function isValue(value: any): boolean {
    return value !== null && value !== undefined;
}
console.log(isValue(null)); // false
console.log(isValue("Hello")); // true

// void
function log(message: string): void {
    console.log(message);
}
log("This is a test message."); // This is a test message.

// never
function throwError(message: string): never {
    throw new Error(message);
}
// throwError("This is an error message."); // Uncomment to throw an error

// unknown
function unknownFunction(unknownValue: unknown): unknown {
    return unknownValue;
}
console.log(unknownFunction("Hello")); // Hello
console.log(unknownFunction(123)); // 123