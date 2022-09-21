/* eslint-disable no-console */
import styles from "./style.module.css";

export const Card = ({
	 color, src
}: {color: string, src: string}) => (
    
	<div
		className={`${styles.cardFull} card text-center`}
		style={{
			backgroundColor: color,
		}}
	>
		<img src={src} className={`${styles.cardImg} card-img-top m-auto`} alt="cluster-image" />
	</div>
);

Card.defaultProps = {
    src: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg',
	color: "black",
};