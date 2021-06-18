const Bubble = ({ skill, index }) => {
  return (
    <>
      <div className="skill-bubble bubble" key={index}>
        <img src="/images/svgs/html.svg" alt="HTML" />
      </div>
    </>
  );
};

export default Bubble;
