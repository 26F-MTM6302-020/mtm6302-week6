// JS Object Literals
// Object literal syntax is a way to define objects in JavaScript using curly braces {} and key-value pairs. It allows you to create objects with properties and methods in a concise and readable manner.
const $employee = {
    name: "Jax",
    id: 894567,
    hireDate: 23,
    hireMonth: "Aug",
    hireYear: 2001,
    department: "Innovation",
    email: "jax@company.com",
    // skills is a property of the $employee object that holds an array of strings representing the skills possessed by the employee.
    skills: ["UX", "Prototyping", "Research", "Documentation"],
    // address is a property of the $employee object that holds an object representing the employee's address, with properties for street and city.
    address: {
        street: "123 Street",
        city: "Merlot"
    },
    // selfIntro is a method of the $employee object that returns a string introducing the employee, including their name, department, and hire year.
    selfIntro: function () {
        const introTemplate = `Hi I am ${this.name}, I have been working in ${this.department} since ${this.hireYear}.`
        return introTemplate
    }
}
// get element by id
const $empSection = document.getElementById("employee")

// accessing object properties using dot notation and inserting the employee name into the h2 tag
$empSection.insertAdjacentHTML("afterbegin", `<h2>Welcome ${$employee.name}!</h2>`)

// updating the department property of the $employee object
$employee.department = "Innovation and Research"

// creating a definition list (dl) with employee information using template literals and inserting it into the employee section
const $empInfo = `<dl>
    <dt>ID</dt>
    <dd>${$employee.id}</dd>
    <dt>Department</dt>
    <dd>${$employee.department}</dd>
    <dt>Year Hired</dt>
    <dd>${$employee.hireYear}</dd>
    <dt>Email</dt>
    <dd>${$employee.email}</dd>
</dl>`

// inserting the employee information into the employee section
$empSection.insertAdjacentHTML("beforeend", $empInfo)

// Accessing array in an object
const $empSkills = $employee.skills
// inserting the employee skills into the employee section using template literals and join method to create a comma-separated list
$empSection.insertAdjacentHTML("beforeend", `<p>${$employee.name} is skilled in ${$empSkills.join(", ")}</p>`)

// Accessing Object inside an Object
$empSection.insertAdjacentHTML("beforeend", `<p>Address: ${$employee.address.street}, ${$employee.address.city}</p>`)

// Accessing object methods
// object methods are functions that are defined as properties of an object. They can be called using the dot notation and can access the object's properties using the this keyword.
$empSection.insertAdjacentHTML("beforeend", $employee.selfIntro())

// JS Object Static Methods
// static methods are functions that are defined on the object itself, rather than on instances of the object. They can be called directly on the object without creating an instance. In JavaScript, there are several static methods available for objects, such as Object.keys(), Object.values(), and Object.entries().
console.log(Object.keys($employee))
console.log(Object.values($employee))
console.log(Object.entries($employee))

// adding a new property from outside the object
$employee.pronouns = "They/Them"

$empSection.insertAdjacentHTML("beforeend", `<p>${$employee.name} uses ${$employee.pronouns} as pronouns</p>`)

// deleting an object property
delete $employee.hireMonth