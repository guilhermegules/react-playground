import styles from "./About.module.scss";
import themeStyles from "../../styles/Theme.module.scss";
import pasta1 from "../../assets/about/pasta1.png";
import pasta2 from "../../assets/about/pasta2.png";
import house from "../../assets/about/house.png";

const images = [pasta1, pasta2];

const About = () => {
  return (
    <section>
      <h3 className={themeStyles.title}>About</h3>
      <div className={styles.aboutUs}>
        <img src={house} alt="House Aluroni" />
        <div className={styles.aboutUsText}>
          <p>
            We at Aluroni offer you, our dear customers, the tastiest and most
            sophisticated Homemade Italian Pasta in São Paulo! We value the
            traditional ingredients of Italian cuisine, fresh and of excellent
            quality to make your experience even more intense!
          </p>
          <p>We also have a meat menu with many options to suit your taste!</p>
          <p>
            To accompany Italian pasta, Aluroni has a reserve of special wines,
            which pair perfectly with your meal, be it meat or pasta!
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image) => (
          <div key={image} className={styles.image}>
            <img src={image} alt="Pasta" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
