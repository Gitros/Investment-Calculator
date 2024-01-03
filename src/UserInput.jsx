function UserInput({ onChange, UserInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">initial investment</label>
                    <input type="number"
                        required
                        value={UserInput.initialInvestment}
                        onChange={(event) => onChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="">annual investment</label>
                    <input type="number" required
                        value={UserInput.annualInvestment}
                        onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected return</label>
                    <input type="number" required
                        value={UserInput.expectedReturn}
                        onChange={(event) => onChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="">duration</label>
                    <input type="number" required
                        value={UserInput.duration}
                        onChange={(event) => onChange('duration', event.target.value)} />
                </p>
            </div>
        </section >
    );
}

export default UserInput;