import { team } from "./team";
import "./team-styles.scss";
// import { ReactComponent as Logo } from "./ieee-mask.svg";

const Teams = () => {
  return (
    <main className="teamsWrapper">
      <h1>Our Team</h1>
      <div className="subtitle">Thank you for attending Webture!</div>
      {/* <Logo className="mask-logo" /> */}
      <section>
        {team.map((item) => (
          <article>
            <img src={item.img} alt={item.name} />
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="ctas">
                <a href={item.linkedinUrl} target="_blank" rel="noreferrer">
                  Linkedin
                </a>
                <a href={item.githubUrl} target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Teams;
