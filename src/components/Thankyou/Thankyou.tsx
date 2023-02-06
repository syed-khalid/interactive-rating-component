import styles from "./Thankyou.module.css";

type Props = {
	rating: number;
};

function Thankyou({ rating }: Props) {
	return (
		<div className={styles.panel}>
			<img src='../../../public/illustration-thank-you.svg' />

			<div className={styles.rating_pill}>
				<span>You selected {rating} out of 5</span>
			</div>

			<h1 className={styles.title}>Thank you!</h1>

			<p>
				We appreciate you taking the time to give a rating. If you ever need
				more suppiort, don't hesitate to get in touch!
			</p>
		</div>
	);
}

export default Thankyou;
