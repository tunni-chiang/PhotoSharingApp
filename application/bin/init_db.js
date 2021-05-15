const Importer = require('../helpers/mysql-import'); // had to modify to allow for mySql2 authentication

const host = 'localhost';
const user = "photoapp";
const password = "csc317";
const database = "csc317db";

const importer = new Importer({ host, user, password, database });

let dumpFile = 'config/csc317db.sql';
var data;

importer.onProgress(progress=>{
    var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
    console.log(`${percent}% Completed`);
  });
  
  importer.import(dumpFile)
  .then(()=>{
    var files_imported = importer.getImported();
    console.log(`${files_imported.length} SQL file(s) imported.`);
  })
  .catch(err=>{
    console.error(err);
  });
