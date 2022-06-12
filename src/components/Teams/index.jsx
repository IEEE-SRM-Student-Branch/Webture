import { team } from "./team";
import "./team-styles.scss";

const Teams = () => {
  return (
    <main className="teamsWrapper">
      <h1>Our Speakers</h1>
      <div className="subtitle">Thank you for attending Webture!</div>
      <section>
        {team.map((item) => (
          <article>
            <img src={item.img} />
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
