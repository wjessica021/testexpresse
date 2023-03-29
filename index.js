
const abc=require('D:/json folder/bcd.json');
console.log(abc);
const fs=require("fs");
fs.readFile("abc.json",function(err,data)
{
    if(err) throw err;
    const users=JSON.parse(data);// converting JSON object to Javascript object.
    console.log(users);
})
const abc=require('./abc2.json');
console.log(abc);
const fs=require("fs");
fs.readFile("abc2.json",function(err,data)
{
    if(err) throw err;//check for errors
    const users=JSON.parse(data);// converting JSON object to Javascript object.
    //console.log(users.users[0].emailAddress);//Print users and it can be accessed with indexing also.
    let arr=[];
    for(let i=0;i<users.users.length;i++)
    {
        for(let j=i+1;j<users.users.length;j++)
        {
            if(users.users[i].userId === users.users[j].userId)
            {
                arr.push(users.users[i]);
                break;
            }
        }
    }
    console.log("duplicate id elements are: ",arr);
})
const chalk=require("chalk");// chalk is used for the formatting of the text.
  
// Printing the text
console.log(chalk.red("aayush"));
console.log(chalk.cyan.strikethrough("aayush"));
console.log(chalk.magenta.underline.bold.italic("GFG"));
const warning=chalk.red;
console.log(warning("Restricted zone"));
const welcome=chalk.green;
console.log(welcome("GFG"));