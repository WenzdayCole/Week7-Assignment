// import { db } from "./dbConnection.js";
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const dbConnectionString = process.env.DB_CONNECTION_STRING;
const db = new pg.Pool({
  connectionString: dbConnectionString,
});

db.query(
    `INSERT INTO dev_posts (name, post)
    VALUES ('RDog', 'I'm bad at programming, so I'm making an app where you can ask people for help with code. It would be ironic if the app works.)`
);

// ?from Supabase
// INSERT INTO dev_posts (name, post)
// VALUES ('RDog', 'Im bad at programming, so Im making an app where you can ask people for help with code. It would be ironic if the app works.');

// INSERT INTO dev_posts (name, post)
// VALUES ('Tester', 'I dont know how to test my post route in Postman, pls help!');    
