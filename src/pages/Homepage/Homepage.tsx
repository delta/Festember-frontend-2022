import { AboutUs, ContactUs, Landing, Sponsors } from "../../components";
import ReactFullpage from "@fullpage/react-fullpage";

import "./Homepage.css";

const anchors = ["home", "aboutUs", "contactUs", "sponsors"];

const Homepage = () => (
	<ReactFullpage
		scrollingSpeed={1000}
		anchors={anchors}
		render={() => {
			return (
				<ReactFullpage.Wrapper>
					<div className="section">
						<Landing />
					</div>
					<div className="section">
						<AboutUs />
					</div>
					<div className="section">
						<ContactUs />
					</div>
					<div className="section">
						<Sponsors />
					</div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>
);
export default Homepage;
