import { Message } from "../components/message";
import { UserInput } from "../components/userInput";
import { addMessage } from "../utilities/service";
import { Messages } from "../components/messages";
import { UserMessages } from "../components/userMessages";
import { UserMessage } from "../components/userMessageInput";

class Main {
    constructor() {
        let username = new UserInput();
        let messages = new Messages();
        let message = new Message ();

        this.node=document.createElement('main');
        this.node.appendChild(username.getNode());
        this.node.appendChild(messages.getNode());
        this.node.appendChild(message.getNode());

        let newUser;
        username.btnAddUserOnClick(() => {
            newUser = username.txtUsername.value;
        })

        message.AddMsgOnClick(() => {
            let messageText = message.txtMessage;
            addMessage(newUser, messageText).then(data => {
                console.log(data);
                this.messages.getMessages()
            });
        });

        let userMessageInput = new UserMessage();
        this.node.appendChild(userMessageInput.getNode());
        this.userMessages = new UserMessages();
        this.node.appendChild(this.userMessages.getNode());

        userMessageInput.getAllUserMessages(() => {
            this.userMessages.getMessages(newUser);
        });
        
    }

      
getNode(){
    return this.node;
}

}

export {
    Main
} 
    