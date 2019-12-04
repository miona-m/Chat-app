import { Dashboard } from "./layout/dashboard";
import { getAllMessages, getMessage } from "./utilities/service";

const app = document.querySelector('#app');
let dashboard = new Dashboard();
app.appendChild(dashboard.getNode());

getAllMessages().then(data=>{
    console.log(data);
})

getMessage('dule').then(data=>{
    console.log(data);
})