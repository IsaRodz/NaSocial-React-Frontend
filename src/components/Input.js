import React from "react";

function Input() {
    return (
        <>
            <div className="input">
                <input
                    onChange={e => setUser({ ...user, email: e.target.value })}
                    type="email"
                    placeholder="Email"
                />
                <span></span>
            </div>
            {err.email ? <span className="error">{err.email}</span> : null}
        </>
    );
}

export default Input;
