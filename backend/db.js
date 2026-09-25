const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to local SQLite database file
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening SQLite database', err.message);
    } else {
        console.log('Connected to the SQLite database successfully!');
    }
});

module.exports = db;