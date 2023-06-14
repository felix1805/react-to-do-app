const PORT = process.env.PORT ?? 8000;
const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.json());

// get all todo list items

app.get('/todos/:userEmail', async (req, res) => {
  const { userEmail } = req.params;
  console.log(userEmail);
  try {
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
});

// create new TODO element

app.post('/todos', async (req, res) => {
  const { user_email, title, progress, date } = req.body
  console.log(user_email, title, progress, date)
  const id = uuidv4()
  try {
    const newToDo = await pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`,
      [id, user_email, title, progress, date])
    res.json(newToDo)
  } catch (err) {
    console.error(err)
  }
});

// edit a TODO element
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params
  const { user_email, title, progress, date } = req.body
  try {
    const editToDo = await pool.query('UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;', [user_email, title, progress, date, id])
    res.json(editToDo)
  } catch (err) {
    console.error(err)
  }
});

// delete a TODO element

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleteToDo = await pool.query('DELETE FROM todos WHERE id = $1;', [id])
    res.json(deleteToDo)
  } catch (err) {
    console.error(err)
  }
});

app.post('/signup', async (req, res) => {
  const {email, password} = req.params
  try {

  } catch (err) {
    console.error(err)
  }
});

app.post('/login', async (req, res) => {
  const {email, password} = req.params
  try {

  } catch (err) {
    console.error(err)
  }
});



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
