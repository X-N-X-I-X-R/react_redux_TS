
markdown_content = """
# דוגמאות לפונקציות ב-JavaScript עם מספרים

## 1. חישוב שטח מעגל
```javascript

// חישוב שטח מעגל:
function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}
console.log('Area of circle with radius 17.84:', calculateArea(17.84));
 


 // חישוב היקף מעגל:
function calculateCircumference(radius: number): number {
    return 2 * Math.PI * radius;
}
console.log('Circumference of circle with radius 17.84:', calculateCircumference(17.84));



// חישוב  שורש  ריבועי:
function calculateSquareRoot(number: number): number {
    return Math.sqrt(number);
}
console.log('Square root of 100:', calculateSquareRoot(100));
 
 
 
 // חישוב חזקה:
function calculatePower(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}
console.log('2 raised to the power of 3:', calculatePower(2, 3));
 
 
 
 // חישוב סכום:
function calculateSum(a: number, b: number): number {
    return a + b;
}
console.log('Sum of 5 and 10:', calculateSum(5, 10));
 
 
 // חישוב ממוצע של מערך מספרים: 
function calculateAverage(numbers: number[]): number {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}
console.log('Average of [1, 2, 3, 4, 5]:', calculateAverage([1, 2, 3, 4, 5]));



// חישוב הפרש:
function calculateDifference(a: number, b: number): number {
    return a - b;
}
console.log('Difference between 10 and 5:', calculateDifference(10, 5));
 
 
 
// חישוב מכפלה:
function calculateProduct(a: number, b: number): number {
    return a * b;
}
console.log('Product of 5 and 10:', calculateProduct(5, 10));



// חישוב מנה:
function calculateQuotient(a: number, b: number): number {
    return a / b;
}
console.log('Quotient of 10 divided by 5:', calculateQuotient(10, 5)); 
 
 
 // חישוב שארית:
function calculateRemainder(a: number, b: number): number {
    return a % b;
}
console.log('Remainder of 10 divided by 4:', calculateRemainder(10, 4));