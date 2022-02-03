import React from 'react';
import Logo from 'assets/log_white_fotter-1.png'
import Auth from "components/Auth"

import './App.scss';
import Home from "components/Home";

function App() {
    const [authed, setAuthed] = React.useState(false)
    return (
        <div className="App">
          <img alt={'Esoko logo'} src={Logo}/>
            <div className={'app-container'}>
                {authed ? <Home logout={() => setAuthed(false)}/> : <Auth setAuthed={() => setAuthed(true)}/>}
            </div>

        </div>
    );
}

export default App;
