import { forwardRef, useRef } from 'react';
import styles from '../styles/Header.module.css';
import "../styles/global.css"
import Logo from './Logo';

const Header = forwardRef((props, ref) => {

  const { className, scrollToSection, refs } = props;
  const menuRef = useRef(null);
  const iconMenuRef = useRef(null);
  const iconCloseRef = useRef(null);

  const appear = () => {
    const menu = menuRef.current;
    const body = document.body;

    menu?.classList.add(styles['responsive-menu-appear']);
    body.classList.add('section1-shadow', 'body-noscroll');
  };

  const disappear = () => {
    const menu = menuRef.current;
    const body = document.body;

    menu?.classList.remove(styles['responsive-menu-appear']);
    body.classList.remove('section1-shadow', 'body-noscroll');
  };

  return (
    <header ref={ref} className={props.className || 'header'}>
      <div className={styles['list-header']}>

        <div className={`${styles['object-header']} ${styles.logo}`}>
          <Logo />
        </div>

        <div className={styles['objects-header']}>
          <div className={styles['object-header']}>
            <a className={`a ${styles['a-header']}`} href="/" onClick={(e)=>{e.preventDefault(); scrollToSection(refs.diseñosRef);}}>
              DISEÑOS Y PROYECTOS
            </a>
          </div>

          <div className={styles['object-header']}>
            <a className={`a ${styles['a-header']}`} href="/" onClick={(e)=>{e.preventDefault(); scrollToSection(refs.sobreNosotrosRef);}}>
              SOBRE NOSOTROS
            </a>
          </div>

          <div className={styles['object-header']}>
            <a className={`a ${styles['a-header']}`} href="/" onClick={(e)=>{e.preventDefault(); scrollToSection(refs.queHacemosRef);}}>
              QUÉ HACEMOS
            </a>
          </div>
        </div>
      </div>

      <div className={styles['list-header-responsive']}>
        <li className={`${styles['object-header']} ${styles.logo}`}>
          <Logo />
        </li>

        <li className={`${styles['object-header']} ${styles.Menu}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            ref={iconMenuRef}
            className={styles['icon-menu']}
            onClick={appear}
          >
            <g fill="#ffffff">
              <g transform="scale(5.12,5.12)">
                <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z" />
              </g>
            </g>
          </svg>
        </li>
      </div>

      <ul ref={menuRef} className={styles['responsive-menu']}>
        <li className={styles['Object-header']}>
          <a className={`${styles['a']}`} href="/" onClick={(e)=>{e.preventDefault(); scrollToSection(refs.diseñosRef);}} >DISEÑOS Y PROYECTOS</a>
        </li>

        <li className={styles['Object-header']}>
          <a className={`${styles['a']}`} href="/" onClick={(e)=>{e.preventDefault(); scrollToSection(refs.sobreNosotrosRef);}}>SOBRE NOSOTROS</a>
        </li>

        <li className={styles['Object-header']}>
          <a className={`${styles['a']}`} href="/" onClick={(e)=>{e.preventDefault(); scrollToSection(refs.queHacemosRef);}}>QUÉ HACEMOS</a>
        </li>

        <li className={`${styles['Object-header']} ${styles.close}`}>
          <p
            ref={iconCloseRef}
            onClick={disappear}
            className={` ${styles['p-close']} ${styles['a']} ${styles['icon-close']}`}
          >
            CERRAR
          </p>
        </li>
      </ul>
    </header>
  );
});

export default Header;
