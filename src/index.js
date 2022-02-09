import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from 'components/App';
import { Profile } from 'components/Profile/profile';
import  {Statistics}  from 'components/stats/stats';
import  {FriendList}  from 'components/friendsList/friendsList';
import {TransactionHistory} from "components/TransactionHistory/TransactionHistory";
import user from "./components/Profile/user.json"
import data from "./components/stats/data.json"
import friends from "./components/friendsList/friends.json"
import './index.css';
// import './components/friendsList/friendList.module.css';
// import './components/Profile/profile.css';
import transactions from "./components/TransactionHistory/transactions.json";



ReactDOM.render(
  <React.StrictMode>

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>  
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />

<FriendList friends={friends} />;
<TransactionHistory items={transactions} />;
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
