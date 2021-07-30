import React from 'react'
import { useHistory } from 'react-router'
import '../Pages/asset/login.css'

const AlertRedirect = () => {

    let go = useHistory();
    const log = () => {
        go.push('/feeds')
      }

    return (
        <div>
            <input 
                type="submit" 
                value="Masuk" 
                className="submit-login-btn" 
                onClick={log}
                />
        </div>
    )
}

export default AlertRedirect
