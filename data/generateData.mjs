import sqlite3 from 'sqlite3';
import fs from 'fs';
import { open } from 'sqlite';

console.log('Generating Cangjie Data...');

// this is a top-level await
(async () => {
  // open the database
  const db = await open({
    filename: 'data/cangjie.db',
    driver: sqlite3.Database,
  });

  // Get the values out of the db
  const chars = await db.all(
    `SELECT codes.code, chars.chchar AS char
    FROM codes 
    INNER JOIN chars 
    ON chars.char_index = codes.char_index
    WHERE version = 5`,
  );

  // A map of characters to it's corresponding code
  const map = chars.reduce((acc, val) => {
    acc[val.char] = val.code;
    return acc;
  }, {});

  // Creates the data folder
  fs.mkdir(
    'static/data',
    { recursive: true }, (err) => {
      if (err) throw err;
    },
  );

  // write JSON string to a file
  fs.writeFile(
    'static/data/all_chars.json',
    JSON.stringify(map),
    (err) => {
      if (err) throw err;
      console.log('JSON data is saved.');
    },
  );
})()
