import { FormEvent, useState } from "react";
import "./App.css";

import Rating from "./components/Rating/Rating";
import Thankyou from "./components/Thankyou/Thankyou";

function App() {
	const [rating, setRating] = useState<number>(0);
	const [submitted, setIsSubmitted] = useState<boolean>(false);

	return (
		<div className='App'>
			{submitted ? (
				<Thankyou rating={rating} />
			) : (
				<Rating
					rating={rating}
					setRating={setRating}
					setIsSubmitted={setIsSubmitted}
				/>
			)}
		</div>
	);
}

export default App;

