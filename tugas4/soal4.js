function login(username,password) {
    if(username == 'raihan'){
        if(password == '1154'){
            function goHome() {
                console.log('Halaman Home');
            }
        }
        return goHome
    }else{
        function backLogin() {
            console.log('Login Gagal');
        }
        return backLogin
    }
}
const tryLogin = login('raihan','1154')
tryLogin()