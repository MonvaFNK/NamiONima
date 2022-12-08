import React, { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';
/* import { firebase } from 'firebase'; */

function UserInfo() {
        const location = useLocation();
        const [userInfo, setUserInfo] = useState(null)
        const userId = location.pathname.split('/')[2];
        console.log(userId);
/*         useEffect(() => {
            const database = firebase.database();
            database.ref(`/Users/${userId}`).once('value').then(function(snapshot) {
                const user = snapshot.val();
                setUserInfo(user);
            })
        }, []) */

        if (!userInfo){
            return <p> Loading ... </p>
        }
        
        return (
            <div className="userInfo">
                <p className="userInfo__info">nombre y apellido: {userInfo.nombre}</p>
                <p className="userInfo__info">plan: {userInfo.plan}</p>
                <p className="userInfo__info">documento: {userInfo.documento}</p>
                <p className="userInfo__info">monto: {userInfo.monto}</p>
                <p className="userInfo__info">monto mensual: {userInfo.mensual}</p>
            </div>
        )
    }
    export default UserInfo