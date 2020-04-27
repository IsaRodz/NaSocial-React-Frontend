import React, { useState } from "react";

function Login() {
    const [user, setUser] = useState({ email: null, password: null });

    // eslint-disable-next-line
    const [err, setErr] = useState({ email: null, password: null });

    const sendLoginForm = e => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div className="login ">
            <form onSubmit={sendLoginForm}>
                <h2>Sign In </h2>
                <div className="input">
                    <input
                        onChange={e =>
                            setUser({ ...user, email: e.target.value })
                        }
                        type="email"
                        placeholder="Email"
                    />
                    <span></span>
                </div>
                {err.email ? <span className="error">{err.email}</span> : null}
                <div className="input">
                    <input
                        onChange={e =>
                            setUser({ ...user, password: e.target.value })
                        }
                        type="password"
                        placeholder="Password"
                    />
                    <span></span>
                </div>
                {err.password ? (
                    <span className="error">{err.password}</span>
                ) : null}
                <button type="submit" className="btn">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Login;
