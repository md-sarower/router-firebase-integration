import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sing In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Type your email' />
                <br />
                <input type="password" name="" id="" placeholder='Type your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;