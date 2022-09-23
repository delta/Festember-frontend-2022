import { BrowserView, MobileView } from "react-device-detect";
import styles from "./styles.module.css";

const FAQ = () => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileWrapper}>
					<h3 className={styles.name}>FAQ</h3>
					<div className={styles.mobileContent}>
						1) From when can I avail accommodation?
						<br />
						Accommodation can be availed from 29th September 2022, 5PM
						onwards.
						<br />
						<br />
						2) What are the documents that I am supposed to bring?
						<br />
						It is mandatory to bring the College ID card and your
						Festember QR Code when you arrive at the PR desk for Festember
						registration at NIT Trichy.
						<br />
						<br />
						3) What if we arrive later than our time mentioned during
						Advanced Booking?
						<br />
						A buffer time of 2 hours is given to participants who have
						done advanced booking. Upon exceeding the 2-hour limit, the
						booking will be automatically cancelled. However, the
						participant can also book for accommodation on the spot,
						subject to availability of rooms.
						<br />
						<br />
						4) Does the accommodation charge include food?
						<br />
						No, but you can make use of the canteens/food stalls available
						during Festember at your own expense.
						<br />
						<br />
						5) When does accommodation close?
						<br />
						Accommodation closes by 1st October and all participants will
						have to vacate by 3rd Oct, 11am.
						<br />
						<br />
						6) Can I register for accommodation without registering for
						PR?
						<br />
						No, PR registration is necessary for accommodation.
						<br />
						<br />
						7) When will I get my caution deposit back?
						<br />
						Once the participant vacates from the hostel, the participant
						has to approach the PR desk within 2 hrs to get a complete
						refund of the caution deposit. Fines apply for delay in
						reporting. Caution deposit will be refunded, provided there is
						no overstay and damage to the room or any other college
						property.
						<br />
						<br />
						8) What are the charges for Accommodation?
						<br />
						Please refer to the Accommodation section in the site.
						<br />
						<br />
						9) Can I vacate earlier than the registered date?
						<br />
						Yes, however the money will not be refunded.
						<br />
						<br />
						10) Can I cancel accommodation after registering?
						<br />
						Yes, you can cancel the registration, but money will not be
						refunded.
						<br />
						<br />
						11) Whom should I approach for accommodation on arrival?
						<br />
						You have to report at the PR and hospitality desk.
						<br />
						<br />
						12) Will accommodation be provided if I arrive late in the
						night?
						<br />
						The Festember PR and Hospitality desk will function 24/7 on
						all days of Festember. However, girls are advised not to
						arrive during late-night hours (23:00 - 04:30).
					</div>
				</div>
			</MobileView>
			<BrowserView>
				<div className={styles.about}>
					<div className={styles.wrapper}>
						<h3>FAQ</h3>
						<div className={styles.content}>
							1) From when can I avail accommodation?
							<br />
							Accommodation can be availed from 29th September 2022, 5PM
							onwards.
							<br />
							<br />
							2) What are the documents that I am supposed to bring?
							<br />
							It is mandatory to bring the College ID card and your
							Festember QR Code when you arrive at the PR desk for
							Festember registration at NIT Trichy.
							<br />
							<br />
							3) What if we arrive later than our time mentioned during
							Advanced Booking?
							<br />
							A buffer time of 2 hours is given to participants who have
							done advanced booking. Upon exceeding the 2-hour limit, the
							booking will be automatically cancelled. However, the
							participant can also book for accommodation on the spot,
							subject to availability of rooms.
							<br />
							<br />
							4) Does the accommodation charge include food?
							<br />
							No, but you can make use of the canteens/food stalls
							available during Festember at your own expense.
							<br />
							<br />
							5) When does accommodation close?
							<br />
							Accommodation closes by 1st October and all participants
							will have to vacate by 3rd Oct, 11am.
							<br />
							<br />
							6) Can I register for accommodation without registering for
							PR?
							<br />
							No, PR registration is necessary for accommodation.
							<br />
							<br />
							7) When will I get my caution deposit back?
							<br />
							Once the participant vacates from the hostel, the
							participant has to approach the PR desk within 2 hrs to get
							a complete refund of the caution deposit. Fines apply for
							delay in reporting. Caution deposit will be refunded,
							provided there is no overstay and damage to the room or any
							other college property.
							<br />
							<br />
							8) What are the charges for Accommodation?
							<br />
							Please refer to the Accommodation section in the site.
							<br />
							<br />
							9) Can I vacate earlier than the registered date?
							<br />
							Yes, however the money will not be refunded.
							<br />
							<br />
							10) Can I cancel accommodation after registering?
							<br />
							Yes, you can cancel the registration, but money will not be
							refunded.
							<br />
							<br />
							11) Whom should I approach for accommodation on arrival?
							<br />
							You have to report at the PR and hospitality desk.
							<br />
							<br />
							12) Will accommodation be provided if I arrive late in the
							night?
							<br />
							The Festember PR and Hospitality desk will function 24/7 on
							all days of Festember. However, girls are advised not to
							arrive during late-night hours (23:00 - 04:30).
						</div>
					</div>
				</div>
			</BrowserView>
		</>
	);
};

export default FAQ;
