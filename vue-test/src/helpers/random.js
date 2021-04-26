export const getRandomId = () => {
  const currentTimestamp = Date.now();
  const randomNumber = Math.round(Math.random() * 10 ** 5);

  return currentTimestamp + randomNumber;
};
