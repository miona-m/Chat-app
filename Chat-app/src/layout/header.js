class Header{
    constructor(){
        this.node=document.createElement('header');
        this.title=document.createElement('h1');
        this.title.innerHTML='Chat-app';
        this.node.appendChild(this.title);
    }
    getNode(){
        return this.node;
    }

}
export{
    Header
}