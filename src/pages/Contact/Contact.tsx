import { BrowserView, MobileView } from "react-device-detect";
import styles from "./styles.module.css";

const Contact = () => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileWrapper}>
					<h3 className={styles.name}>Contacts</h3>
					<div className={styles.mobileContent}>
						<ul>
							<li>ABBIRAAMI: 8870055242</li>
							<li>ARVINDH: 9361115485</li>
							<li>KAMALESH: 9150738243</li>
						</ul>
					</div>
				</div>
			</MobileView>
			<BrowserView>
				<div className={styles.about}>
					<div className={styles.wrapper}>
						<h3>Contacts</h3>
						<div className={styles.content}>
							<ul>
								<li>ABBIRAAMI: 8870055242</li>
								<li>ARVINDH: 9361115485</li>
								<li>KAMALESH: 9150738243</li>
							</ul>
						</div>
					</div>
				</div>
			</BrowserView>
		</>
	);
};

export default Contact;
