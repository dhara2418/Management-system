# 💻 Employee Management System

## 📌 Project Overview

The **Employee Management System** is a React-based offline CRUD application designed to demonstrate important React concepts such as **state management, form handling, component communication, event handling, conditional rendering, and localStorage integration**.

The application allows users to **add employee records, view employees in a table, update employee details, and delete records**. All data is stored locally using the browser’s **localStorage**, so the information remains saved even after refreshing the page.

No backend or external API is used. All operations run completely inside React, making the system a lightweight **offline employee admin dashboard**.

---

# 📸 Required Screenshots

<img width="1616" height="864" alt="Screenshot 2026-03-11 214944" src="https://github.com/user-attachments/assets/a0d9525d-f1a7-4667-b2cd-120b1eee570e" />



# 🚀 Features

* ➕ Add new employee records
* 📋 Display employees in a table layout
* ✏️ Edit employee information
* 🗑 Delete employee records
* 🧹 Clear all employees
* 📊 Dashboard summary showing total employees
* 💾 Data persistence using **localStorage**
* ⚡ Real-time UI updates using React State

---

# 🧩 Project Components

## 1️⃣ EmployeeForm

Responsible for adding and updating employee records.

**Features**

* Controlled input fields
* Basic validation (email, phone, salary)
* Switches between **Add Mode** and **Edit Mode**
* Sends data to parent component

---

## 2️⃣ EmployeeList

Displays all employees in a structured table.

**Features**

* Uses `.map()` to render employee list
* Fetches data from central state
* Shows **“No Employees Found”** when the list is empty

---

## 3️⃣ EmployeeRow

Represents a single employee inside the table.

**Features**

* Edit button
* Delete button
* Demonstrates passing arguments to event handlers

Example:

```javascript
<button onClick={() => deleteEmployee(emp.id)}>
Delete
</button>
```

---

## 4️⃣ Dashboard

Displays employee summary information.

Shows:

* Total Employees
* Recently Added Employee
* Storage Type (LocalStorage)

---
# 📊 Dashboard Overview

The dashboard dynamically displays:

* 👥 Total Employees
* 🆕 Recently Added Employee
* 📋 Employee Table
* ✏ Edit Controls
* 🗑 Delete Controls

All updates reflect instantly using **React state + localStorage synchronization**.
---

# 👩‍💻 Author

**Dhara Parekh**
React Frontend Developer
