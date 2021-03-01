const prompt = require("./prompt");
const execShell = require("exec-sh").promise;

const runCreateReactApp = async () => {
  const options = await prompt();

  await execShell(`npx create-react-app ${options.folderName}`).catch((err) =>
    console.error(err)
  );
};

export const run = () => runCreateReactApp();
