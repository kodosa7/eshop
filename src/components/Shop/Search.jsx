import { useState, useRef } from "react";

const Search = () => {
    const [isSearchValid, setIsSearchValid] = useState(false);
    const [isSearchFieldEmpty, setIsSearchFieldEmpty] = useState(false);
    const [lastTypedString, setLastTypedString] = useState("");
    const valueRef = useRef("");

    // zjednodusit!
    const handleOnChange = (event) => {
        const formValue = event.target.value;
        setLastTypedString(formValue);
        valueRef.current = formValue;
    };

    const handleSearch = () => {
        console.log("Value from handleOnChange in handleSearch:", valueRef.current);
    };

    return (
        <form
            className="mt-4 mb-4"
            onSubmit={(event) => {
                event.preventDefault();
                handleSearch();
            }}
        >
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
