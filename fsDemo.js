// import fs, { readFileSync } from "fs";
import fs from "fs/promises";

// readFile() - callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) {
//     throw new Error("err");
//   }
//   console.log(data);
// });

// readFileSync - synchronous version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data)

// readFile() - promise
// fs.readFile('./test.txt', 'utf8')
//  .then((data) => console.log(data))
//  .catch((err) => console.log(err))

//  readFile() - async/await
const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// readFile('./test.txt')

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./test2.txt", "Hola!");
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};

// writeFile();
// readFile("./test2.txt");

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./test3.txt", "\nThis is appended text.");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

appendFile()
readFile('./test3.txt')