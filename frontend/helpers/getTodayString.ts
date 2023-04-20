const getTodayString = () => {
  let today = new Date();
  const todayString: string = today.toISOString().split("T")[0];
  return todayString;
};

export default getTodayString;
