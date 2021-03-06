const recursiveFibonacci = require("../utils/fibonacci");
const { getCurrentTime } = require("../utils/time");
const { writeToLocalFile, readFromLocalFile } = require("../utils/fsUtils");

async function getFibonacci(req, res) {
  const { n } = req.params;
  const nInt = parseInt(n);
  const LIMIT = 1476;
  if (isNaN(nInt) || nInt < 0) {
    res.status(400).json({ msg: "You must pass a positive integer!" });
    return;
  }

  if (nInt === 42) {
    res.status(400).json({ msg: "42 is the meaning of life!" });
    return;
  }

  if (nInt > LIMIT) {
    res.status(400).json({ msg: "Requested number exceeded limit" });
    return;
  }

  const resBody = {
    result: recursiveFibonacci(nInt),
    time: getCurrentTime(),
    valuePassed: nInt,
  };
  writeToLocalFile(resBody);
  res.status(200).json(resBody);
}

async function getHistory(req, res) {
  const { limit } = req.query;
  const limitInt = parseInt(limit);

  const results = readFromLocalFile(limitInt);
  if (!results) {
    res.status(404).json({ msg: "No results were found" });
    return;
  }
  res.status(200).json(results);
}

module.exports = { getFibonacci, getHistory };
