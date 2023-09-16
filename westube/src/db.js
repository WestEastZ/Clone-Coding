import mongoose from "mongoose";

// cmd mongo 입력 시 나오는 URL
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect
const db = mongoose.connection;

// Handler
const handleError = (error) => console.log("❌ DB Error", error);
const handleOpen = () => console.log("✅ Connnected to DB");

db.on("error", handleError);
db.once("open", handleOpen);
