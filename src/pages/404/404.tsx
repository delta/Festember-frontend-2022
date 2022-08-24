import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const NotFoundPage = (): JSX.Element => {
	return (
		<div>
			<Link to="/" className={styles.link}>
				Get Back To Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
