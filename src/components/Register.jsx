import React from 'react';

export const Register = ({ toggleForm }) => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <div>
                    <label htmlFor="register-name">Name</label>
                    <input id="register-name" type="text" />
                </div>
                <div>
                    <label htmlFor="register-email">Email</label>
                    <input id="register-email" type="email" />
                </div>
                <div>
                    <label htmlFor="register-password">Password</label>
                    <input id="register-password" type="password" />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <div>
                <span>Already Have an Account?</span>
                <button onClick={toggleForm}>Login</button>
            </div>
        </div>
    );
};

export default Register;
