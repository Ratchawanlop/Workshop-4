// 1. พื้นฐานของตัวแปรและชนิดข้อมูล
const name = "Tom";
const age = 20;
const isStudent = true;

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Is Student:", isStudent);

const strNum = "10";
const floatNum = "3.14";
const num = 100;

const intValue = parseInt(strNum);
const floatValue = parseFloat(floatNum);
const strValue = String(num);

// console.log("Integer Value:", intValue);
// console.log("Float Value:", floatValue);
// console.log("String Value:", strValue);




// 2. สร้างและใช้งานโครงสร้างข้อมูล
// List / Array → เพิ่ม, ลบ, แก้ไขข้อมูลในลิสต์
let fruits = ["Apple", "Banana", "Orange"];

// เพิ่มข้อมูล
fruits.push("Pineapple");
// console.log("Fruits after adding:", fruits);

// ลบข้อมูล
fruits.splice(1, 1);
// console.log("Fruits after removing:", fruits);

// แก้ไขข้อมูล
fruits[0] = "Pineapple";
// console.log("Fruits after editing:", fruits);

const student = {
    name: "Tom",
    age: 20,
    grade: "A"
};

// console.log("Student Object:", student);

const tuple = ["apple", "banana", "orange"]; // Tuple (ใช้ Array แทน)
// console.log("Tuple:", tuple);

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
// console.log("Unique Numbers:", Array.from(uniqueNumbers));




// 3. จัดการ JSON Data
const jsonString = '{"name": "Tom", "age": 20, "grades": ["A", "B", "C"]}';

const jsonObject = JSON.parse(jsonString);
// console.log("Parsed JSON Object:", jsonObject);

const newJsonString = JSON.stringify(jsonObject, null, 2); // null และ 2 ใช้สำหรับจัดรูปแบบ JSON ให้สวยงาม
// console.log("Stringified JSON:", newJsonString);
