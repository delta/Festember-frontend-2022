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
							started off by the students of National Institute of
							Technology, Tiruchirapalli in the year 1975 now attracts
							students from over 500 colleges pan India. It has provided
							multiple talented artists to kick-start their careers while
							attracting them back year after year.The fest is known for
							bringing forth legends in the industry such as Jonty
							Rhodes, Ashwin Sanghi, Nithya Menen, Amit Trivedi, Guns n
							Hoses, Ambi Subramaniam, Karthick Iyer and more. Festember
							continues to birth new friendships and even more memories.
						</p>
						<br />
						<p>
							Join us this year from October 3rd for a celebration of art
							and culture like none other. Mark your calendars and save
							the dates as this year's edition will surpass all
							expectations.
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
								started off by the students of National Institute of
								Technology, Tiruchirapalli in the year 1975 now attracts
								students from over 500 colleges pan India. It has
								provided multiple talented artists to kick-start their
								careers while attracting them back year after year.The
								fest is known for bringing forth legends in the industry
								such as Jonty Rhodes, Ashwin Sanghi, Nithya Menen, Amit
								Trivedi, Guns n Hoses, Ambi Subramaniam, Karthick Iyer
								and more. Festember continues to birth new friendships
								and even more memories.
							</p>
							<br />
							<p>
								Join us this year from October 3rd for a celebration of
								art and culture like none other. Mark your calendars and
								save the dates as this year's edition will surpass all
								expectations.
							</p>
						</div>
					</div>
				</div>
			</BrowserView>
		</>
	);
};

export default AboutUs;
