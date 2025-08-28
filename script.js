const user = {
  username: "Abdullayev",
  password: "11111177",

  get getPassword() {
    return this.password;
  },

  set setPassword(newPassword) {
    if (newPassword === this.password) {
      console.log("Yangi parol eskisi bilan bir xil! Qayta kiriting.");
    } else {
      this.password = newPassword;
      console.log("Parol yangilandi!");
    }
  }
};

console.log("Eski parol:", user.getPassword);
user.setPassword = "11111177"; 
user.setPassword = "12345678"; 
console.log("Yangi parol:", user.getPassword);