import { BrowserView, MobileView } from "react-device-detect";
import styles from "./styles.module.css";

const AboutUs = () => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileWrapper}>
					<h3 className={styles.name}>About Us</h3>
					<div className={styles.mobileContent}>
						<p>
							Festember, the largest cultural festival of South India,
							was started by the students of the National Institute of
							Technology, Tiruchirappalli, as a zero-budget fest in the
							year 1975. Since then, it has grown to attract students
							from over 500 colleges from all across India. Apart from
							that, it has also been known to bring forth stalwarts from
							various fields such as Jonty Rhodes, Nithya Menen, Amit
							Trivedi, Guns n Roses, and Karthick Iyer, to name a few.
							Festember continues to grow and help create memories each
							year, living upto its name of "a fest to remember".
						</p>
						<br />
						<p>
							Join us this year from September 29th, for a celebration of
							art and culture like none other. Mark your calendars and
							save your dates for a deep dive into a sunken paradise.
						</p>
					</div>
				</div>
			</MobileView>
			<BrowserView>
				<div className={styles.about}>
					<div className={styles.wrapper}>
						<h3>About Us</h3>
						<div className={styles.content}>
							<p>
								Festember, the largest cultural festival of South India,
								was started by the students of the National Institute of
								Technology, Tiruchirappalli, as a zero-budget fest in
								the year 1975. Since then, it has grown to attract
								students from over 500 colleges from all across India.
								Apart from that, it has also been known to bring forth
								stalwarts from various fields such as Jonty Rhodes,
								Nithya Menen, Amit Trivedi, Guns n Roses, and Karthick
								Iyer, to name a few. Festember continues to grow and
								help create memories each year, living upto its name of
								"a fest to remember".
							</p>
							<br />
							<p>
								Join us this year from September 29th, for a celebration
								of art and culture like none other. Mark your calendars
								and save your dates for a deep dive into a sunken
								paradise.
							</p>
						</div>
					</div>
				</div>
			</BrowserView>
		</>
	);
};

export default AboutUs;
