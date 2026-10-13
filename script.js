const $employee = {
    name: "Jax",
    id: 894567,
    hireDate: 23,
    hireMonth: "Aug",
    hireYear: 2001,
    department: "Innovation",
    email: "jax@company.com",
    skills: ["UX", "Prototyping", "Research", "Documentation"],
    address: {
        street: "123 Street",
        city: "Merlot"
    },
    selfIntro: function () {
        const introTemplate = `Hi I am ${this.name}, I have been working in ${this.department} since ${this.hireYear}.`
        return introTemplate
    }
}

const $empSection = document.getElementById("employee")
$empSection.insertAdjacentHTML("afterbegin", `<h2>Welcome ${$employee.name}!</h2>`)
$employee.department = "Innovation and Research"

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

$empSection.insertAdjacentHTML("beforeend", $empInfo)

// Accessing array in an object
const $empSkills = $employee.skills
$empSection.insertAdjacentHTML("beforeend", `<p>${$employee.name} is skilled in ${$empSkills.join(", ")}</p>`)

// Accessing Object inside an Object
$empSection.insertAdjacentHTML("beforeend", `<p>Address: ${$employee.address.street}, ${$employee.address.city}</p>`)

// Accessing Object Methods
$empSection.insertAdjacentHTML("beforeend", $employee.selfIntro())

// JS Object Static Methods
console.log(Object.keys($employee))
console.log(Object.values($employee))
console.log(Object.entries($employee))

// adding a new property from outside the object
$employee.pronouns = "They/Them"

$empSection.insertAdjacentHTML("beforeend", `<p>${$employee.name} uses ${$employee.pronouns} as pronouns</p>`)

// deleting an object property
delete $employee.hireMonth