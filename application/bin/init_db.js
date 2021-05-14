const mysql = require('mysql2');
const { exec } = require('child_process');

var con = mysql.createConnection({
    host: "localhost",
    user: "photoapp",
    password: "csc317",
    database: "csc317db",
    multipleStatements: true // this allow you to run multiple queries at once.
});

// Where would the file be located?
let dumpFile = '../config/csc317db.sql';

let importTo = {
    host: "localhost",
    user: "photoapp",
    password: "csc317",
    database: "csc317db",
    multipleStatements: true // this allow you to run multiple queries at once.
}

// Import the database.
exec(`mysql -u${importTo.user} -p${importTo.password} -h${importTo.host} ${importTo.database} < ${dumpFile}`, (err, stdout, stderr) => {
    if (err) { console.error(`exec error: ${err}`); return; }

    console.log(`The import has finished.`);
});
