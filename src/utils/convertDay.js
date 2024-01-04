const convertDay = (datetime) => {
  const weekdays = {
    0: "یکشنبه",
    1: "دوشنبه",
    2: "سه شنبه",
    3: "چهارشنبه",
    4: "پنج شنبه",
    5: "جمعه",
    6: "شنبه",
  };

  const dayIndex = new Date(datetime).getDay();
  return weekdays[dayIndex];
};

export default convertDay;
