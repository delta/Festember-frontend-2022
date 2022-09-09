import ReCAPTCHA from "react-google-recaptcha";
import { ReCAPTCHA_SITE_KEY } from "../../../config";

const Recaptcha = () => {
	return (
		<div>
			<ReCAPTCHA sitekey={ReCAPTCHA_SITE_KEY} onChange={console.log} />
		</div>
	);
};

export default Recaptcha;
