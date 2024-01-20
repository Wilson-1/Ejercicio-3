'use strict'

// 1. Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra

let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
let firstName = prompt("Ingrese un nombre");

//Mostrar en un alert: "Si esta" o "No esta"

if (students.find(element => element === firstName)) {
    alert("Si se está");
  } else {
    alert("No se está");
  }

// 2. Separar por palabras y mostrar cuantas palabras tiene la  frase:

let phrase = 'La programación web es fundamental para el progreso';
let palabras = phrase.split(" ");
alert("La frase tiene " + palabras.length + " palabras");

// 3. En base al resultado del ejercicio anterior agrupar en un array únicamente las palabras que tengan mas de 3 letras.

let words3 = words.filter(element => element.length > 3);
alert(`Las palabras con mas de 3 letras son: ${words3}`);

// 4. De la siguiente lista de 50 libros de la biblioteca buscar si existe un titulo ingresado por prompt.

const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Constructi",
    "Design Patterns: Elements of Reusable Object-Oriented Soft",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Struct",
    "Domain-Driven Design: Tackling Complexity in the Heart of",
    "Continuous Delivery: Reliable Software Releases through Bu",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
];

let book = prompt("Ingrese un libro");
if (programmingBooks.includes(book)) {
    alert("Si se encuentra");
  } else {
    alert("No se encuentra");
  }
  
/* 5. Cada libro del ejercicio anterior se encuentra ubicado en una estantería diferente
dentro de una biblioteca, el índice del vector indica el numero de la estantería.
Mostrar el numero de la estantería donde se encuentra el libro “You Don’t Know JS” */

const bookName = "You Don't Know JS";
const bookIndex = programmingBooks.includes(bookName) ? programmingBooks.indexOf(bookName) : -1;

alert(`El libro "${bookName}" se encuentra en la estantería ${bookIndex}`);
