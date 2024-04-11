const Checkout = (props) => {
    const { eMail, handleEmail } = props;

    return (
        <div className="mt-4 mb-4">
            <div className="form-label">
                <label htmlFor="field">e-mail</label>
            </div>
            <div className="input-group">
                <input
                    className="form-control"
                    type="e-mail"
                    id="e-mail"
                    name="e-mail"
                    required
                    value={eMail}
                    onChange={handleEmail}
                />
            </div>
            <p>Please enter an email address.</p>
            <button type="button" className="btn btn-primary" onClick={""}>
                Place order
            </button>
        </div>
    );
};

export default Checkout;
