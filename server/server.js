const PORT = process.env.PORT ?? 8000;
const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

app.use(cors());

// get all todo list items

app.get('/todos/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  console.log(userEmail);
  try {
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
