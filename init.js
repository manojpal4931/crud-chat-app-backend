const mongoose = require("mongoose");
const chat  = require("./models/chat.js");

main()
.then(() =>{
console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "amit",
        msg: "bhai kal class hai kya?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "neha",
        msg: "haan bhej rahi hu wait",
        created_at: new Date()
    },
    {
        from: "amit",
        to: "rohit",
        msg: "nahi bhai holiday hai 😎",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "rahul",
        msg: "assignment complete hua?",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "sneha",
        msg: "thoda baaki hai 😅",
        created_at: new Date()
    }
];


chat.insertMany(allChats);


