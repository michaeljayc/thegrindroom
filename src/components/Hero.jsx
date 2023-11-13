import heroImg from "../assets/hero.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Grailed wolf seitan everyday carry drinking vinegar normcore,
            kombucha cred gluten-free hot chicken tonx salvia gorpcore meh
            pinterest. Adaptogen forage skateboard, bespoke letterpress pabst
            cold-pressed coloring book man braid shabby chic occupy lomo
            leggings affogato cupping. Adaptogen palo santo chicharrones XOXO
            mlkshk semiotics.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
