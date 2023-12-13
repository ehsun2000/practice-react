import React, { useState } from 'react';
import MaterialForm from 'components/MaterialForm.js';
import BootstrapForm from 'components/BootstrapForm.js';


const HomePage = () => 
{
const [mode, setMode] = useState(true);

const toggleMode = () => {
setMode(!mode); // 切換 mode 的值
};

return (
<div>
<h1 onClick={toggleMode} style={{ textAlign: 'center', cursor: 'pointer' }}>
{mode ? 'BootstrapForm' : 'MaterialForm'}
</h1>
<div style={{width: '900px', margin: 'auto'}}>
{mode ? <BootstrapForm /> : <MaterialForm />}
</div>
</div>
);
}

export default HomePage;