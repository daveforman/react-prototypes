import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);



// function greeting(user){
//     return ( <div>
//                 <h1 class="container">Welcome {user.name}</h1>
//                 <h2 class="text-muted">Your lucky number is: {user.luckyNumber}</h2>
//             </div>
//     );
// }

// function luckyNumber(){
//         const randomNumber = Math.floor((Math.random() * 1000) + 1)
//         return randomNumber
// }

// const user = {
//     name: "Dave",
//     luckyNumber: luckyNumber()
// }

// ReactDOM.render(
//     greeting(user),
//     document.getElementById('root')
// );
