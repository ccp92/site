import profilePicture from "../../images/profile_picture.jpeg";

const About = (): JSX.Element => {
  return (
    <div className="intro about-background">
      <div>
        <h1 className="header-text">About Me</h1>
        <div className="grid-parent">
          <img
            className="profile-picture grid-child-1"
            src={profilePicture}
            alt="Chris Parsons on a beach"
          />
          <p className="about-text grid-child-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ullamcorper, sem in auctor egestas, arcu mi auctor mauris, at
            condimentum tellus justo vel magna. Ut tincidunt nisl eget dolor
            egestas, sed facilisis metus pretium. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
            cursus purus vel tincidunt pellentesque. Nunc tempus, leo ac
            convallis vehicula, purus metus molestie mauris, viverra ullamcorper
            arcu augue ac lectus. Suspendisse mollis molestie purus non
            sollicitudin. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Donec vestibulum risus
            at quam interdum, non semper risus pulvinar. Morbi volutpat velit
            quis consequat porttitor. Aenean hendrerit, risus a convallis
            pulvinar, lorem sem eleifend ligula, non fringilla ex odio ac neque.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
