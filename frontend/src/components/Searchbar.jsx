function Searchbar() {
    return (
        <div className="m-4">
            <label for="validationTooltip01" className="form-label">
                Search News
            </label>
            <input
                type="text"
                className="form-control"
                id="validationTooltip01"
                placeholder="Search"
                required
            ></input>
            <button className="btn btn-primary mt-2">Search</button>
        </div>
    );
}

export default Searchbar;
