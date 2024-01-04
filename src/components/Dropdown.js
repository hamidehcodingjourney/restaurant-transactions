import { useSelector } from "react-redux";

const Dropdown = ({ filter, setFilter }) => {
  const data = useSelector((state) => state.data);
  const transactionTypesSet = new Set();
  Object.keys(data).forEach((key) => {
    data[key].forEach((item) => {
      transactionTypesSet.add(item.type);
    });
  });
  const transactionTypes = ["همه تراکنش‌ها", ...transactionTypesSet];

  return (
    <div>
      <select
        className="border rounded border-gray-400 w-60 fs-5 p-1"
        id="dropdown"
        name="dropdown"
        dir="rtl"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filter}
      >
        {transactionTypes.map((el) => (
          <option key={el} value={el} className="fs-6 p-1">
            {el}
          </option>
        ))}
      </select>
      <label htmlFor="dropdown" className="fs-4 fw-bold">
        نوع تراکنش{" "}
      </label>
    </div>
  );
};

export default Dropdown;
