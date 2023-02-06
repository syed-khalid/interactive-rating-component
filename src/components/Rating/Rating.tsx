import { FormEvent, Dispatch, SetStateAction } from "react";
import styles from "./Rating.module.css";

type RatingProps = {
	rating: number;
	setRating: Dispatch<SetStateAction<number>>;
	setIsSubmitted: Dispatch<SetStateAction<boolean>>;
};

const Rating = ({ rating, setRating, setIsSubmitted }: RatingProps) => {
	function handleRatingClicked(value: number) {
		setRating(value);
	}

	function submitHandler(e: FormEvent) {
		e.preventDefault();

		setIsSubmitted(true);
	}

	return (
		<form onSubmit={submitHandler} className={styles.panel}>
			<img src='../../icon-star.svg' alt='star' className={styles.star} />

			<h1 className={styles.title}>How did we do?</h1>

			<p className={styles.description}>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>

			<div className={styles.buttons_group}>
				{[1, 2, 3, 4, 5].map((item) => (
					<button
						onClick={() => handleRatingClicked(item)}
						type='button'
						className={styles.rating_buttons}>
						{item}
					</button>
				))}
			</div>

			<button
				type='submit'
				disabled={rating === undefined}
				className={styles.submit_button}>
				SUBMIT
			</button>
		</form>
	);
};

export default Rating;
