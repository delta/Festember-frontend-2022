import { isMobile } from "react-device-detect";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "./styles.module.css";

const rules = [
	"Smoking, drinking and other drug consumption are strictly prohibited and necessary action will be taken by the institute if a participant is found to be in possession of these items.",
	"Any damage to institution facilities and property provided to the participants would result in serious action and necessary reimbursement charges should be paid by the participants found guilty.",
	"Participants are required to keep the given check-in receipts and RFIDs safe until they checkout. The caution deposit will not be refunded in case of lost receipts. In case of any damage or loss of RFID card, the candidate has to pay the registration fee again and get a new RFID card.",
	"Participants should report at the hostel gate to the concerned incharge with their RFID cards every time they enter or exit the hostel for safety concerns.",
	"Participants are requested to adhere to the check-out time mentioned in the check-in receipt. Check-out after the time indicated would result in per day charges to be deducted from the caution deposit.",
	"Participants are expected to not create any kind of nuisance which might trouble other participants in the room.",
	"The college will not be responsible for any damage or loss of property or valuables stored in places of accommodation.",
	"Upon check-out, the guest should settle all the accounts with regard to the services rendered and return the receipt to the organizers.",
	"Girls should strictly follow the curfew timings of NIT Trichy.\
		Weekdays          06:00 AM - 09:00 PM\
		Weekends          06:00 AM - 09.30 PM",
	"The decision of organizers is final and binding in case of any dispute.",
];

const fares = [
	"The mandatory registration fee for all attendees is ₹370.",
	"The hospitality charges per person are : \
	Standardized Accommodation Cost: ₹300 per day\
	Caution Deposit: ₹150 (refundable)",
	"*All accommodation is provided with a common fare and air conditioners are subject to  availability",
	"**Caution deposit will be refunded at the sole discretion of Festember.",
	"***The fare for faculty members is the same as the fare for students.",
];

const adv_booking = [
	"Advance Booking : Per Person advance: Rs 50 (one time payment)",
	"Advance booking is applicable only for groups having a minimum size of 25 students.",
	"Send us an e-mail to hospitalityfpr@gmail.com that contains the following details :",
];

const adv_booking_sub = [
	"Name of the representative",
	"Name of the college/institutio",
	"Contact number of representative",
	"Number of male attendees (including faculty)",
	"Number of female attendees (including faculty)",
	"Date and time of check-in",
	"Date and time of check-out",
	"Name and e-mail IDs of all students and faculties (should be registered in festember.com and have received QR code)",
];

const adv_booking_inst = [
	"Mail us the necessary details as specified if there are more than 25 people coming for Festember from your college.",
	"On getting your details, we will reply informing the total advance money to be paid, and the representative will have to pay it online (Payment instructions will be mailed). After payment, send us a proper proof, such as an e-receipt or transaction number.",
	"After verifying the payment, confirmation regarding the advance booking will be mailed, which should be shown while coming to Festember.",
	"The advance money is collected only to ensure the availability of accommodation. Note: The booking will get cancelled if the participants don’t turn up within the buffer time for reporting.",
	"People who have done advance booking have to pay the actual accommodation charges only on arrival.",
]

const Accommodation = () => {
	return (
			<ReactFullpage
					scrollingSpeed={1000}
					render={() => {
						return (
							<ReactFullpage.Wrapper>
								<div className={`section ${styles.about}`}>
									<div className={styles.wrapper}>
										<div className={styles.header}>Rules</div>
										<div className={styles.content}>
											<ul>
												{rules.map((rule: string) => {
													return <li>{rule}</li>;
												})}
											</ul>
										</div>
									</div>
								</div>
								<div className={`section ${styles.about}`}>
									<div className={styles.wrapper}>
										<div className={styles.header}>Fares</div>
										<div className={styles.content}>
											<ul>
												{fares.map((fare: string) => {
													return <li>{fare}</li>;
												})}
											</ul>
										</div>
									</div>
								</div>
								<div className={`section ${styles.about}`}>
									<div className={styles.wrapper}>
										<div className={styles.header} style={{ fontSize: isMobile ? "2em" : '', marginBottom: isMobile ? '' : "2em"}}>
											Advance Booking
										</div>
										<div className={styles.content}>
											<ul>
												{adv_booking.map((advb: string) => {
													return (
														<li style={{ padding: "0.1em" }}>
															{advb}
														</li>
													);
												})}
												<ul style={{ paddingLeft: "1.5em" }}>
													{adv_booking_sub.map((advbs: string) => {
														return (
															<li style={{ padding: "0.1em" }}>
																{advbs}
															</li>
														);
													})}
												</ul>
												<li>
													**Advance booking will be valid only till
													a buffer time of 2 hours from the
													check-in time informed to us, and after
													that advance booking gets automatically
													cancelled.
												</li>
												<li>Instructions</li>
												<ul style={{ paddingLeft: "1.5em" }}>
													{adv_booking_inst.map((advbi: string) => {
														return (
															<li style={{ padding: "0.1em" }}>
																{advbi}
															</li>
														);
													})}
												</ul>
											</ul>
										</div>
									</div>
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
	);
};

export default Accommodation;
