import moment from "jalali-moment";
const convertDate = (dateStr) => {
  return moment(dateStr, "YYYY-MM-DD").format("jYYYY/jMM/jDD");
};

export default convertDate;
