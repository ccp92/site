const Intro = (): JSX.Element => {
  return (
    <div className="intro">
      <div>
        <h1 className='header-text'>
          Hey there, I'm <span className="dev-name">Chris Parsons</span>, a
          Software Engineer.
        </h1>
        <a className="action-button" data-test="action-button" href="https://github.com/ccp92">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Intro;
