
//import { InputForm } from "../components/inputForm";
import { Message } from "../components/message";
//import { getMessage } from "../utilities/service";
import { UserInput } from "../components/userInput";
import { addMessage } from "../utilities/service";
import { Messages } from "../components/messages";
import { addUser } from "../utilities/service";


class Main {
    constructor() {
        //let inputForm = new InputForm();
        let username = new UserInput();
        let messages = new Messages();
        let message = new Message ();

        this.node=document.createElement('main');
        //this.node.appendChild(inputForm.getNode());
        this.node.appendChild(username.getNode());
        this.node.appendChild(messages.getNode());
        this.node.appendChild(message.getNode());

        let newUser;
        username.btnAddUserOnClick(() => {
            newUser = username.txtUsername.value;
            addUser(newUser).then(data => {
                data.messages.forEach(element => {
                    let msg = document.createElement('p');
                    let user = element.username;
                    let text = element.message;
                    let time =  new Date(element.timestamp).toLocaleTimeString('sr-Cyrl',{hour12:true});
                    msg.textContent = `${user}: ${text} ${time}`;
                    this.messages.node.appendChild(msg);
                });
            });
        })

        message.AddMsgOnClick(() => {
            let textOfMessage = message.txtMessage;
            addMessage(newUser, textOfMessage).then(data=>{console.log(data)}); 
        });
        
    }

      
getNode(){
    return this.node;
}

}

export {
    Main
} 
    
    



        // username.btnAddUserOnClick(()=>{
        //     getMessage(username.txtUsername.value).then(data =>{
        //         let items=data.data;
        //         items.forEach(item => {
        //             let message = new Message(item.message);
        //            messages.addMessage(message);
        //         })
        //     })

        // },

        // inputForm.setBtnAddOnClick(function(){  
        //     let text=inputForm.txtMessage.value;
        //     text=text.trim();
        //     if(text=='')return;
            
        //     addMessage(username.txtUsername, text).then(data=>{
        //         if (data.success == 'true') {
        //             let message = new Message(text);
        //            messages.addMessage(message); 
        //         } 
        //     })
        // }),
    // )
//}

