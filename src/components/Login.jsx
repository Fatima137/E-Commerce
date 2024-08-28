import React from 'react';

export const Login = ({ toggleForm }) => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor="login-email">Email</label>
                    <input id="login-email" type="email" />
                </div>
                <div>
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" />
                </div>
                <div>
                    <label>
                        <input type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <a href="#">Forgot Password</a>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            <div>
                <span>Don't Have an Account?</span>
                <button onClick={toggleForm}>Sign Up</button>
            </div>
        </div>
    );
};

export default Login;
