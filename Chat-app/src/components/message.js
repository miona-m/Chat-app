class Message {

    constructor() {
        this.node=document.createElement('section');

        this.message = document.createElement('textarea');
        this.message.id='txt-message';
        this.message.placeholder='Type message';
        this.txtMessage=''
        this.message.addEventListener('input', () => {
            this.txtMessage = this.message.value
        })

        this.btnAddMessage = document.createElement('input');
        this.btnAddMessage.type = 'submit';
        this.btnAddMessage.id = 'btn-add-msg';
        this.btnAddMessage.value = 'Post'
        
        this.form = document.createElement('section');
        this.form.appendChild(this.message);
        this.form.appendChild(this.btnAddMessage);
        this.node.appendChild(this.form);

    }

    getNode(){
        return this.node;
    }

    AddMsgOnClick(submit) {
        this.btnAddMessage.addEventListener('click', submit);
    }
 
}

export{
    Message
}