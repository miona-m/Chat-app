class UserInput{
    constructor(){
        this.node = document.createElement('section');

        this.txtUsername=document.createElement('input');
        this.txtUsername.type='text';
        this.txtUsername.id='txt-username';
        this.txtUsername.placeholder='Username';
        
        this.newUsername = '';
        this.txtUsername.addEventListener('input', () => {
            this.newUsername = this.txtUsername.value;
        })

        this.btnAddUser=document.createElement('input');
        this.btnAddUser.type='submit';
        this.btnAddUser.id='btn-add-user';
        this.btnAddUser.value='Add User';

        this.form = document.createElement('section');

        this.form.appendChild(this.txtUsername);
        this.form.appendChild(this.btnAddUser);
        this.node.appendChild(this.form)

    } 

    getNode(){
        return this.node;
    }

    btnAddUserOnClick(onClick){
        this.btnAddUser.addEventListener('click',onClick);
    }
}

export {
    UserInput
}