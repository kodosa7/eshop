const Search = ({ handleSearch, searchInputValue, setSearchInputValue }) => {
    const handleSubmit = (e, value) => {
        handleSearch(value);
        e.preventDefault();
    };

    return (
        <form className="mt-4 mb-4" onSubmit={(e) => handleSubmit(e, searchInputValue)}>
            <div className="input-group">
                <div className="form-outline">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        id="search1"
                        name="search"
                        aria-label="Search input field"
                        aria-describedby="searchHelp"
                        onChange={(event) => setSearchInputValue(event.target.value)}
                        value={searchInputValue}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    );
};

export default Search;
