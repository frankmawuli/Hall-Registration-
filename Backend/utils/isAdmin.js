import User from "../Models/Authmodel.js"

const isAdmin = async ()=>{
    const user = User.findone({role})
    if(!user === "admin"){
        

    }
}

