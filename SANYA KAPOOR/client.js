const socket = io('http://localhost:5500');

const form = document.getElementById('send-box');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.querySelector(".container");
var audio = new Audio('ting notification.wav');
const append = (message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText= message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position =='left')
    {
        audio.play();

    }
    

}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message= messageInput.value;
    append(`You : ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value='';

})

let nam = prompt('PLEASE ENTER YOUR NAME TO JOIN');
socket.emit('new-user-joined', nam);
socket.on('user-joined', nam=>{
    append(`${nam} joined the chat group`, 'right')

})

socket.on('receive', data=>{
    append(`${data.nam}: ${data.message}`, 'left')

})
socket.on('left', nam=>{
    append(`${nam} left the chat room`, 'left')

})