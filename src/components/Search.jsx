const Search = ({ searchInputValue, setSearchInputValue, onSubmitSearchForm }) => {
    return (
        <form onSubmit={onSubmitSearchForm}>
            <div className="input-group">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    id="search1"
                    name="search"
                    aria-label="Search input field"
                    onChange={(event) => setSearchInputValue(event.target.value)}
                    value={searchInputValue}
                    required
                />
                <button type="submit" className="btn btn-primary">
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    );
};

export default Search;