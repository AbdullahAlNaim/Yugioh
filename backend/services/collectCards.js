const { Pool } = require('pg');
const dotenv = require('dotenv');
const knex = require('knex');

dotenv.config({ path: './.env' });

const db = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT
});

db.connect((error) => {
  if (error) {
    console.log('Error connecting with the postgres DB', error);
  } else {
    console.log('PostgreSQL connected!');
  }
});

