import { app } from "./app";

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
main().catch(err => console.log(err));
