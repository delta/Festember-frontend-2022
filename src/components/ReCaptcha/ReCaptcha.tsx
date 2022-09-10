import ReCAPTCHA from "react-google-recaptcha";
import { ReCAPTCHA_SITE_KEY } from "../../../config";
import { useRef } from "react";

const Recaptcha = (props: Form ) => {
	const codeRef = useRef<ReCAPTCHA>(null);
  const handleRecaptchaChange = () => {
    const value = codeRef.current?.getValue();
    props.handleFormChange("recaptcha_code", value as string);
  };
	return (
		<div>
			<ReCAPTCHA
        ref={codeRef}
        sitekey={ReCAPTCHA_SITE_KEY}
        onChange={ handleRecaptchaChange}
			/>
		</div>
	);
};

export default Recaptcha;
