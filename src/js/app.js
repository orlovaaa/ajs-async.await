import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving)
    return saving;
  } catch (error) {
    return error;
  }
})();