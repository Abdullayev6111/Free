const user = {
    username: "Abdullayev",
    password: "11111177",
    get getPassword() {
      
        return this.password;
        
    },
    set setNewPassword(newPassword) {
        this.password = newPassword
    },
    
    get getFullInfo() {
        return `Parol: ${this.setNewPassword}`
    },
   
    
};

 if (user.password === user.setNewPassword ) {
       alert("Yangi parol eskisi bilan bir hil qayta kiriting:");
        
    }else{
        console.log(user.getFullInfo);
    }

setNewPassword(45564654);