import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config()

const dbConnectionString = process.env.DB_CONNECTION_STRING;

export const db = new pg.Pool({
    connectionString: dbConnectionString,
});



const app = express()

app.use(express.json());

app.use(cors());

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", function (_, res) {
    res.json({message: "This is the root route."});
});

app.get('/posts', async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM dev_posts`);
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: 'Server is down :(' });
    }
  });

// app.get("/", async (req, res) =>{
//     const query = await db.query(`SELECT * FROM dev_posts`);
//     await res.json(query.rows);
// });

app.post("/new-data", async (req, res) => {
    const data = req.body.dev_postsValues;
const query = await db.query(
`INSERT INTO dev_posts (name, post) VALUES ($1, $2)`,
[name, post]
);
await res.json(query.rows)});
