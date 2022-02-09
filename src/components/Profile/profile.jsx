// import user from './user.json';
// import user from 'path/to/user.json;
import styles from "./profile.module.css";


export const Profile = ({username,tag,location,avatar,stats}) => {
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
  