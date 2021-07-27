import PropTypes from 'prop-types';

const Bubble = ({ skill }) => (
  <>
    <div className="skill-bubble bubble">
      <img src={skill.src} alt={skill.alt} />
    </div>
  </>
);

Bubble.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

Bubble.defaultProps = {
  skill: {
    id: 0,
    alt: '',
    src: '',
  },
};

export default Bubble;
