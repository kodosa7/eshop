import { useState, useRef } from "react";

const Search = (props) => {
    const { handleSearch } = props;
    const valueRef = useRef("");

    // zjednodusit!
    const handleOnChange = (event) => {
        const formValue = event.target.value;
        valueRef.current = formValue;
    };

    return (
        <form
            className="mt-4 mb-4"
            onSubmit={(event) => {
                event.preventDefault();
                handleSearch(valueRef.current);
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
