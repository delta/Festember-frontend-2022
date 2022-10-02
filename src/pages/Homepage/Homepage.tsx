import { AboutUs, ContactUs, Landing, Timeline } from "../../components";
import ReactFullpage from "@fullpage/react-fullpage";

import "./Homepage.css";
import { useMediaQuery } from "@chakra-ui/react";

const anchors = ["home", "aboutUs", "timeline", "contactUs", "sponsors"];

const Homepage = () => {
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
	return (
		<ReactFullpage
			scrollingSpeed={1000}
			anchors={anchors}
			render={() => {
				return (
					<ReactFullpage.Wrapper>
						<div className="section">
							<Landing isSmallerThan600={isSmallerThan600}/>
						</div>
						<div className="section">
							<AboutUs />
						</div>
						{!isSmallerThan600 && (
							<div className="section">
								<Timeline />
							</div>
						)}
						<div className="section">
							<ContactUs />
						</div>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);
};
export default Homepage;
