import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./src/routes/openaiRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
