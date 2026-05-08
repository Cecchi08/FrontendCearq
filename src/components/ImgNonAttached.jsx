import styles from'../styles/imgNonAttached.module.css'
import emptyImage from '../assets/img/emptyImage.png'
export default function ImgNonAttached({onClick}){
    return(
        <div className={styles['card']}>
            <img src={emptyImage} className={styles['img']} onClick={onClick}/>
        </div>
    );
}