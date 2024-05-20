import { useState, useRef } from "react";

const Checkout = ({ eMailAddress }) => {
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);

    const inputRef = useRef();
    const onSubmitForm = (event) => {
        event.preventDefault();
        if (isEmailValid) {
            // execute the parent function with the email value
            eMailAddress(inputRef.current.value);
        } else {
            // if value is invalid, do this
            console.log("not submitted, field invalid");
        }
    };
    const onValidateInput = (event) => {
        setIsEmailFilled(true);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
        }
        setIsInputValid(true);
    };

    return (
        <div className="mt-4 mb-4">
            <form className={isInputValid ? "was-validated" : ""} onSubmit={onSubmitForm}>
                <div className="form-label">
                    <label htmlFor="email">e-mail</label>
                </div>
                <div className="d-flex flex-direction-row justify-content-start">
                    <div className="form-outline">
                        <input
                            type="email"
                            className="form-control"
                            placeholder=""
                            ref={inputRef}
                            id="email"
                            name="email"
                            aria-label="Email input field"
                            aria-describedby="emailHelp"
                            onInput={onValidateInput}
                            required
                        />
                        <div className={isEmailValid ? "valid-feedback" : "invalid-feedback"}>
                            {isEmailValid ? "Email address looks good." : "Please enter a valid email address."}
                        </div>
                    </div>
                </div>
                <div id="emailHelp" className="form-text">
                    {isEmailFilled ? "" : "Please enter an email address."}
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                    Place order
                </button>
            </form>
        </div>
    );
};

export default Checkout;
