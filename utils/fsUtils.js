const fs = require("fs");
const path = require("path");

async function writeToLocalFile(result) {
  const filePath = path.resolve(path.dirname("temp"), "temp", "results.txt");
  try {
    await fs.writeFile(
      filePath,
      `${JSON.stringify(result)}\n`,
      { flag: "a+" },
      (err, result) => {
        if (err) console.error("Error:", err);
      }
    );
  } catch (err) {
    console.error(err);
  }
}

function readFromLocalFile(limit) {
  let resultsArray = [];
  const filePath = path.resolve(path.dirname("temp"), "temp", "results.txt");

  try {
    if (fs.existsSync(filePath)) {
      const file = fs.readFileSync(filePath, "utf8");
      resultsArray = file.split("\n");
      if (!resultsArray || resultsArray[0] === "") return;
    } else {
      return;
    }
    if (!resultsArray[resultsArray.length - 1]) {
      resultsArray.pop();
    }
    const json = {
      results: [],
    };

    if (!limit || isNaN(limit)) {
      for (let i = 1; i <= 5; i++) {
        if (!resultsArray[resultsArray.length - i]) {
          break;
        }
        json.results.push(JSON.parse(resultsArray[resultsArray.length - i]));
      }
    } else {
      for (let i = 1; i <= limit; i++) {
        if (!resultsArray[resultsArray.length - i]) {
          break;
        }
        json.results.push(JSON.parse(resultsArray[resultsArray.length - i]));
      }
    }

    return json;
  } catch (err) {
    console.log(err);
  }
}






readFromLocalFile();
module.exports = { writeToLocalFile, readFromLocalFile };
