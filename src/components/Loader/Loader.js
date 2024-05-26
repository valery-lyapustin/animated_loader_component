import styles from "./style.module.css";

const Loader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loader}>
				{[...Array(20)].map((_, index) => (
					<span
						key={index}
						className={styles.sphere}
						style={{ "--rotation": `${(index + 1)}` }}
					></span>
				))}
			</div>
		</div>
	);
}

export default Loader;