import React, {Component} from 'react'

class Login extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        if (localStorage.getItem('isLogin')) {
            this.props.history.push('/dashboard')
        }
    }
    

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.isLogin)
        if ((this.state.username === 'admin') && (this.state.password === '12345')) {
            
            localStorage.setItem('isLogin', true)
            this.props.history.push('/dashboard')
        } else {
            alert('Invalid Credential')
        }
        
        
        // this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className='container' style={{marginTop: 30, paddingTop: 50}}>
                <div className='row'>
                    <div className='col-3'>
                       &nbsp;
                    </div>
                    <div className='col-6'>
                        <h1>Login Form</h1>
                        <form onSubmit={this.handleSubmit} className='ui form'>
                            <div className='field'>
                                <label htmlFor='username'>Username</label>
                                <input onChange={this.handleChangeUsername} name='username' type='text' 
                                    placeholder='Type your username' />                            
                            </div>
                            <div className='field'>
                                <label htmlFor='password'>Password</label>
                                <input onChange={this.handleChangePassword} name='password' type='password' 
                                    placeholder='Type your password' />                            
                            </div>
                            
                            <div className='field'>
                                <button className='btn-primary btn' 
                                    onClick={this.handleSubmit}>
                                        Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='col-3'>
                        &nbsp;
                    </div>
                </div>
                <div className='row' style={{marginTop: 50}}>
                    <div className='col-12' style={{textAlign: 'center'}}>
                       <p>Username = admin</p>
                       <p>Password = 12345</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login