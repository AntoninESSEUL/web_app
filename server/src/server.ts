import app from "./app";
import { AppDataSource } from "./config/database";
import { env } from "./config/env";

// Database initialization
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    // Start server
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
    process.exit(1);
  });
