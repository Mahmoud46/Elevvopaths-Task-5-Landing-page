import type { ReactNode } from "react";
import styles from "./Features.module.scss";
import productImg from "../../assets/vl1-no-bg.png";
import {
	FiHeart,
	FiCpu,
	FiAlertCircle,
	FiLayers,
	FiWatch,
	FiBatteryCharging,
	FiSmile,
	FiWind,
} from "react-icons/fi";

export default function Features(): ReactNode {
	return (
		<section className={styles.features}>
			<h1>Intelligent Features</h1>
			<p className={styles.description}>Smart. Adaptive. Aware.</p>
			<p className={styles.description}>
				VitaLoop One seamlessly integrates with your body and environment to
				deliver real-time insights, support, and protection.
			</p>
			<div className={styles["features-container"]}>
				<img src={productImg} alt="vl1" className={styles.first} />

				<div className={styles.left}>
					<div className={styles.feature}>
						<div className={styles.icon}>
							<FiHeart />
						</div>
						<div className={styles.content}>
							<h2>BioSense 3.0 Sensor Matrix</h2>
							<p>Advanced biometric tracking</p>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.icon}>
							<FiCpu />
						</div>
						<div className={styles.content}>
							<h2>Adaptive Cognitive AI</h2>
							<p>Mental/emotional state detection and learning AI</p>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.icon}>
							<FiAlertCircle />
						</div>
						<div className={styles.content}>
							<h2>Emergency Autoresponse System</h2>
							<p>Auto SOS, fall detection, irregular rhythm alerts</p>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.icon}>
							<FiWind />
						</div>
						<div className={styles.content}>
							<h2>Environmental Intelligence</h2>
							<p>Air, UV, sound, surroundings</p>
						</div>
					</div>
				</div>
				<img src={productImg} alt="vl1" className={styles.middle} />
				<div className={styles.right}>
					<div className={styles.feature}>
						<div className={styles.icon}>
							<FiLayers />
						</div>
						<div className={styles.content}>
							<h2>Modular SmartBand System</h2>
							<p>Interchangeable band segments and add-ons</p>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.icon}>
							<FiWatch />
						</div>
						<div className={styles.content}>
							<h2>Wraparound Flex MicroLED</h2>
							<p>Flexible curved display</p>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.icon}>
							<FiBatteryCharging />
						</div>
						<div className={styles.content}>
							<h2>Power That Lasts</h2>
							<p>Battery + fast charging</p>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.icon}>
							<FiSmile />
						</div>
						<div className={styles.content}>
							<h2>Emotion-Aware Communication</h2>
							<p>Emotion detection, neuro-adaptive feedback</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
