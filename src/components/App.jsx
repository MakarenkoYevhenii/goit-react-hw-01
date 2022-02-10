import React from 'react';


import  Profile  from './Profile/Profile'
import  Statistics  from './Stats/Stats';
import  FriendListItem  from './FriendsList/FriendList';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
// import user from "./components/Profile/user.json"
import user from "./Profile/user.json"
// import data from "./components/stats/data.json"
import data from "./Stats/data.json"
import friends from "./FriendsList/friends.json"

// import './index.css';
// import './components/friendsList/friendList.module.css';
// import './components/Profile/profile.css';
import transactions from "./TransactionHistory/transactions.json";



export const App = () => {
  return(
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

<FriendListItem friends={friends} />;
<TransactionHistory items={transactions} />;
</React.StrictMode>
  )
};
