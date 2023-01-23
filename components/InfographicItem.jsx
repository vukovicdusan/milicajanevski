import React from "react"
import * as styles from "../styles/InfographicItem.module.css"
import FilmIcon from "./svg/FilmIcon"
const InfographicItem = (props) => {
	return (
		<div className={styles.infographicGrid}>
			<div className={styles.infoYear}>
				<p>2022.</p>
			</div>
			<div className={styles.filmIcon}>
				<FilmIcon></FilmIcon>
			</div>
			<div className={styles.infoBox}></div>
		</div>
	)
}

export default InfographicItem
