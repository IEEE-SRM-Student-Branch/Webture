import "./About.css";
const About = () => {
  return (
    <div className="background">
      <div className="head-img">
        <img src="/webBg.svg" alt="" />
        <h1>ABOUT ME</h1>
        <span className="about-link">https://www.ieeesrmist.in/about</span>
        <div className="content">
          <p>
            IEEE SRM is not just any student club rather a prolific student
            chapter and multitude of the scholarly that aims in advancing
            technology for Humanity reminds the technology community and the
            world that IEEE stands at the forefront of technological change for
            the betterment of humanity. No matter how advanced technology gets,
            there will always be a divide keeping us from truly knowing a few
            work-related domains. Here at IEEE, we bridge that gap with engaging
            activities across various such domains, where no work goes obscure.
            Every student, every passion and every interest matters to us and
            all are well-addressed and acknowledged. It is also a
            shared-platform for the exultant upbringing of new ideas or projects
            into furtherance.
          </p>

          <div className="quote">
            There’s no power for change greater than a community discovering
            what it cares about.
          </div>
        </div>
      </div>
      <div className="margins">
        <div className="margin-top"></div>
        <div className="margin-left"></div>
        <div className="margin-bottom"></div>
        <div className="margin-right"></div>
      </div>
    </div>
  );
};

export default About;
