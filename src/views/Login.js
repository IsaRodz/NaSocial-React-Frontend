import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
    const [user, setUser] = useState({ email: null, password: null });

    // eslint-disable-next-line

    const sendLoginForm = async e => {
        e.preventDefault();

        const { data } = await axios.post("/api/users/login", {
            email: user.email,
            password: user.password,
        });
        if (data.response === "valid_user") {
            Swal.fire({
                title: "User validated",
                icon: "success",
                showConfirmButton: false,
                toast: true,
                position: "bottom-left",
                timer: 5000,
            });
        } else {
            Swal.fire({
                title: "User or password is incorrect",
                icon: "error",
                showConfirmButton: false,
                toast: true,
                position: "bottom-left",
                timer: 5000,
            });
        }
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
                        required
                    />
                    <span></span>
                </div>
                <div className="input">
                    <input
                        onChange={e =>
                            setUser({ ...user, password: e.target.value })
                        }
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <span></span>
                </div>
                <button type="submit" className="btn">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Login;
