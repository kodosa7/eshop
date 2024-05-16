import { useState, useRef } from "react";

const Checkout = ({ handleEmail }) => {
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailFilled, setIsEmailFilled] = useState(false);

    const handleValidation = (event) => {
        setIsEmailFilled(true);
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
        }
        form.classList.add("wasValidated");
    };

    const inputRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEmailValid) {
            // execute the parent function with the email value
            handleEmail(inputRef.current.value);
        } else {
            // if value is invalid, do this
            console.log("not submitted, field invalid");
        }
    };

    return (
        <form className="mt-4 mb-4 needs-validation" onInput={handleValidation} noValidate>
            <div className="form-label">
                <label htmlFor="email">e-mail</label>
            </div>
            <div className="input-group">
                <input
                    type="email"
                    placeholder=""
                    ref={inputRef}
                    className="form-control"
                    id="email"
                    name="email"
                    aria-label="Email input field"
                    aria-describedby="emailHelp"
                    onSubmit={handleSubmit}
                    required
                />
                <div className={isEmailValid ? "valid-feedback" : "invalid-feedback"}>
                    {isEmailValid ? "Email address looks good." : "Please enter a valid email address."}
                </div>
            </div>
            <div id="emailHelp" className="form-text">
                {isEmailFilled ? "" : "Please enter an email address."}
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Place order
            </button>
        </form>
    );
};

export default Checkout;
