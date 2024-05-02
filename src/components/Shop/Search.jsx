import { useEffect, useRef } from "react";

const Search = (props) => {
    const { handleSearch, searchValue } = props;
    const valueRef = useRef("");

    console.log(`searchValue in Search: "${searchValue}"`);
    console.log(`valueRef.current: "${valueRef.current}"`);

    useEffect(() => {
        valueRef.current = searchValue;
    }, [searchValue]);

    const handleOnChange = (event) => {
        const formValue = event.target.value;
        valueRef.current = formValue;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(valueRef.current);
    };

    return (
        <form className="mt-4 mb-4" onSubmit={handleSubmit}>
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
                        onChange={handleOnChange}
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
