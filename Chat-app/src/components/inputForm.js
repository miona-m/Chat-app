/*class InputForm{
    constructor(){
        this.txtMessage=document.createElement('input');
        this.txtMessage.type='text';
        this.txtMessage.id='txt-message';
        this.txtMessage.placeholder='Message';
        this.messageBody = ''
        this.txtMessage.addEventListener('input', () => {
            this.messageBody = this.txtMessage.value
        })

        this.btnAdd=document.createElement('input');
        this.btnAdd.type='submit';
        this.btnAdd.id='btn-add';
        this.btnAdd.value='Add Message';

        this.form=document.createElement('section');
        this.form.appendChild(this.txtMessage);
        this.form.appendChild(this.btnAdd);
    }

    getNode(){
        return this.form;
    }   
   
    setBtnAddOnClick(onClick){
        this.btnAdd.addEventListener('click',onClick);
    }
}

export{
    InputForm
}
*/