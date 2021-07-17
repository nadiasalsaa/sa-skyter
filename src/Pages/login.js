import {Component} from 'react';
import './asset/login.css';
import AlertDialogRegister from '../components/AlertDialogRegister';
import AlertDialogNewPost from '../components/AlertDialogNewPost';

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

    submitLogin = (email, password) => {
        alert("email: " + email + ", password: " + password);
    }

    handleChangeDataLogin = (event) => {
        const { value, name } = event.target;
        const { data_login } = this.state;
        data_login[name] = value;
        this.setState({ data_login: data_login});
    }

    render() {
        return (
            <div className="login">
                <div className="content">
                    <div className="title-app">
                        <h1 className="skyter-title">Skyter</h1>
                        <p className="skyter-desc">Skyter membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda</p>
                    </div>
                    <div className="form-login-box">
                        <form action="" className="form-login">
                            <input type="email" name="email" placeholder="Email" className="input-login input-email" onChange={this.handleChangeDataLogin} />
                            <input type="password" name="password" id="" placeholder="Kata Sandi" className="input-login input-password" onChange={this.handleChangeDataLogin} />
                            <input type="submit" value="Masuk" className="submit-login-btn" onClick={() => this.submitLogin(this.state.data_login.email, this.state.data_login.password)} />
                        </form>
                        <p style={{fontSize: 12}}>atau</p>
                        <button className="btn-facebook">Masuk Facebook <i class="fa fa-facebook-f"></i></button><br />
                        <button className="btn-google">Masuk Google <i class="fa fa-google"></i></button>
                        <hr className="line-form" />
                        <AlertDialogRegister />
                        <AlertDialogNewPost />
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default Login;