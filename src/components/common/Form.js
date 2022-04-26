import React from 'react'

const Form = ({ title, setEmail, setPassword, handleAction }) => {

    return (
        <>
         <h1>{title}</h1>
            <form>
                <label>Email:
                    <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                </label><br />
                <label>Password:
                    <input type="password" placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} />
                </label><br />
                <button type="button" onClick={handleAction}>{title}</button>
            </form>
        </>
    )
}

export default Form