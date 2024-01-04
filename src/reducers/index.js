import convertDate from "../utils/convertDate";
import {
  SET_CONCURRENCY_COSTS,
  SET_MISC_EXPENSES,
  SET_TRIP_FINANCIALS,
  SET_PAYMENTS,
} from "../actions/types";

const initialState = {
  tripFinancials: [],
  payments: [],
  miscExpenses: [],
  concurrencyCosts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIP_FINANCIALS:
      return {
        ...state,
        tripFinancials: action.payload.map((el) => ({
          ...el,
          type: "هزینه سفر",
          datetime: el.request_datetime,
          date: el.request_datetime.split("T")[0],
          time: el.request_datetime.slice(11, 16),
          amount: el.final_price,
          driver: `کوریر: ${el.driver.split(" ")[1]}`,
          hub: `شعبه: ${el.hub.title}`,
        })),
      };
    case SET_PAYMENTS:
      return {
        ...state,
        payments: action.payload.map((el) => ({
          ...el,
          type: "شارژ حساب",
          date: el.datetime.split("T")[0],
          time: el.datetime.slice(11, 16),
        })),
      };
    case SET_MISC_EXPENSES:
      return {
        ...state,
        miscExpenses: action.payload.map((el) => ({
          ...el,
          datetime: el.created_at,
          description: el.title,
          type: "هزینه‌های متفرقه",
          date: el.created_at.split("T")[0],
          time: el.created_at.slice(11, 16),
        })),
      };
    case SET_CONCURRENCY_COSTS:
      return {
        ...state,
        concurrencyCosts: action.payload.map((el) => ({
          ...el,
          datetime: el.created_at,
          date: el.created_at.split("T")[0],
          time: el.created_at.slice(11, 16),
          type: "خرید ظرفیت",
          description: `خرید ظرفیت از تاریخ ${convertDate(
            el.start_date
          )} تا ${convertDate(el.end_date)}`,
        })),
      };
    default:
      return state;
  }
};

export default reducer;
