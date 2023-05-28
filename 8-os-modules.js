const os=require('os')
//info about current user
const user=os.userInfo()
console.log(user)

//Method to return uptime
console.log("The system has been running since:",os.uptime()," seconds")

const currentOs={
    name:os.type(),
    release:os.release(),
    totMemory:os.totalmem(),
    remMemory:os.freemem()
}

console.log(currentOs);