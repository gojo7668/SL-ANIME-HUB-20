const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'GOJO-𝐌𝐃=rYMyRKZD#EPpwmD4T5oGaF4OuChS0PZX8tjo8UzoME-SrZvAulrY' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'gojo' : process.env.SESSION_NAME,  

};
