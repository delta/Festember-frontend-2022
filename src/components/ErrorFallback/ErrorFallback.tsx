import React from "react";
import styles from "./styles.module.css";
import { config } from "../../../config";

const ErrorFallback = (props: ErrorFallbackPropType) => {
	console.error(props.error);
	return (
		<div className={styles.wrapper}>
			<p className={styles.errorText}>Some Error Occured :(</p>
			<button
				onClick={() =>
					(window.location.pathname = config.basePath
						? config.basePath
						: "/")
				}
			>
				Click Here to Return Home
			</button>
		</div>
	);
};

export default ErrorFallback;
