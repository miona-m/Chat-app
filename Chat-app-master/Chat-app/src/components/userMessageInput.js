class UserMessage {
    constructor() {
    this.node = document.createElement('div');

    this.btnUserMessage = document.createElement('input');
    this.btnUserMessage.type = 'submit';
    this.btnUserMessage.id = 'btn-for-user-message';
    this.btnUserMessage.value = 'User Message';

    this.node.appendChild(this.btnUserMessage);

    }
    getNode() {
        return this.node;
    }
    getAllUserMessages(show) {
        this.btnUserMessage.addEventListener('click', show);
    }

}

export {
    UserMessage
}