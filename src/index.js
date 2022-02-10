import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
// import { Profile } from 'components/Profile/Profile';
// import  {Statistics}  from 'components/Stats/Stats';
// import  {FriendList}  from 'components/FriendsList/FriendsListItem';
// import {TransactionHistory} from "components/TransactionHistory/TransactionHistory";
// import user from "./components/Profile/user.json"
// import data from "./components/Stats/data.json"
// import friends from "./components/FriendsList/friends.json"
import './index.css';
// import './components/friendsList/friendList.module.css';
// import './components/Profile/profile.css';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
