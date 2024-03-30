import { app } from "./app";

const port = process.env.PORT;

async function main() {
  app.listen(port, () => {
    console.log("Server running at port", port);
  });
}

main();
