import type { ReactNode } from "react";
import styles from "./Hero.module.scss";
import heroImg from "../../assets/Futuristic Smart Wristband on Pedestal.jpg";
import scroll from "../../assets/scroll.svg";

export default function Hero(): ReactNode {
	return (
		<section className={styles.hero}>
			<div className={styles["hero-title"]}>
				<h1>VitaLoop One</h1>
				<div className={styles.description}>
					<h3>The Wearable That Thinks Ahead</h3>
					<p>
						A new era of wearable intelligence — designed to adapt, sense, and
						respond to your body, your mind, and your world. Powered by
						real-time adaptive AI and advanced biosensing, VitaLoop One is not
						just smart — it’s self-aware.
					</p>
					<img src={scroll} alt="scroll" loading="lazy" />
				</div>
			</div>
			<div className={styles["hero-img"]}>
				<img src={heroImg} alt="" />
			</div>
		</section>
	);
}
