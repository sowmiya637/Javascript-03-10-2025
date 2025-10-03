# Dynamic User Card Generator (ES6+)

A simple web application to dynamically create and display **user cards** using modern JavaScript (ES6+) features like **modules, spread/rest operators, destructuring, and arrow functions**.

---

## Features

- **Dynamic User Cards**  
  - Add new users via a form.  
  - Each user card displays **Name, Age, and Role**.

- **Initial Users**  
  - Preloaded user data imported from `data.js` module.

- **Form Validation**  
  - Alerts the user if any input field is empty.

- **Modern JavaScript Features**  
  - **Spread operator** to add new users.  
  - **Rest operator** to calculate total age.  
  - **Destructuring** to extract object properties.  
  - **Arrow functions** for concise function expressions.  
  - **ES6 Modules** (`import` / `export`).

---

## Files

1. **index.html**  
   - Main HTML file with form and container for user cards.  
   - Includes `app.js` as a module.

2. **app.js**  
   - Handles form submission, user card creation, and rendering.  
   - Uses ES6+ features like spread/rest operators, destructuring, and arrow functions.  
   - Example of **calculating total age** using rest operator:
     ```js
     const getTotalAge = (...users) => {
       return users.reduce((total, { age }) => total + age, 0);
     };
     console.log("Total Age:", getTotalAge(...users));
     ```

3. **data.js**  
   - Exports initial user data array:
     ```js
     export const users = [
       { name: "Sowmiya", age: 22, role: "Developer" },
       { name: "Rithiha", age: 21, role: "Designer" },
       { name: "Sri", age: 23, role: "Tester" }
     ];
     ```


