import React from 'react';
import Login from "./Login"
import Signup from "./Signup";
import NavButton from "shared/components/navButton";

type Props = {
    setAuthed: any
}

function Auth({setAuthed}: Props) {
    const [view, setView] = React.useState('login')
    return (
        <div className={'AuthView'}>
            <div className={'auth-container'}>
                <h3 className={'app-name'}>InsytGroove</h3>
                <div className={'nav-button-wrap'}>
                    <NavButton
                        onClick={() => {
                            setView('login')
                        }}
                        title={'login'}
                        isActive={view === 'login'}
                        />
                    <NavButton
                        onClick={() => {
                            setView('register')
                        }}
                        title={'Register'}
                        isActive={view === 'register'}
                    />
                </div>
                {view === 'login' ? <Login setAuthed={setAuthed}/> : <Signup onComplete={() => {
                    setView('login')
                }}/>}
            </div>

        </div>
    );
}

export default Auth;