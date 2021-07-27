import Bubble from './Bubble';

const Hero = ({ themeState }) => {
  const skills = [
    { id: 0, src: './images/svgs/html.svg', alt: 'HTML' },
    { id: 1, src: './images/svgs/css.svg', alt: 'CSS' },
    { id: 2, src: './images/svgs/javascript.svg', alt: 'JS - Javascript' },
    { id: 3, src: './images/svgs/react.svg', alt: 'React JS' },
    { id: 4, src: './images/svgs/redux.svg', alt: 'Redux' },
    { id: 5, src: './images/svgs/nodejs.svg', alt: 'Node JS' },
    { id: 6, src: './images/svgs/express.svg', alt: 'Express JS' },
    { id: 7, src: './images/svgs/mongo.svg', alt: 'Mongo DB' },
    { id: 8, src: './images/svgs/mysql.svg', alt: 'MySQL' },
    { id: 9, src: './images/svgs/sass.svg', alt: 'SASS' },
  ];

  return (
    <section className="hero-section theme1">
      <div className="hero-container flex-row flex-jcenter flex-acenter">
        <div className="hero-skills">
          {skills.map((skill, index) => (
            <Bubble skill={skill} key={skill.id} />
          ))}
        </div>
        <div className="hero">
          {(() => {
            let indents = [];
            for (let i = 0; i < 5; i++) {
              indents.push(
                <>
                  <div> </div>
                </>
              );
            }
            return indents;
          })()}
        </div>
      </div>
    </section>
  );
};

export default Hero;
