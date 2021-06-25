import {Component} from 'react';
import './asset/login.css';
import AlertDialogRegister from '../component/AlertDialogRegister';
import AlertDialogNewPost from '../component/AlertDialogNewPost';

class Login extends Component {
    constructor(props) {
        super(props);
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
                            <input type="email" name="email" placeholder="Email" className="input-login input-email" />
                            <input type="password" name="password" id="" placeholder="Kata Sandi" className="input-login input-password" />
                            <input type="submit" value="Login" className="submit-login-btn" />
                        </form>
                        <p style={{fontSize: 12}}>atau</p>
                        <button className="btn-facebook">Login Facebook <i class="fa fa-facebook-f"></i></button><br />
                        <button className="btn-google">Login Google <i class="fa fa-google"></i></button>
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