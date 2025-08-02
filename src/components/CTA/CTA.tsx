import type { ReactNode } from "react";
import bgImage from "../../assets/Futuristic Runner with Fitness Tracker.jpg";
import styles from "./CTA.module.scss";
import { FiArrowRight } from "react-icons/fi";

export default function CTA(): ReactNode {
	return (
		<section className={styles.cta}>
			<h1>Live Smarter. Feel Deeper. Evolve Faster.</h1>
			<p>
				VitaLoop One is more than a wearable — it's the beginning of a more
				connected you.
			</p>
			<button>
				<i>
					<FiArrowRight />
				</i>
				<span>Choose Your Edition</span>
			</button>

			<div className={styles["img-cont"]}>
				<img src={bgImage} alt="bg" loading="lazy" />
			</div>
		</section>
	);
}
