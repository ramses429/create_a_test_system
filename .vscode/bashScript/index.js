const { exec } = require("child_process");
const MAX_NUMBER_OF_FILES_PER_COMMIT = 10;

const rootPath = __dirname;
function checkMaxNumberOfTheFiles(numberOfFiles) {
  if (numberOfFiles < MAX_NUMBER_OF_FILES_PER_COMMIT) {
    console.log(
      "The number of files is less than the maximum number of files per commit"
    );
    return true;
  } else throw new Error("You have too many files in your commit");
}

exec(`sh ${rootPath}/checkMaxFilesPerCommit.sh`, (_error, stdout) => {
  const numberOfFiles = parseInt(stdout, 10);
  checkMaxNumberOfTheFiles(numberOfFiles);
});
