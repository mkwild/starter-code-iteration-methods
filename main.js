// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

// Kata 1 Filter the users array to show only the users with an isActive property of true.

const kata1Header = document.createElement("h3")
kata1Header.append("Kata 1")
main.append(kata1Header)
main.append(JSON.stringify(users.filter(user => user.isActive === true)))

//Kata 2 Map over the users array to show only the email addresses of the users.

const kata2Header = document.createElement("h3")
kata2Header.append("Kata 2")
main.append(kata2Header)
main.append(JSON.stringify(users.map(user => user.email)))

// Kata 3 Check whether at least one user in the users array has a company property of "OVATION".

const kata3Header = document.createElement("h3")
kata3Header.append("Kata 3")
main.append(kata3Header)
main.append(JSON.stringify(users.some(user => user.company === "OVATION")))

// Kata 4 Find the first user in the array over the age of 38.

const kata4Header = document.createElement("h3")
kata4Header.append("Kata 4")
main.append(kata4Header)
main.append(JSON.stringify(users.find(user => user.age > 38)))

// Kata 5 Find the first user in the array over the age of 38 who is active.

const kata5Header = document.createElement("h3")
kata5Header.append("Kata 5")
main.append(kata5Header)
main.append(JSON.stringify(users.filter(user => user.age > 38).find(user => user.isActive === true)))

// Kata 6 Show the balance of every user in the array from the "ZENCO" company.

const kata6Header = document.createElement("h3")
kata6Header.append("Kata 6")
main.append(kata6Header)
main.append(JSON.stringify(users.filter(user => user.company === "ZENCO").map(user => user.balance)))

// Kata 7 Show the age of every user with the "fugiat" tag.

const kata7Header = document.createElement("h3")
kata7Header.append("Kata 7")
main.append(kata7Header)
main.append(JSON.stringify(users.filter(user => user.tags.includes("fugiat")).map(user => user.age)))