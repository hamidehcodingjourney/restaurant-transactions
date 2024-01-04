import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions";
import convertDate from "../utils/convertDate";
import convertDay from "../utils/convertDay";
import convertPriceFromat from "../utils/convertPriceFormat";

const TransactionsList = ({ filter, search }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    console.log("Fetching data...");
    dispatch(fetchData());
  }, [dispatch]);

  const transactions = Object.values(data).flatMap((array) => array);
  transactions.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

  const selectedTransactions =
    filter === "همه تراکنش‌ها"
      ? transactions
      : filter === "هزینه سفر"
      ? transactions
          .filter((item) => item.type === filter)
          .filter((item) => item.driver.includes(search))
      : transactions.filter((item) => item.type === filter);

  let currentDate = null;
  const transactionsList = selectedTransactions.map((item, index) => {
    let headerDate = null;

    if (currentDate !== item.date) {
      currentDate = item.date;
      headerDate = (
        <div>
          {convertDate(currentDate)} {convertDay(item.datetime)}
        </div>
      );
    }

    return (
      <div key={item.id} className="px-3 fs-6">
        <div
          className={
            headerDate
              ? "bg-body-secondary p-2 text-dark text-end fw-bold mb-3"
              : "mb-0 p-0"
          }
        >
          {headerDate}
        </div>
        <div>
          <div className="text-end px-2">
            {convertDate(item.date)} ،{item.time}
          </div>
          <div
            className={
              item.amount < 0 ? "row text-danger px-2" : "row px-2 text-success"
            }
          >
            <div className="col-md-6 text-start">
              {convertPriceFromat(item.amount)}
            </div>
            <div className="col-md-6 text-end">{item.type} </div>
          </div>
        </div>
        <div className="text-end px-2">{item?.description}</div>
        <div className="text-end px-2">{item?.driver}</div>
        <div className="text-end px-2">{item?.hub}</div>
        <hr></hr>
      </div>
    );
  });

  return <div>{transactionsList}</div>;
};

export default TransactionsList;
