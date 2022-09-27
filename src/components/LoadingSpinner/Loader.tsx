import styles from "./styles.module.css";

const Loader = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.overlay_inner}>
				<div className={styles.overlay_content}>
					<span className={styles.spinner} />
				</div>
			</div>
		</div>
	);
};

export default Loader;
