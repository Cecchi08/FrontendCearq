import { forwardRef } from 'react';
import styles from '../styles/Footer.module.css';
import "../styles/global.css";
import iconOutlook from '../assets/img/icons-outlook.png';

const images = {
  iconOutlook,
};

const Footer = forwardRef(({ className = '' }, ref) => {
  return (
    <footer
      ref={ref}
      className={`${styles.footer} ${styles['scale-up']} ${className}`.trim()}
    >
      <div className={styles['container-footer']}>

        <div className={styles['child1-footer']}>
          <div className={styles.contact}>

            <div className={styles.email}>
              <p>Email:</p>
              <a
                className={`a ${styles['contact-email']}`}
                href="mailto:enricecchini@gmail.com"
              >
                enricecchini@gmail.com
              </a>
            </div>

            <div className={styles.numberphone}>
              <p>Telefono:</p>
              <p className={styles['contact-phone']}>+54 223 622 5301</p>
            </div>

          </div>

          <div className={styles.icons}>
            <a href="https://www.instagram.com/arq.enriquececchini/">
            <img width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2ZO09UQRiGnwIVIpddy6UVwViIgp2X2ElMVH4BISp/QAWpvbRGQqnBP6CYWMnitVN7EWxUbAUFhArXfMl7komB3TmX3Tkm+yaTnOz55jvz7nzXGWiiiVygF5gA5oEFYAOoZDRMl+ksA+PAoXoQGAReZLho3zEPDGRBYA8wDfyR4h/AA+CCdmc/2cF0mc6LwEN9q6JvTwEtSRUXgZdS9hu4BXTSOHQCt4FNZ3cKSXYiMqXvMq1QOAp80VreAHvjTJ7WxG9AifAoActa033fSYOySzOnY+QHx2Vm23quicikzCfyhjtam4Xoquh1olMjHTvCefmkmdHQDu+7gBWtsaeaogkJWfgLgWUnh5h/7oQZvb9RTVFZQhbL80pkWO/nqilalFCa8sDyzyjwFPik0mNDz7N6ZzI7YUhkjMS5GuZv+nbFmoQ6EhBoAyaBnx6lxypwE2hN8J0O6bC17oroQ0ni/Adn/nPgilPG2OjTb3OO3PuEeapSa51JiJRkCtF2n/SYc8ox4yRJt5I1kTZnJ17FrIXMT15r7ruYZlbJmsik5BeSFHQiE+2Mhf4gRIqOY/uY02444wSAYggio45jp0WUv0ZCEJmV7GXS46p0PQ5BJLJtC7Fp0eeT5OpFZF2y7aRHu3St/+9EOqXrl6d807SqObuVHWkxFtLZR33KaU/Mhwy/RSUxkz9Ncpx1EmIhdImyGCMru7A5Sz4dX72JtKoUr6gAjEPmAPA2L0Xjv2X8kmonH3P6nKcyPkJJ/2o0v6xIdFh5pl3PY45jRztRl8ZqLUWr26pSfNWz1bWrg331anUXMzh8KCiMPlGfsq6xoN9GEvYusQ4fQh8H+WDYp30YD3xA54NHWuO1PB+Z1oL3kSlOVLFLlrzhbpyudEDXCpu+x/cNwiCwpWuFft9JU2Jux5fdhEe3cy58L87EFsfE7Jj/BOHQD3x1Em3sS9GCQ2ZTlyzmbI1Cl3xiy2kXEuefFt3ZbUvZiu4nLqmry6LNjWC6+pQnZpzotC1zSnw97eII8Myj9Mh6lOsVcHrUN8w55UdWizZdHxVarwMH60GgiSaIh7/0wax6IqjhkwAAAABJRU5ErkJggg==" alt="instagram-new--v1" />
            </a>

            <a
              href="https://wa.me/542236225301?text=Hola,%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="30" height="30" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/>
            </a>

            <a
              href="https://outlook.live.com/mail/0/deeplink/compose?to=enricecchini@hotmail.com.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width='30' height='30' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/klEQVR4nO2aWahNURjHf9yu8RLxIFLmecrNVBQZk6FkSMr8QKZILmUsIlzD4YEXIU+E5IUohavIEJIHIkOGDGW4uPe6d2vpO7Ute+219jlnn3sM/9q1O3ut7/t+Z43f2hviVU2gAzAZ2AycAV4BJeSw8oGuwHRgN3AOeAd4hisn1AgYAiwFDgF3gIqAYKuAB8BRYBUwqjpBmgPDgCXAYeCeBKgHXSHPVJkiYCzQJMBe7CB5QBsJYD1wWvpzULf4BFyXoBXgQKCuo5/YQBYBV4EvhqBfA2eBLcAUGbxqEKeq2EDKfcYfAceB1cAYoEUM/mID8eRSAzgbih0kW/oPYtN/kBTlZfi6pBv+U0G86gbJuC3vXwVpC0yVrcl8YDRQP1Xn1QEyVPZXQX1UbW/2AI2jOk9D9VIBWes46B4CrbMAMhF4EhVkccQZROUfBTGBdAHOpzJrqZ3uV62SSlNHAM2ATsCmgKQqkWGQhkCxb4P7HlgQBWS/FuAFoFZAuZlauVJDUhUVpIakzi+lTqXE1DTIlsmwCviz77ky0j7EaYkGM8MCopK4MPXWbF4BCg22QkH6aYFddEjQ/OX3W0DeAIMDnjcB9skf50lrzJDWIRWQ2Vpg2y0gg7TyZywgnvT5eb5Ue77v5KVcxoUaHyY5gSzXnK6wgHTUyl+1ON/gO8Q4CNz0PVNHSZ0t/pxBVmmBFUUEMXVFv79JMjEkf3sMTHAAiAQyTwtsR8SuddLFuQxq1QLrIpzERAIZEbB+hGmZVn6jI0g68lxAGmgLXVVIv1XHQ7c1kJEuztOU57ogHgtolaDmX6mVeyyzkNV5tkAKA7Yf6p+fBvQChgNHtOfqmuvqPFsgSmsCAg27ThkWr6ggPYC9wH1JE0rlbHm37PF+s2UzXEOOS10h6lgCtPmrLQDJlT3oqpRZNBJIUqobXQvJQ2ZZWsLFX23fNl3tuncBfSUDrS/bJtUi3zT/kUCSaiUn9nOA8UC3CHVt/vbIs6dA95A6PYFn6YKkK5M/9barUlqiu0Odnr6WaRdmOC7ZxtnOkDq6EvL71rBC1QXSJ6SOKdW4EVYoLpn8JbtJQYQ6Bb7UN2dAPjqA6DNVQ7n/EGY4Lpn8qcXOk+nWFaS/3N8NMxyXTP7UIPdknXBVcrouzqVXb2r6/S5jRU2tNqm9XpnU6ZJrL0MT8uyZBUZBPJeyavX/qYU59Ho6X7JFT1omIeOgQK4B0p3KpMw5qfOL8qSJ1BZ9mxR6a4BTM8xlMTpb0tVaGQBB7CSky5jWmgppid8gwtQSGCcH2SckaQoyrrroLeCAnBcPMhzluE4uXWWHe1e+tPgk98XJMfHPflTzV3/mhKOCPjx7ITlHRvUDdiWpsP98UMIAAAAASUVORK5CYII=" alt="ms-outlook" />
            </a>
          </div>
        </div>

        <div className={styles['child2-footer']}>
          <div className={styles.inicio}>
            <a href="#section1" className={styles.a}>
              <p className={styles.beggining}>Inicio</p>
            </a>

            <a href="" className={`a ${styles['a2']}`}>
              Trabaja con nosotros
            </a>
          </div>

          <p className={styles.beggining}>
            © 2026 CEARQ. Todos los derechos reservados
          </p>

          <p className={styles.beggining}>
            Desarrollado por:{' '}
            <a
              className={`a ${styles['brand']}`}
              href="https://www.instagram.com/cec_chinimateo/?next=%2F"
            >
              Cecchini Mateo
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
});

export default Footer;
