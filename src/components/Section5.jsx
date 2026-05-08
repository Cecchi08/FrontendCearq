import BackendImage from './BackendImage';
import "../styles/global.css"
import styles from '../styles/Section5.module.css' 
import { forwardRef } from 'react' 

const Section5 = forwardRef(({ data }, ref) => {
    return (
      <section className={styles['section5']} id='section5' ref={ref}>
        <div className={styles['container-section5']}>
          {data.map((item, index) => (
            <div className={styles['img-card']} key={index}>
              <BackendImage item={item} />
            </div>
          ))}
        </div>
      </section>
    );
});

  export default Section5;