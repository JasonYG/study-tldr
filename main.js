const express = require("express");
const path = require("path");
const app = express();

app.get("/api/test", (req, res) => res.send({ Hello: "world" }));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let ParseText = require("./back-end/ParseText");
let SummarizeText = require("./back-end/SummarizeText");
let ExtractTerms = require("./back-end/ExtractTerms");

const fs = require("fs");
/**
 * Function used to test object functionality
 */
async function main() {
  let parser = new ParseText();
  let summarizer = new SummarizeText();
  let extractor = new ExtractTerms();

  //Demonstration of polymorphism
  //let textAPIs = [summarizer, parser, extractor];

  await summarizer.callApi();
  // console.log(summarizer.summary);
}
main();
