import { userMessage } from "../utilities/service";

class UserMessages {
    constructor() {
        this.node = document.createElement('div');
        this.node.className = 'messages';
        this.posts = [];
    }

    getNode() {
        return this.node;
    }

    getMessages(username) {
        userMessage(username).then((response) => {
            const messagesFromUser = response.messages.map(element => {
                const messageTxt = document.createElement('p');
                const user = element.username;
                const msg = element.message;
                const time = new Date(element.timestamp).toLocaleTimeString('sr-Cyrl', { hour12: true });
                messageTxt.textContent = `${user}: ${msg} ${time}`;
                return messageTxt;
            });

            this.renderMessages(messagesFromUser);
        });
    }
    
    renderMessages(messages) {
        this.node.innerHTML = '';
        messages.forEach(element => {
            this.node.appendChild(element);
        });
    }

    removeHandler() {
        clearInterval(this.handle);
    }
}

export {
    UserMessages
}