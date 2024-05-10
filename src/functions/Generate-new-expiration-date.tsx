export const generateNewExpirationDate = () => {
  const limitTimeExpiration = 420; //In minutes 7:00 min
  const todayInSeconds = new Date().getTime() / 1000;
  return Math.trunc(todayInSeconds + limitTimeExpiration).toString();
};
