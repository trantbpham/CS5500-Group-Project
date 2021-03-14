const { MongoClient } = require("mongodb");
const url = "mongodb://localhost/coveyuserdatabase";
// Atlas URL  - replace UUU with user, PPP with password, XXX with hostname
const url =
  "mongodb+srv://testUser:P@123456@coveytownusers.w8gis.mongodb.net/test";

async function connectToDb() {
  const user = new MongoClient(url, { useNewUrlParser: true });
  await user.connect();
  console.log("Connected to MongoDB at", url);
  db = user.db();
}

(async function () {
  try {
    await connectToDb();
    app.listen(3000, function () {
      console.log("App started on port 3000");
    });
  } catch (err) {
    console.log("ERROR:", err);
  }
})();

function getDb() {
  return db;
}
