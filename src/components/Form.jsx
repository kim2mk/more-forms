import React, {useState} from "react";

const Form = ()=>{
    let [firstName, setFname] = useState("");
    let [lastName, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [cpassword, setCPassword] = useState("");

    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input onChange={(e)=>setFname(e.target.value)} type="text"/>
                    {
                        firstName.length<2 && firstName.length>0 ? <p className="text-danger">First Name must be at least 2 characters</p>: null
                    }
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input onChange={(e)=>setLname(e.target.value)} type="text"/>
                    {
                        lastName.length<2 && lastName.length>0 ? <p className="text-danger">Last Name must be at least 2 characters</p>: null
                    }
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email"/>
                    {
                        email.length<5 && email.length>0 ? <p className="text-danger">Email must be at least 5 characters</p>: null
                    }
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password"/>
                    {
                        password.length<8 && password.length>0 ? <p className="text-danger">Password must be at least 8 characters</p>: null
                    }
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input onChange={(e)=>setCPassword(e.target.value)} type="password"/>
                    {
                        cpassword!==password ? <p className="text-danger">Passwords must match</p>: null
                    }
                </div>
                <input type="submit" value="Submit" className="btn btn-success mt-3" />
            </form>
        </div>
    )
}

export default Form;
