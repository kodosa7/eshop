import { useState, useRef } from "react";

const Search = (props) => {
    const { handleSearch } = props;
    const [isSearchValid, setIsSearchValid] = useState(false);
    const [isSearchFieldEmpty, setIsSearchFieldEmpty] = useState(false);
    const [lastTypedString, setLastTypedString] = useState("");

    const handleValidation = (event) => {
        event.preventDefault();
        setIsSearchFieldEmpty(true);
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setIsSearchValid(false);
        } else {
            setIsSearchValid(true);
        }
        form.classList.add("was-validated");
    };

    const handleOnChange = (event) => {
        const formValue = event.target.value;
        setLastTypedString(formValue);
        console.log(formValue);
        event.preventDefault();
    };

    const inputRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSearchValid) {
            // execute the parent function with the email value
            handleSearch(inputRef.current.value);
        } else {
            // if value is invalid, do this
            console.log("not submitted, field invalid");
        }
    };

    return (
        <form className="mt-4 mb-4">
            <div className="input-group">
                <div className="form-outline">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        ref={inputRef}
                        id="search1"
                        name="search"
                        aria-label="Search input field"
                        aria-describedby="searchHelp"
                        onChange={handleOnChange}
                        onSubmit={handleSubmit}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    );
};

export default Search;
