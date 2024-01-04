const Search = ({ serach, setSearch }) => {
  return (
    <div dir="rtl">
      <label className="fs-4">نام کوریر</label>
      <input
        type={"text"}
        onChange={(e) => setSearch(e.target.value)}
        className={"fs-5 p-1 border rounded border-gray-400 w-50"}
      />
    </div>
  );
};

export default Search;
