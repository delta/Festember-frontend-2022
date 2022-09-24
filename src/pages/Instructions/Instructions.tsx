import { BrowserView, MobileView } from "react-device-detect";
import styles from "../infobox.module.css";

const Instructions = () => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileWrapper}>
					<h3 className={styles.name}>Instructions</h3>
					<div className={styles.mobileContent}>
						Instructions:
						<ul style={{ paddingLeft: "2em" }}>
							<li>
								Each person has to register individually on the
								Festember website.
							</li>
							<li>
								On completion of registration, an acknowledgement mail
								will be sent to your email ID.
							</li>
							<li>
								It is compulsory to bring your college ID card and
								either a print-out or soft copy of the QR code -
								available on the dashboard page once you logged in, when
								you arrive at NIT, Trichy.
							</li>
						</ul>
						<br />
						**Faculty members should also register on the site and all the
						rules apply to them as well.
						<br />
						**Please do note that a limited number of seats are available,
						which will be filled based on a first-come, first-serve.
						<br />
						<br />
						Upon reaching the campus:
						<ul style={{ paddingLeft: "2em" }}>
							<li>
								Participants have to report at the PR desk located at
								the A2 hall in the admin block.
							</li>
							<li>
								Female participants are requested to reach the campus
								before 10:00 pm on the day of arrival.
							</li>
							<li>
								All external participants/visitors must register at the
								PR desk by producing their college ID card, their QR
								code and pay a nominal registration fee.
							</li>
							<li>
								Following this, participants who require accommodation
								must register at the adjacent hospitality desk by
								producing a soft copy/print-out of the acknowledgement
								mail sent to them.
							</li>
							<li>
								The participants must check out at the hospitality desk
								before leaving the campus. Only then will their caution
								deposit be refunded
							</li>
						</ul>
					</div>
				</div>
			</MobileView>
			<BrowserView>
				<div className={styles.about}>
					<div className={styles.wrapper}>
						<h3>Instructions</h3>
						<div className={styles.content}>
							Instructions:
							<ul style={{ paddingLeft: "2em" }}>
								<li>
									Each person has to register individually on the
									Festember website.
								</li>
								<li>
									On completion of registration, an acknowledgement
									mail will be sent to your email ID.
								</li>
								<li>
									It is compulsory to bring your college ID card and
									either a print-out or soft copy of the QR code -
									available on the dashboard page once you logged in,
									when you arrive at NIT, Trichy.
								</li>
							</ul>
							<br />
							**Faculty members should also register on the site and all
							the rules apply to them as well.
							<br />
							**Please do note that a limited number of seats are
							available, which will be filled based on a first-come,
							first-serve.
							<br />
							<br />
							Upon reaching the campus:
							<ul style={{ paddingLeft: "2em" }}>
								<li>
									Participants have to report at the PR desk located at
									the A2 hall in the admin block.
								</li>
								<li>
									Female participants are requested to reach the campus
									before 10:00 pm on the day of arrival.
								</li>
								<li>
									All external participants/visitors must register at
									the PR desk by producing their college ID card, their
									QR code and pay a nominal registration fee.
								</li>
								<li>
									Following this, participants who require
									accommodation must register at the adjacent
									hospitality desk by producing a soft copy/print-out
									of the acknowledgement mail sent to them.
								</li>
								<li>
									The participants must check out at the hospitality
									desk before leaving the campus. Only then will their
									caution deposit be refunded
								</li>
							</ul>
						</div>
					</div>
				</div>
			</BrowserView>
		</>
	);
};

export default Instructions;
