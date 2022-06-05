const fs = require("fs");
const path = require("path");

async function writeToLocalFile(result) {
  const filePath = path.resolve(path.dirname("temp"), "temp", "reults.txt");
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
  const filePath = path.resolve(path.dirname("temp"), "temp", "reults.txt");
  const file = fs.readFileSync(filePath, "utf8");
  const resultArray = file.split("\n");

  if (!resultArray[resultArray.length - 1]) {
    resultArray.pop();
  }
  const json = {
    results: [],
  };

  if (!limit || isNaN(limit)) {
    for (let i = 1; i <= 5; i++) {
      if (!resultArray[resultArray.length - i]) {
        break;
      }
      json.results.push(resultArray[resultArray.length - i]);
    }
  } else {
    for (let i = 1; i <= limit; i++) {
      if (!resultArray[resultArray.length - i]) {
        break;
      }
      json.results.push(resultArray[resultArray.length - i]);
    }
  }

  return json;
}

readFromLocalFile();
module.exports = { writeToLocalFile, readFromLocalFile };
