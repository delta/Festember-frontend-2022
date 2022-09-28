import React from "react";

const ErrorFallback = (props: ErrorFallbackPropType) => {
	console.error(props.error);
	return (
		<div>
			Some Error Occured{" "}
			<button onClick={() => window.location.reload()}>
				Click Here to Reload
			</button>
		</div>
	);
};

export default ErrorFallback;
