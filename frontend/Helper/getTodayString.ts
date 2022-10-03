const getTodayString = () => {
  let today = new Date();
  const todayString = today.toISOString().split("T")[0];
  return todayString;
};

export default getTodayString;
