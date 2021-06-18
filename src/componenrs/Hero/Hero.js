import Bubble from './Bubble';

const Hero = () => {
  const skills = [
    { src: '.images/svgs/html.svg', alt: 'HTML' },
    { src: '.images/svgs/css.svg', alt: 'CSS' },
    { src: '.images/svgs/javascript.svg', alt: 'JS - Javascript' },
    { src: '.images/svgs/react.svg', alt: 'React JS' },
  ];

  return (
    <section className="hero-section">
      <div className="hero-container flex-row flex-jcenter flex-acenter">
        <div className="hero-skills">
          {skills.map((skill, index) => {
            return <Bubble key={index} skills={skill} />;
          })}
        </div>
        <div className="hero">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="whoami"></div>
      </div>
    </section>
  );
};

export default Hero;
