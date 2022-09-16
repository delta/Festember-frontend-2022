interface RegisterFormType {
	user_name: string;
	user_email: string;
	user_fullname: string;
	user_password: string;
	user_sex: string;
	user_nationality: string;
	user_address: string;
	user_pincode: string;
	user_state: string;
	user_phno: string;
	user_degree: string;
	user_year: string;
	user_college: string;
	user_othercollege?: string;
	user_city: string;
	user_sponsor?: string;
	user_voucher_name?: string;
	user_referral_code?: string;
	recaptcha_code?: string;
}

interface LoginFormType {
	user_email: string;
	user_pass: string;
}
