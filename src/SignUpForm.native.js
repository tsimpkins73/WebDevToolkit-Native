import React from 'react'
import './css/SignUpForm.css'
import { Link } from 'react-router-dom';
import UserService from './services/user-service'


export default class SignUpForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }


/* This functions posts the new user to the API and uses that user to login */    
    handleSubmit = ev => {
        ev.preventDefault()
        const { name, username, password } = ev.target

        this.setState({ error: null })
        UserService.postUser({
            username: username.value,
            password: password.value,
            name: name.value,
        })
            .then(user => {
                name.value = ''
                username.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
                this.props.history.push('/dashboard')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

     render() {
        let handleSubmit=this.handleSubmit;
        return (
            <section className="LandingContainer">
                <div className="SignUpForm">
                <div class="loginFormHeader"><h1 className="lpHeaderText">Please Sign Up to Join theConsole</h1></div>
                    <form className='RegistrationForm' onSubmit={handleSubmit} >
                        <div className='formLine'> <label htmlFor="Name">Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className='formLine'> <label htmlFor="Username">Email</label>
                            <input type="email" name="username" />
                        </div>
                        <div className='formLine'> <label htmlFor="Password">Password</label>
                            <input type="text" name="password" />
                        </div>
                        <p id="passwordDesc" >Password must be at least 8 characters, and
    must contain one upper case, lower case, number and special character
</p>
<div id="resourceButtons">
    <button className="lpButton" type="submit">Submit</button>
                            <Link to="/login"><button className="lpButton">Login</button></Link>
                        </div>

                    </form>
                    <div>{this.state.error}</div>
                </ div>
            </ section>
        )};
}