import styles from "./friendList.module.css";
import PropTypes from 'prop-types';
import FriendList from "./FriendsListItem";
console.log(FriendList);

 function Friends({ friends }) {
    const element = friends.map(friend => {
      const { name, avatar, isOnline, id } = friend;
  
      return (
          <FriendList
            name={name}
            avatar={avatar}
            isOnline={isOnline}
            key={id}
          />
      );
    })
      return (  
        <ul className={styles.friendsList}>
          {element}
        </ul>
      );
    }

    Friends.defaultProps = {
        items: []
    }
    
    Friends.propTypes = {
      friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })),
    };
export default Friends