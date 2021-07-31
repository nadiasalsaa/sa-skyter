import React from 'react';
import './asset/fheader.css';
import { CardHeader, Avatar, Container } from '@material-ui/core';
import AlertFollow from '../components/AlertFollow';

export default function FHeader() {
    
    return (
        <div>
            <div className="mypro">
              
              <Avatar aria-label="ava" className="myprofile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4ZS9dWbRgBWD8bpcEU7FVfjQOICj3FBhsQ&usqp=CAU"></Avatar>
              
              <div>
                <a className="myname">Spiderman</a>
                <AlertFollow/>       
                  
              </div>
              
              <a className="bio" >
                Your friendly neighborhood spiderman!
              </a>
          </div>
            
        </div>
    )
}
