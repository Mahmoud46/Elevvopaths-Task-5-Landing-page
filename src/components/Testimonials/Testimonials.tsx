import { type ReactNode } from "react";
import styles from "./Testimonials.module.scss";
import data from "../../data/data.json";
import { BsQuote } from "react-icons/bs";

export default function Testimonials(): ReactNode {
	return (
		<section className={styles.testimonials}>
			<h1>What People Are Saying</h1>
			<p className={styles.description}>
				Real feedback from those living the future — today.
			</p>

			<div className={styles["testimonials-container"]}>
				{data.testimonials.map((user, i) => (
					<div className={styles.card} key={i}>
						<p className={`${styles.version}`}>{user.edition}</p>
						<img src={user.avatar} alt={user.name} loading="lazy" />
						<div className={styles.info}>
							<div className={styles.quote}>
								<span>
									<BsQuote />
								</span>
								<p>{user.quote}</p>
								<span>
									<BsQuote />
								</span>
							</div>
							<h3>{user.name}</h3>
							<p className={styles.role}>{user.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
