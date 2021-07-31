import React, {Component} from 'react'
import Header from './Header'
import './asset/notif.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

class Notif extends Component {
    state={
        click: true
    };

    handleChange(){
        this.setState({click: !this.state.click})
    }
    render() {

        let btn_class = this.state.click ? "clickIt" : "clicked"
        return (
            <div>
                <Header/>
                <div className="box">
                    <Avatar src="https://data.whicdn.com/images/304551518/original.jpg" className="avatar"/>
                    <div className="notif">
                        <a className={btn_class} onClick={this.handleChange.bind(this)}>Cierra Vega </a>
                        <a className="notify">likes your post. </a>
                        <a className="notify">1d </a>
                    </div>
                    
                </div>
                <div className="box">
                    <Avatar  src="https://1tb.favim.com/preview/7/765/7658/76584/7658442.jpg" className="avatar"/>
                    <div className="notif">
                        <a className="clicked" onClick={this.handleChange.bind(this)}>Alden Cantrell </a>
                        <a className="notify">commented on your post. </a>
                        <a className="notify">6d </a>
                        
                    </div>
                    
                </div>
                <div className="box">
                    <Avatar src="https://images.unsplash.com/photo-1526116977494-90748acc0cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" className="avatar"/>
                    <div className="notif">
                        <a className="clicked" onClick={this.handleChange.bind(this)}>Kierra Gentry </a>
                        <a className="notify">follows you. </a>
                        <a className="notify">7d </a>
                    </div>
                    
                </div>
                <div className="box">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvUjL3si37C5tGggg-P7KxTcLf8U2-OgOeQ&usqp=CAU" className="avatar"/>
                    <div className="notif">
                        <a className="clicked" onClick={this.handleChange.bind(this)}>Bradyn Kramer </a>
                        <a className="notify">commented on your post. </a>
                        <a className="notify">7d </a>
                    </div>
                    
                </div>
            </div>
                
        )
    }
}

export default Notif;