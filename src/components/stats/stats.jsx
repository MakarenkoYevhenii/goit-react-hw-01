import styles from "./stats.module.css";
import PropTypes from 'prop-types';

 const Statistics = ({title,stats}) => {
    const plakat=stats.map(id =>{return(
        <li className={styles.item} style={{ backgroundColor:getColor()}} key={id.id}>
        <span className="label">{id.label}</span>
        <span className="percentage">{id.percentage}%</span>
      </li>)
    })
    
    return (
    <section className={styles.statistics}>
        {title ? <h2 className="title">{title}</h2> : ""}
    <ul className={styles.statList}>
      {plakat}
    </ul>
  </section>
    );
  
  function getColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
        }}

        Statistics.propTypes = {
            title: PropTypes.string,
            stats: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
              }),
            ).isRequired,
          };

          export default Statistics