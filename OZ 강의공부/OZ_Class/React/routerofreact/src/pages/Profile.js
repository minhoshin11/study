import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    return (
    <div>Profile 
        <button onClick={()=>{
            navigate('/')
        }}>누르면 홈으로 이동합니다.</button>

    </div>
  )
}

export default Profile;