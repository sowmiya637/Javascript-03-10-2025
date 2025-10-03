// app.js
import { users as initialUsers } from './data.js';

const container = document.getElementById("container");
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const roleInput = document.getElementById("role");

let users = [...initialUsers]; // Spread operator to create a copy

// Function to create a user card
const createUserCard = ({ name, age, role }) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${name}</h3>
    <p>Age: ${age}</p>
    <p>Role: ${role}</p>
  `;

  container.appendChild(card);
};

// Function to render all users
const renderUsers = () => {
  container.innerHTML = ""; // Clear previous cards
  users.forEach(user => createUserCard(user));
};

// Initial render
renderUsers();

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Destructuring input values
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim());
  const role = roleInput.value.trim();

  if(name && age && role){
    const newUser = { name, age, role };
    users = [...users, newUser]; // Spread operator to add new user
    renderUsers();

    // Clear form
    nameInput.value = "";
    ageInput.value = "";
    roleInput.value = "";
  } else {
    alert("Please fill all fields!");
  }
});

// Example: Rest operator to calculate total age
const getTotalAge = (...users) => {
  return users.reduce((total, { age }) => total + age, 0);
};

console.log("Total Age:", getTotalAge(...users));
