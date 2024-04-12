import React, { useState } from "react";

const Checkout = (props) => {
    const { handleEmail } = props;
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState(false);

    const handleValidation = (event) => {
        setIsEmailFieldEmpty(true);
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
        }
        form.classList.add("was-validated");
    };

    return (
        <form className="mt-4 mb-4 needs-validation" onInput={handleValidation} noValidate>
            <div className="form-label">
                <label htmlFor="email">e-mail</label>
            </div>
            <div className="input-group">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-label="Email input field"
                    aria-describedby="emailHelp"
                    onChange={handleEmail}
                    required
                />
                <div className={isEmailValid ? "valid-feedback" : "invalid-feedback"}>
                    {isEmailValid ? "Email address looks good." : "Please enter a valid email address."}
                </div>
            </div>
            <div id="emailHelp" className="form-text">
                {isEmailFieldEmpty ? "" : "Please enter an email address."}
            </div>
            <button type="submit" className="btn btn-primary">
                Place order
            </button>
        </form>
    );
};

export default Checkout;
