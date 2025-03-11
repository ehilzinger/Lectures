---
sidebar_position: 13
---

# Integrating LowDB for Persistency into an Existing Express.js API

## Introduction

LowDB is a lightweight, file-based database that can be easily integrated into an existing Express.js API to provide persistency. This guide outlines the necessary steps to add LowDB to an already functioning API.

## Prerequisites

Ensure your existing Express.js API is set up and running. You'll need:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Express.js](https://expressjs.com/)
- [LowDB](https://github.com/typicode/lowdb)

## Steps to Integrate LowDB

### 1. Install LowDB

Navigate to your project directory and install LowDB:

```sh
npm install lowdb
```

### 2. Configure LowDB in Your API

Modify your `server.js` (or equivalent) to include LowDB.

#### Import Express and LowDB (ES Module Syntax)

If you're using ES modules (`type": "module"` in `package.json`), import Express and LowDB as follows:

```javascript
import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const app = express();
app.use(express.json());

const adapter = new JSONFile("db.json");
const db = new Low(adapter);

async function initDB() {
  await db.read();
  if (!db.data) {
    db.data = { users: [] }; // Ensure default data exists
    await db.write();
  }
}
await initDB();
```

### 3. Modify Existing Routes to Use LowDB

Update your existing API routes to read from and write to LowDB.

#### Example: Fetching Data

Replace existing logic with LowDB's `db.read()`:

```javascript
app.get("/users", async (req, res) => {
  await db.read();
  res.json(db.data.users);
});
```

#### Example: Adding Data

Modify your `POST` route to save data to LowDB:

```javascript
app.post("/users", async (req, res) => {
  await db.read();
  const newUser = req.body;
  db.data.users.push(newUser);
  await db.write();
  res.status(201).json(newUser);
});
```

#### Example: Updating Data

Modify your `PUT` route to update an existing entry:

```javascript
app.put("/users/:id", async (req, res) => {
  await db.read();
  const userId = req.params.id;
  const updatedUser = req.body;
  const index = db.data.users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    db.data.users[index] = { ...db.data.users[index], ...updatedUser };
    await db.write();
    res.json(db.data.users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
```

#### Example: Deleting Data

Modify your `DELETE` route to remove an entry:

```javascript
app.delete("/users/:id", async (req, res) => {
  await db.read();
  const userId = req.params.id;
  db.data.users = db.data.users.filter((user) => user.id !== userId);
  await db.write();
  res.status(204).send();
});
```

### 4. Test the Updated API

Use tools like Postman or `curl` to test the new persistency.

#### Get Users

```sh
curl -X GET http://localhost:3000/users
```

#### Add a User

```sh
curl -X POST http://localhost:3000/users \
     -H "Content-Type: application/json" \
     -d '{"id": "1", "name": "John Doe"}'
```

#### Update a User

```sh
curl -X PUT http://localhost:3000/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "John Updated"}'
```

#### Delete a User

```sh
curl -X DELETE http://localhost:3000/users/1
```

## Conclusion

By following these steps, you have successfully integrated LowDB into your existing Express.js API, allowing for lightweight and persistent data storage. This method is ideal for small applications, prototypes, or local development environments.
