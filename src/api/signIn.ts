const signIn = (email: any, password: any) =>
    fetch('http://10.0.2.108:81/app/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({email, password}),
    }).then(res => res.json())
        
export default signIn;
