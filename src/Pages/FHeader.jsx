import React from 'react';
import './asset/Feeds.css';
import { CardHeader, Avatar, Container } from '@material-ui/core';
import AlertFollow from '../components/AlertFollow';

export default function FHeader() {
    
    return (
        <div>
            <Container className="mypro">
              <Avatar aria-label="ava" className="myprofile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4ZS9dWbRgBWD8bpcEU7FVfjQOICj3FBhsQ&usqp=CAU"></Avatar>
              <div>
                  <CardHeader 
                    title={
                        <a className="myname">Spiderman</a>
                      }
                    action={
                        <AlertFollow/>       
                    }
                    
                  ></CardHeader>
              </div>
              
              <a className="bio" >
                Your friendly neighborhood spiderman!
              </a>
          </Container>
            
        </div>
    )
}
