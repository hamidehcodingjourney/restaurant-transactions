import {
  SET_TRIP_FINANCIALS,
  SET_PAYMENTS,
  SET_MISC_EXPENSES,
  SET_CONCURRENCY_COSTS,
} from "./types";

export const setTripFinancials = (tripFinancials) => ({
  type: SET_TRIP_FINANCIALS,
  payload: tripFinancials,
});

export const setPayments = (payments) => ({
  type: SET_PAYMENTS,
  payload: payments,
});

export const setMiscExpenses = (miscExpenses) => ({
  type: SET_MISC_EXPENSES,
  payload: miscExpenses,
});

export const setConcurrencyCosts = (concurrencyCosts) => ({
  type: SET_CONCURRENCY_COSTS,
  payload: concurrencyCosts,
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      console.log("Attempting to fetch data...");

      const response = await fetch("/data.json");

      if (!response.ok) {
        throw new Error("Network response was ot ok");
      }
      const data = await response.json();
      console.log("Fetched Data:", data);

      dispatch(setTripFinancials(data.trip_financials));
      dispatch(setPayments(data.payments));
      dispatch(setMiscExpenses(data.misc_expenses));
      dispatch(setConcurrencyCosts(data.concurrency_costs));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
