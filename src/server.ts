import { app } from "./app";
import { seedSuperAdmin } from "./app/db";

const port = process.env.PORT;

async function main() {
  try {
    console.log("Database connected!");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

seedSuperAdmin();

main().catch(err => console.log(err));
