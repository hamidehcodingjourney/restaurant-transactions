import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/index";
import convertDate from "../utils/convertDate";

const Transactions = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    console.log("Fetching data...");
    dispatch(fetchData());
  }, [dispatch]);

  const allTransactions = [
    ...data.tripFinancials,
    ...data.payments,
    ...data.miscExpenses,
    ...data.concurrencyCosts,
  ];

  return (
    <div>
      <h2>همه تراکنش‌ها</h2>
      {allTransactions.map((item) => (
        <div key={item.id}>
          <div className="text-end px-2">
            {convertDate(item.date)}، {item.time}
          </div>
          <div
            className={
              item.amount < 0 ? "row text-danger px-2" : "row text-success px-2"
            }
          >
            <div className="col-md-6 text-start">{item.amount}</div>
            <div className="col-md-6 text-end">{item.type}</div>
          </div>
          <div className="text-end px-2">{item?.description}</div>
          <div className="text-end px-2">{item?.driver}</div>
          <div className="text-end px-2">{item?.hub}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Transactions;
