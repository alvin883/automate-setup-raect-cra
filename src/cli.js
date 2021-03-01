const prompt = require("./prompt");
const execShell = require("exec-sh");
const chalk = require("chalk");

const runCreateReactApp = async () => {
  const options = await prompt();

  execShell(
    `npx create-react-app ${options.folderName}`,
    function (err, stdout) {
      if (err) {
        console.error(err);
      } else {
        console.log(
          "%s Finish installing Create React App!",
          chalk.green.bold("DONE"),
        );
        console.log("%s Wait there's more!", chalk.yellow.bold("PROCESSING"));

        execShell(
          [`cd ${options.folderName}`, `npm install -D sass @craco/craco`],
          function (err, stdout) {
            if (err) {
              console.error(err);
            }
          },
        );
      }
      cd;
    },
  );

  //   await execShell(`npm install -D sass @craco/craco`).catch((err) => {
  //     console.error(err);
  //   });
};

export const run = () => runCreateReactApp();
