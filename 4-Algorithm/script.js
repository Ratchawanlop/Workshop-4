// Basic Algorithm
function calculateArea() {
  let radius = document.getElementById('radius').value
  if (radius === '' || radius <= 0) {
    alert('กรุณาป้อนค่าที่ถูกต้อง!')
    return
  }
  let area = Math.PI * radius * radius
  document.getElementById(
    'circleArea'
  ).innerText = `พื้นที่วงกลม = ${area.toFixed(2)}`
}

// Conditional Algorithm
function checkAge() {
  let age = document.getElementById('age').value
  if (age === '' || age <= 0) {
    alert('กรุณาป้อนค่าที่ถูกต้อง!')
    return
  }
  let result = age < 13 ? 'เด็ก' : age < 21 ? 'วัยรุ่น' : 'ผู้ใหญ่'
  document.getElementById('ageResult').innerText = `คุณเป็น: ${result}`
}

function checkEvenOdd() {
  let number = document.getElementById('number').value
  if (number === '' || number <= 0) {
    alert('กรุณาป้อนค่าที่ถูกต้อง!')
    return
  }
  let result = number % 2 === 0 ? 'เลขคู่' : 'เลขคี่'
  document.getElementById('evenOddResult').innerText = `ผลลัพธ์: ${result}`
}

// Loop Algorithm
function showNumbers() {
  let numbers = []
  for (let i = 1; i <= 10; i++) {
    numbers.push(i)
  }
  document.getElementById('numberList').innerText = numbers.join(', ')
}

function startInputLoop() {
  let inputs = []
  let input
  while ((input = prompt("ป้อนค่าหรือพิมพ์ 'exit' เพื่อหยุด")) !== 'exit') {
    if (input) inputs.push(input)
  }
  document.getElementById('userInputs').innerText = `ค่าที่ป้อน: ${inputs.join(
    ', '
  )}`
}

// Sorting Algorithm
let randomArray = []

function generateArray() {
  randomArray = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 1000)
  )
  document.getElementById(
    'originalArray'
  ).innerText = `อาร์เรย์เดิม: ${randomArray.join(', ')}`
}

function sortWithBubble() {
  let sortedArray = bubbleSort([...randomArray])
  document.getElementById(
    'bubbleSorted'
  ).innerText = `Bubble Sort: ${sortedArray.join(', ')}`
}

function sortWithSelection() {
  let sortedArray = selectionSort([...randomArray])
  document.getElementById(
    'selectionSorted'
  ).innerText = `Selection Sort: ${sortedArray.join(', ')}`
}

function bubbleSort(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

// Recursive Algorithm
function calculateFactorial() {
  let n = document.getElementById('factorialInput').value
  document.getElementById(
    'factorialResult'
  ).innerText = `Factorial(${n}) = ${factorial(n)}`
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1)
}

function calculateFibonacci() {
  let n = document.getElementById('fibonacciInput').value
  document.getElementById(
    'fibonacciResult'
  ).innerText = `Fibonacci(${n}) = ${fibonacci(n)}`
}

function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

// Debugging & Error Handling
function testErrorHandling() {
  try {
    let value = parseInt(prompt('ป้อนตัวเลข:'))
    if (isNaN(value)) throw new Error('ค่าไม่ใช่ตัวเลข!')
    document.getElementById('errorMessage').innerText = `ค่าที่ป้อน: ${value}`
  } catch (error) {
    document.getElementById(
      'errorMessage'
    ).innerText = `ข้อผิดพลาด: ${error.message}`
  }
}
