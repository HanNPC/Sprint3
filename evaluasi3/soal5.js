function closure(email, password) {
    if (email == 'raihan') {
        if (password == '9023') {
            return 'Halaman Home'
        }
    } else {
        return 'Login Gagal'
    }
}
console.log(closure());