module.exports.login = (username,password)=>{
    if(!username && !password) return console.log("Tu no estas autorizado")
    console.log(`Welcome ${username}`)
}

module.exports.LIKES = 555