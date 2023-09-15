const express = require("express");
const app = express();
const port = 3000;
const bot = require("./services/bot");

app.use(express.json());

app.get("/", (request, response) => {
  // TODO: Send a response detailing endpoints and how to use them.
  response.send("ok");
});

app.post("/reaction", async (request, response, next) => {
  response.json(await bot.reaction(request.body));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
