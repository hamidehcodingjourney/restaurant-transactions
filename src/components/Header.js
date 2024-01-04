import Dropdown from "./Dropdown.js";
import Search from "./Search.js";

const Header = ({ filter, setFilter, search, setSearch }) => {
  return (
    <div className="d-flex justify-content-between align-items-center m-3">
      <div className="col-md-4 text-start">
        <Dropdown filter={filter} setFilter={setFilter} />
      </div>
      {filter === "هزینه سفر" && (
        <div className="col-md-4">
          <Search search={search} setSearch={setSearch} />
        </div>
      )}
      <div className="col-md-4 fs-4 fw-bold"> تمام تراکنش‌ها</div>
    </div>
  );
};
export default Header;
