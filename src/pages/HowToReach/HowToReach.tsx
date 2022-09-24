import { BrowserView, MobileView } from "react-device-detect";
import styles from "../infobox.module.css";

const HowToReach = () => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileWrapper}>
					<h3 className={styles.name}>How To Reach</h3>
					<div className={styles.mobileContent}>
						<ul style={{ paddingLeft: "2em" }}>
							<li>
								NIT-Trichy is located about 22 km from Tiruchirappalli
								Junction / Central Bus stand on the Trichy-Thanjavur
								Highway.
							</li>
							<li>
								The simplest and most economical way to reach NIT-Trichy
								is by bus. Any city bus at Tiruchirappalli Junction will
								take you to the central bus stand.
							</li>
							<li>
								Upon reaching the central bus stand board a
								Thanjavur-bound mofussil or route bus. The journey time
								will be around 40 minutes.
							</li>
							<li>
								Another way of reaching NIT-Trichy is by hiring a taxi.
								Taxis may charge around Rs.500/-
							</li>
						</ul>
						<br />
						Trichy is connected by road to Chennai (320 km) and to all
						major towns in South India by regular bus services.
						Tiruchirapalli is an important junction on the Southern
						Railway. It connects Chennai, Thanjavur, Madurai, Tuticorin,
						Tirupati, Rameswaram, Bangalore, Coimbatore, Cochin and
						Mangalore.
						<br />
						<br />
						Distance between Chennai and Trichy: 322 km by road.
						<br />
						Approximate Travel Time:
						<ul style={{ paddingLeft: "2em" }}>
							<li>By Bus: 6-7 Hrs</li>
							<li>By Car: 5 Hrs</li>
						</ul>
						<br />
						Distance between Banglore and Trichy: 343 km by road.
						<br />
						Approximate Travel Time:
						<ul style={{ paddingLeft: "2em" }}>
							<li>By Bus: 7-8 Hrs</li>
							<li>By Car: 6 Hrs</li>
						</ul>
					</div>
				</div>
			</MobileView>
			<BrowserView>
				<div className={styles.about}>
					<div className={styles.wrapper}>
						<h3>How To Reach</h3>
						<div className={styles.content}>
							<ul style={{ paddingLeft: "2em" }}>
								<li>
									NIT-Trichy is located about 22 km from
									Tiruchirappalli Junction / Central Bus stand on the
									Trichy-Thanjavur Highway.
								</li>
								<li>
									The simplest and most economical way to reach
									NIT-Trichy is by bus. Any city bus at Tiruchirappalli
									Junction will take you to the central bus stand.
								</li>
								<li>
									Upon reaching the central bus stand board a
									Thanjavur-bound mofussil or route bus. The journey
									time will be around 40 minutes.
								</li>
								<li>
									Another way of reaching NIT-Trichy is by hiring a
									taxi. Taxis may charge around Rs.500/-
								</li>
							</ul>
							<br />
							Trichy is connected by road to Chennai (320 km) and to all
							major towns in South India by regular bus services.
							Tiruchirapalli is an important junction on the Southern
							Railway. It connects Chennai, Thanjavur, Madurai,
							Tuticorin, Tirupati, Rameswaram, Bangalore, Coimbatore,
							Cochin and Mangalore.
							<br />
							<br />
							Distance between Chennai and Trichy: 322 km by road.
							<br />
							Approximate Travel Time:
							<ul style={{ paddingLeft: "2em" }}>
								<li>By Bus: 6-7 Hrs</li>
								<li>By Car: 5 Hrs</li>
							</ul>
							<br />
							Distance between Banglore and Trichy: 343 km by road.
							<br />
							Approximate Travel Time:
							<ul style={{ paddingLeft: "2em" }}>
								<li>By Bus: 7-8 Hrs</li>
								<li>By Car: 6 Hrs</li>
							</ul>
						</div>
					</div>
				</div>
			</BrowserView>
		</>
	);
};

export default HowToReach;
