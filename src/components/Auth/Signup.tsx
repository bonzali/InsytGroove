import React from 'react';
import './Login.scss'
import {User} from "definitions/user";
import {registerUser} from "api/user";

type Props = {
    onComplete : () => void
}
function SignUp({onComplete} : Props) {
    const [error , setError] = React.useState('')
    const [user , setUser] = React.useState<User>({
        email : '' ,
        id : 0 ,
        name : '' ,
        username : '' ,
        phone : ''
    })

    const onChange = ( event : any) => {
        const {name , value} = event.target ;
        setUser({...user , [name] : value})
    }

    const  onSubmit = async () => {
        setError('')
        if(!user.name || !user.username || !user.email || !user.phone) {
            setError('All Fields are required')
            return
        }
        try {
            const response = await registerUser(user)
            onComplete()
        }catch (e) {
            setError('Sorry !!!! Something went wrong , try again later')
        }
    }
    return (
        <div>
                <input onChange={onChange} name={'name'} placeholder={'Enter name'}/>
                <input onChange={onChange} name={'username'} placeholder={'Enter username'}/>
                <input onChange={onChange} type={'number'} name='phone' placeholder={'Enter phone number'}/>
                <input onChange={onChange} type={'email'} name='email' placeholder={'Enter email'}/>
                <input onChange={onChange} type={'password'} name={'password'} placeholder={'Password'} />
                <button onClick={() => {onSubmit()}}>Login</button>
                {error && <p className={'error'}>{error}</p>}
        </div>
    );
}

export default SignUp;