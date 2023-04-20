import fs from "fs";
// Specify the directory where the files are located
const dir =
  "/home/folka/Programming/Projects/radio_station/src/assets/presenters";

// Read the files in the directory
fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  // Loop through each file
  files.forEach((file) => {
    // Check if the file name contains spaces
    if (file.includes(" ")) {
      // Replace spaces with underscores
      const newFileName = file.replace(/ /g, "_");

      // Rename the file
      fs.rename(`${dir}/${file}`, `${dir}/${newFileName}`, (err) => {
        if (err) console.log(err);
      });
    }
  });
});
