import { useState } from "react";

function UserInput() {
    const [UserInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">initial investment</label>
                    <input type="number"
                        required
                        value={UserInput.initialInvestment}
                        onChange={(event) => handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="">annual investment</label>
                    <input type="number" required
                        value={UserInput.annualInvestment}
                        onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected return</label>
                    <input type="number" required
                        value={UserInput.expectedReturn}
                        onChange={(event) => handleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="">duration</label>
                    <input type="number" required
                        value={UserInput.duration}
                        onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section >
    );
}

export default UserInput;