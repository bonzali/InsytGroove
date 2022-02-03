import React, {useState} from 'react';
import './Login.scss'

type Props = {
    setAuthed: (authed: boolean) => void
}

function Login({setAuthed}: Props) {
    const [error, setError] = useState('')
    const [state, setState] = useState({
        username: '',
        password: ''
    })
    const onChange = ({name, value}: any) => {
        setState({...state, [name]: value})
    }
    const login = () => {
        if (state.username === 'esoko' && state.password === 'insyt') {
            setAuthed(true)
        } else {
            setError('Invalid username or password')
        }
    }
    return (
        <div>
            <input onChange={e => onChange(e.target)} name={'username'} placeholder={'Enter username'}/>
            <input type={'password'} onChange={e => onChange(e.target)} name={'password'} placeholder={'Password'}/>
            <button onClick={() => {
                login()
            }}>Login
            </button>
            {error && <p className={'error'}>{error}</p>}

        </div>
    );
}

export default Login;