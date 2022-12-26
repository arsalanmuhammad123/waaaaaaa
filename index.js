const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const {ChatGPTHandler }      = require('./feature/chat_ai');
const { EditPhotoHandler }  = require('./feature/edit_foto');


const client = new Client({
    authStrategy: new LocalAuth()
});



client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {

    const text = msg.body.toLowerCase() || '';

    //check status
    if (text === '!ping') {
        msg.reply('siap');
    }
     //check status
     if (text === 'saa') {
        msg.reply('iyaa ada apa?');
    }
     //check status
     if (text === 'arsa') {
        msg.reply('iyaa kenapa?');
    }
     //check status
     if (text === 'arsaa') {
        msg.reply('iyaa kenapa yaa?');
    }
     //check status
     if (text === 'saa') {
        msg.reply('ada apaa?');
    }

    // edit_bg/bg_color
    if (text.includes("#edit_bg/")) {
        await EditPhotoHandler(text, msg);
    }
    // #ask/question?
    if (text.includes("#ask/")) {
        await ChatGPTHandler(text, msg);
    }

});

client.initialize();



