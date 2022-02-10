import styles from "./friendList.module.css";
import PropTypes from 'prop-types';

export const FriendList = ({friends})=>{
    // console.log(friend);
    const items=friends.map(friend =>{
    // console.log(friend);
    return (<li className={styles.friendsItem} key={friend.id}>
  <span className= {friend.isOnline ? `${styles.Status} ${styles.online}`: `${styles.Status} ${styles.offline}`}></span>
  <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className="name">{friend.name}</p>
</li>)})
    
    return (<ul className={styles.friendsList}>
        {items}
  </ul>)
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  };