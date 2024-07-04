let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^ايتاشي$/i.test(m.text)) { 
 responses = [ 
 'قلب ايتاشي امرك ي حبي'
 ]; 
 } else if (/^بوووت|بوووووووووت|بوت$/i.test(m.text)) { 
     responses = [ 
'معاك ي حب تفضل'
     ]; 
   } else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*نسيت ال نقطه يحب متنساش تاني .*',  
     ];
 }else if (/^تست|تيست|تاست$/i.test(m.text)) { 
     responses = [ 
       'شغال ي روحي تفضل ',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
