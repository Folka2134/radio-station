import fs from "fs";

const directory =
  "/home/folka/Programming/Projects/radio_station/src/assets/presenters"; // replace with the path to your directory
const extension = ".webp";

fs.readdir(directory, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(extension)) {
      const name = file.slice(0, -extension.length);
      console.log(name);
    }
  });
});
