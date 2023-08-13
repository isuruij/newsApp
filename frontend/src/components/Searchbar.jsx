import { useState } from "react";

function Searchbar() {
  const [searchText, setsearchText] = useState("");
  const [submit, setsubmit] = useState("web development");
  return (
    <div className="m-4">
      <label for="validationTooltip01" className="form-label">
        Search News
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
      ></input>
      <button className="btn btn-primary mt-2">Search</button>
    </div>
  );
}

export default Searchbar;
