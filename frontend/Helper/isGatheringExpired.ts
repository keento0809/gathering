import getTodayString from "./getTodayString";

const isGatheringExpired = (date: string) => {
  const todayString: string = getTodayString();
  return todayString > date;
};

export default isGatheringExpired;
