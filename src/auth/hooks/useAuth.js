import { useState, useEffect } from 'react';

export default function IsAuthenticated() {
    const [authenticated, setAuthenticated] = useState(false);
    const [permission, setPermission] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setAuthenticated(true);
        }
    }, []);

    async function handleLogin(dataToken){
        localStorage.removeItem('token');

        setAuthenticated(true);
        setPermission(dataToken.permissao)

        localStorage.getItem('token');
    }

    return {authenticated, permission, handleLogin}
};
