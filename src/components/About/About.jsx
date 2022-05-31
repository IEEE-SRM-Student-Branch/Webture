import "./About.css";
import arrow from "./assets/arrow.png";

const About = () => (
	<section className="about">
		<hr />
		<div>
			<div>
				<div>
					<p>https://www.ieeesrmist.in/about</p>
					<img src={arrow} alt="Cursor" />
				</div>
				<h3>ABOUT</h3>
				<p>
					IEEE SRM is not just any student club rather a prolific student chapter and
					multitude of the scholarly that aims in advancing technology for Humanity
					reminds the technology community and the world that IEEE stands at the forefront
					of technological change for the betterment of humanity. No matter how advanced
					technology gets, there will always be a divide keeping us from truly knowing a
					few work-related domains. Here at IEEE, we bridge that gap with engaging
					activities across various such domains, where no work goes obscure. Every
					student, every passion and every interest matters to us and all are
					well-addressed and acknowledged. It is also a shared-platform for the exultant
					upbringing of new ideas or projects into furtherance.
				</p>
				<h4>
					&#34;There&#39;s no power for change greater than a community discovering what
					it cares about.&#34;
				</h4>
			</div>
		</div>
		<hr />
	</section>
);

export default About;
