
function sendMessage() {
    var input = document.querySelector('.input-area input[type="text"]');
    var messageText = input.value.trim();
    
    if (messageText !== '') {
        var messages = document.querySelector('.messages');
        var message = document.createElement('div');
        message.classList.add('message', 'sent');
        message.innerHTML = '<p>' + messageText + '</p>';
        messages.appendChild(message);
        
        input.value = '';
        
        // Симуляция ответа учителя (отправка изображения)
        setTimeout(function() {
            var replyMessage = document.createElement('div');
            replyMessage.classList.add('message', 'received');
            replyMessage.innerHTML = '<p><img src="https://www.meme-arsenal.com/memes/855a7b22c3d1d269a97eea0ad007b74d.jpg" alt="Изображение"></p>';
            messages.appendChild(replyMessage);
        }, 1000);
    }
}
