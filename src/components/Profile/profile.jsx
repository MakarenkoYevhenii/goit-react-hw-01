
import styles from "./profile.module.css";
import PropTypes from 'prop-types';


 const Profile = ({username,tag,location,avatar,stats}) => {
    return (
        <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
      
        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className="label">Followers:</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className="label">Views:</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className="label">Likes:</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  Profile.propTypes = {
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers:PropTypes.number.isRequired,
        views:PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    }).isRequired,
  };

  export default Profile