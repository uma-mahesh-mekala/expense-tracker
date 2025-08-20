"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroTitle() {
	return (
		<h2 className="text-2xl font-semibold mb-4">
			<Typewriter
				words={[
					"Welcome to Expense Tracker",
					"Track your expenses easily",
					"Welcome to Expense Tracker",
				]}
				loop={1} // 0 = infinite loop
				cursor
				cursorStyle="|"
				typeSpeed={70}
				deleteSpeed={50}
				delaySpeed={1500}
			/>
		</h2>
	);
}
