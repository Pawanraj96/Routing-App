import React, { useState } from 'react'


function Login(props) {
    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''
    })
    //-----------------------------------------------
    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')
    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')


    //-----------------------------------------------
    const Login = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);

        const isEmailValid = validateEmail(userDetails.email)
        const isPasswordValid = validatePassword(userDetails.password)
        if (isEmailValid && isPasswordValid) {
            console.log('props', props);
            props.history.push('/home')
        } else {
            console.error('not valid');
        }
    }
    const validateEmail = (email) => {
        if (email) {
            let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (email.match(mail)) {
                setisEmailValid(true)
                setemailError('')
                return true
            } else {
                setisEmailValid(false)
                setemailError('*Please enter valid email')
                return false
            }
        } else {
            setisEmailValid(false)
            setemailError('*Email cannot be empty')
            return false
        }
    }
    const validatePassword = (password) => {
        if (password) {
            let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*]).{6,20}$/;
            if (password.match(pass)) {
                setisPasswordValid(true)
                setpasswordError('')
                return true
            } else {
                setisPasswordValid(false)
                setpasswordError('*Please enter valid password')
                return false
            }
        } else {
            setisPasswordValid(false)
            setpasswordError('*Password cannot be empty')
            return false
        }
    }
    //--------------------------------------------------
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] = event.target.value
        setuserDetails(userDetailsCopy)
    }
    const navigateToRegister = () =>{
        props.history.push('/register')
    }
    return (
        <div className='login'>
            <form onSubmit={Login} className="shadow p-3 mb-5 bg-white rounded">
                <div className="form-group p-2 " >
                    <input  className=" form-control form-control-sm" type="text"
                        name="email"
                        placeholder='Enter email'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.email} />
                    {!isEmailValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{emailError}</span> : null}
                </div>
                <div className="form-group p-2 " >
                    <input  className=" form-control form-control-sm" type="password"
                        name="password"
                        placeholder='Enter password'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.password} />
                    {!isPasswordValid ? <span style={{  
                        color: 'red',
                        fontSize: '12px'
                    }}>{passwordError}</span> : null}
                </div>
                <div className="form-group p-2 ">
                    <input className="btn btn-primary "  type='submit' value='Login' /><br />
                    Don't have an account? <span onClick={()=>{navigateToRegister()}}>register</span>
                </div>
            </form>
        </div>
    )
}

export default Login
