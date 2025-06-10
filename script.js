// Written by mlazze@globocorp.com - email me at mlazze1337dev@gmail.com for freelance work!
let messages = [];
let count = 0;

function send() {
    const input = document.getElementById('input');
    const prompt = input.value;

    if (prompt == '') {
        alert('Type something!');
        return;
    }

    count++;
    messages.push(prompt);

    const chat = document.getElementById('chat');
    chat.innerHTML += '<div class="message user">You: ' + prompt + '</div>';
    input.value = '';

    // TODO: Simulate the chat for now
    // replace with a to askGPTGenie(prompt)

    setTimeout(function() {
        const replies = ["Cool!", "Awesome!", "Noice", "Killer idea", "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        chat.innerHTML += '<div class="message bot">Bot: ' + reply + '</div>';
        chat.scrollTop = chat.scrollHeight;
    }, 500);
    // End Simulate

}

const appVersion = "1.0";
const appName = "GloboCorp's GPT Genie";
console.log(appName + " " + appVersion + " loaded @ " + new Date());