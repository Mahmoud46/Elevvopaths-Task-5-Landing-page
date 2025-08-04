import { useState, type ReactNode } from "react";
import productImg from "../../assets/Crossed_Fitness_Trackers_with_Blue_Waveforms.png";
import styles from "./Price.module.scss";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import data from "../../data/data.json";

export default function Price(): ReactNode {
	const [productIndex, setProductIndex] = useState<number>(1);
	return (
		<section className={styles.price} id="price">
			<h1>Choose Your Loop</h1>
			<p className={styles.description}>
				Three editions. One future-ready platform. Designed to match your body,
				your mind, and your lifestyle.
			</p>

			<div className={styles["price-cont"]}>
				<h2 className={styles.title}>
					<span>{data.products[productIndex].name.split("|")[0]}</span>
					<span>{data.products[productIndex].name.split("|")[1]}</span>
				</h2>
				<p className={styles.description}>
					{data.products[productIndex].description}
				</p>
				<div className={styles["prodcut-cont"]}>
					<h2>{data.products[productIndex].name.split("|")[1]}</h2>
					<h1 className={`${styles["pro-price"]} glass-bg`}>
						<span>$</span>
						{data.products[productIndex].price_usd}
					</h1>
					<img src={productImg} alt="vl1" />
					<button>Get {data.products[productIndex].name.split("|")[1]}</button>
				</div>
				<div className={styles.selector}>
					<button
						onClick={() =>
							setProductIndex(
								productIndex == 0 ? data.products.length - 1 : productIndex - 1
							)
						}
					>
						<FiArrowLeft />
					</button>
					<p>{data.products[productIndex].name.split("|")[1]}</p>
					<button
						onClick={() =>
							setProductIndex(
								productIndex == data.products.length - 1 ? 0 : productIndex + 1
							)
						}
					>
						<FiArrowRight />
					</button>
				</div>
			</div>
		</section>
	);
}
