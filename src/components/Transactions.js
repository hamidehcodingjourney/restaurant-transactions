import { useState } from "react";
import TransactionsList from "./TransactionsList";
import Header from "./Header";

const Transactions = () => {
  const [filter, setFilter] = useState("همه تراکنش‌ها");
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header
        filter={filter}
        search={search}
        setFilter={setFilter}
        setSearch={setSearch}
      />
      <TransactionsList filter={filter} search={search} />
    </div>
  );
};

export default Transactions;
