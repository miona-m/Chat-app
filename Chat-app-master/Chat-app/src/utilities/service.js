
function getMessage(username) {
    username
    let res = fetch(`https://coetus.herokuapp.com/api/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'GET'
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}

function getAllMessages(){
    let res = fetch(`https://coetus.herokuapp.com/api/message`).then(response => response.json()
        , (error) => {
            console.log(error);
        });
    return res;
}

function userMessage(user) {
    return fetch(`https://coetus.herokuapp.com/api/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            username: user
        })
    }).then(response => response.json(), (error) => {
        console.log(error);
    })

}

function addMessage(username, message) {
    return fetch(`https://coetus.herokuapp.com/api/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            message: message
        })
    }).then(response => response.json(), (error) => {
        console.log(error);
    })

}

function addUser(user) {
    return fetch(`https://coetus.herokuapp.com/api/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            username: user
        })
    }).then(response => response.json(), (error) => {
        console.log(error);
    })

}

// function addMessage(username){
//     username='dule'
//     let res = fetch(`https://coetus.herokuapp.com/api/message`,{
//         headers: { "Content-Type": "application/json; charset=utf-8" },
//         method: 'PUT',
//         body: JSON.stringify({
//           username: username
//         })
//     })
//     return res;
// }



export{
 getMessage,
 getAllMessages,
 userMessage,
 addMessage, 
 addUser
}