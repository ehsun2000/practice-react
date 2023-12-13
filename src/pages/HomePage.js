import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MaterialForm from 'components/MaterialForm.js';
import BootstrapForm from 'components/BootstrapForm.js';


const HomePage = () => 
{
    // const [mode, setMode] = useState(false);

    // const toggleMode = () => {
    //     setMode(!mode);
    // };

    const location = useLocation();
    
    const theme = 
        location.pathname.includes('/material') ? 'material' :
        location.pathname.includes('/bootstrap') ? 'bootstrap' 
        : 'default';

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {theme === 'material' ? 'MaterialForm' : theme === 'bootstrap' ? 'BootstrapForm' : 'WelcomeHome'}
            </h1>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <a href='/material'>Material</a>&nbsp;&nbsp;&nbsp;
                <a href='/'>回首頁</a>&nbsp;&nbsp;&nbsp;
                <a href='/bootstrap'>Bootstrap</a>
            </div>
            <div style={{ width: '900px', margin: 'auto' }}>
                {theme === 'material' && <MaterialForm />}
                {theme === 'bootstrap' && <BootstrapForm />}
            </div>
        </div>
    );
}

export default HomePage;
