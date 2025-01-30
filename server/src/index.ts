import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response): void => {
  res.json("Hello World");
});

app.listen(3001, (): void => {
  console.log("Server is running on port 3001");
});
