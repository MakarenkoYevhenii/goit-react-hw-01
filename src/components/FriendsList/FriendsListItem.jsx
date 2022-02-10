import styles from "./friendList.module.css";
import PropTypes from 'prop-types';

 function FriendItem({ avatar, name, isOnline}) {
  return (
    <>
      <li className={styles.friendsItem}>
        <span
          className={`${styles.Status} ${isOnline ? styles.online : styles.offline}`}
        ></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.text}>{name}</p>
      </li>
    </>
  );
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };


  export default FriendItem