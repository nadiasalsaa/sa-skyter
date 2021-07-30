import {Component} from 'react';
import './asset/login.css';
import AlertDialogRegister from '../components/AlertDialogRegister';
import AlertDialogNewPost from '../components/AlertDialogNewPost';
import AlertRedirect from '../components/AlertRedirect';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_login: {
                email: '',
                password: '',
            },
        }
    }

    // submitLogin = (email, password) => {
    //     alert("email: " + email + ", password: " + password);
    // }

    
    handleChangeDataLogin = (event) => {
        const { value, name } = event.target;
        const { data_login } = this.state;
        data_login[name] = value;
        this.setState({ data_login: data_login});
        
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state.data_login;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
        // <Redirect to="/"/>
    };
    
    componentDidMount() {
        const email = localStorage.getItem('email') === '';
        const password = localStorage.getItem('password') === '';
        // this.setState({email, password});
        fetch('http://localhost:3030/users?email=' + email + 'password=' + password)
        .then(data => data.json())
        .then(response => this.setState({users: response}));
        // this.fetchUsers();

    }

    // fetchUsers = () => {
    //     const { email, password } = this.state.data_login;
    //     fetch('http://localhost:3030/users?email=' + email + 'password=' + password)
    //     .then(data => data.json())
    //     .then(response => this.setState({users: response}));
    //   }

    render() {
        return (
            <div className="login">
                <div className="content">
                    <div className="title-app">
                        <h1 className="skyter-title">Skyter</h1>
                        <p className="skyter-desc">Skyter membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda</p>
                    </div>
                    <div className="form-login-box">
                        <form 
                            action="" 
                            className="form-login"
                            onSubmit={this.handleSubmit}>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    className="input-login input-email" 
                                    onChange={this.handleChangeDataLogin} 
                                    value={this.state.data_login.email} />
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="" 
                                    placeholder="Kata Sandi" 
                                    className="input-login input-password" 
                                    onChange={this.handleChangeDataLogin} 
                                    value={this.state.data_login.password} />
                                {/* <input 
                                    type="submit" 
                                    value="Masuk" 
                                    className="submit-login-btn" 
                                    /> */}
                                     {/* onClick={() => this.submitLogin(this.state.data_login.email, this.state.data_login.password)} */}
                                <AlertRedirect/>
                        </form>
                        <p style={{fontSize: 12}, {textAlign:'center'}}>atau</p>
                        <button className="btn-facebook" style={{marginLeft:45}}>Masuk Facebook <i class="fa fa-facebook-f"></i></button><br />
                        <button className="btn-google" style={{marginLeft:50}}>Masuk Google <i class="fa fa-google"></i></button>
                        <hr className="line-form" />
                        <AlertDialogRegister />
                        
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default Login;