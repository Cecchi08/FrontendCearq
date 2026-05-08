import styles from "./styles/App.module.css"
import "./styles/global.css"

import { useEffect, useState, useRef } from 'react';
import { getCollection } from "./services/api";

import Header from "./components/Header";
import stylesHeader from './styles/Header.module.css'
import Footer from "./components/Footer";
import Section5 from './components/Section5';
import BackendImage from "./components/BackendImage";
import IconWhatsApp from "./components/IconWhatsApp";

import alarm from './assets/img/alarm.png';
import palette from './assets/img/palette.png';
import call from './assets/img/call.png';
import lightbulb from './assets/img/lightbulb.png';
import money from './assets/img/money.png';
import construction from './assets/img/construction.png';

function App() {
const [current, setCurrent] = useState(0);
const headerRef = useRef(null);
const footerRef = useRef(null);
const [isHidden, setIsHidden] = useState(false);
const heroRef = useRef(null);
const [designs, setDesigns] = useState([]);
const [projects, setProjects] = useState([]);
const queHacemosRef = useRef(null);
const sobreNosotrosRef = useRef(null);
const diseñosRef = useRef(null);

useEffect(() => {
  async function loadData() {
    try {
      const designsData = await getCollection("designs");
      const projectsData = await getCollection("projects");

      setDesigns(designsData || []);
      setProjects(projectsData || []);
    } catch (error) {
      console.error("Error loading collections:", error);
    }
  }

  loadData();
}, []);

useEffect(() => {
  const onScroll = () => {
    if (!heroRef.current) return;

    const heroBottom =
      heroRef.current.offsetTop + heroRef.current.offsetHeight;

    setIsHidden(window.scrollY > heroBottom);
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
}, []);

useEffect(() => {
  if (projects.length === 0) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, 5000);

  return () => clearInterval(interval);
}, [projects]);

const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

const images = {
  alarm,
  palette,
  call,
  lightbulb,
  money,
  construction,
};

return (
  <div>
    <div ref={heroRef} className={styles.hero}>
      <Header
        ref={headerRef}
        className={`${stylesHeader.header} ${isHidden ? stylesHeader['header--hidden'] : ''}`}
        scrollToSection={scrollToSection}
        refs={{ queHacemosRef, sobreNosotrosRef, diseñosRef }}
      />

      <section className={styles.section1}>
        <div className={styles["container-section1"]}>

          <div className={styles.carousel}>
            <div
              className={styles["carousel-track"]}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((img, index) => (
                <div className={styles["carousel-slide"]} key={index}>
                  <div className={styles["img-wrapper"]}>
                    <BackendImage item={img} alt={`slide-${index}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.puntos}>
            {projects.map((_, index) => (
              <span
                key={index}
                className={`${styles.punto} ${
                  current === index ? `${styles.bold} ${styles.active}` : ""
                }`}
                onClick={() => setCurrent(index)}
              >
                .
              </span>
            ))}
          </div>

        </div>
      </section>
    </div>

    <section
      className={`${styles.section2} ${styles.section} ${styles["fade-away"]}`}
    >
      <div className={styles["container-section2"]}>
        <h2 className={styles["h2-section2"]}>
          Nos destacamos por escuchar atentamente a nuestros clientes y convertir
          sus sueños en espacios funcionales, modernos y responsables con el
          medioambiente ¡Dejanos renovar tu hogar con nuestra experiencia!
        </h2>
      </div>
    </section>

    <section
      className={`${styles.section3} ${styles.section} ${styles["fade-away"]}`}
      ref={sobreNosotrosRef}>
      <div className={styles["container-section3"]}>

        <div className={`${styles["card-section3"]} ${styles["card-section3-black"]}`}>
          <div className={styles["icon-card"]}>
            <img className='img' src={images.construction} alt="Construction" />
          </div>
          <p className={styles["p-card-section3"]}>
            Trabajamos con materiales de primera línea y técnicas
            avanzadas.
          </p>
        </div>

        <div className={styles["card-section3"]}>
          <div className={styles["icon-card"]}>
            <img className='img' src={images.alarm} alt="Alarm" />
          </div>
          <p className={styles["p-card-section3"]}>
            Sabemos que su tiempo es valioso. Respetamos los
            tiempos acordados.
          </p>
        </div>

        <div className={`${styles["card-section3"]} ${styles["card-section3-black"]}`}>
          <div className={styles["icon-card"]}>
            <img className='img' src={images.palette} alt="Palette" />
          </div>
          <p className={styles["p-card-section3"]}>
            Cada proyecto es único y se adapta a sus gustos y necesidades.
          </p>
        </div>

        <div className={styles["card-section3"]}>
          <div className={styles["icon-card"]}>
            <img className='img' src={images.call} alt="Call" />
          </div>
          <p className={styles["p-card-section3"]}>
            Lo acompañamos y comunicamos en cada paso del proceso.
          </p>
        </div>

        <div className={`${styles["card-section3"]} ${styles["card-section3-black"]}`}>
          <div className={styles["icon-card"]}>
            <img className='img' src={images.lightbulb} alt="Lightbulb" />
          </div>
          <p className={styles["p-card-section3"]}>
            Incorporamos las últimas tendencias en diseño y tecnología.
          </p>
        </div>

        <div className={styles["card-section3"]}>
          <div className={styles["icon-card"]}>
            <img className='img' src={images.money} alt="Money" />
          </div>
          <p className={styles["p-card-section3"]}>
            Ofrecemos servicios de alta calidad a precios competitivos.
          </p>
        </div>

      </div>
    </section>

    <section className={styles.section4} ref={queHacemosRef}>
      <div className={styles["container-section4"]}>
        <h2 className={styles["title-section4"]}>
          Estamos comprometidos con renovar cada ambiente de manera única,
          combinando diseño y funcionalidad.
        </h2>
      </div>
    </section>

    <Section5 data={designs} ref={diseñosRef}/>
    <Footer ref={footerRef} />
    <IconWhatsApp />
  </div>
);


}

export default App;