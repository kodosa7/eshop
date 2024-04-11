const Checkout = (props) => {
    const { eMail, handleEmail } = props;

    return (
        <>
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
        </>
    );
};

export default Checkout;
