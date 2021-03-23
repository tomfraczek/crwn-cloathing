import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign inwith your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" value='Submit Form'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;