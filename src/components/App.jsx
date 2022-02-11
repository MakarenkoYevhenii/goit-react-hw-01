import React from 'react';
import  Profile  from './Profile/Profile'
import  Statistics  from './Stats/Stats';
import  FriendList  from './FriendsList/FriendList';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"

import transactions from "../data/transactions.json";



 function App() {
  return(
    <div className="app">
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
</div>
  )
};

export default App