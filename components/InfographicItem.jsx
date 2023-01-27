import React from "react"
import * as styles from "../styles/InfographicItem.module.css"

const InfographicItem = (props) => {
	return (
		<div
			className={
				props.position === "right"
					? styles.infographicGrid
					: styles.infographicGridLeft
			}
		>
			<div className={styles.infoYear}>
				<p className="bold">{props.year}</p>
			</div>
			<div className={styles.filmIcon}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M22 1v2h-2v-2h-2v4h-12v-4h-2v2h-2v-2h-2v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2v-22h-2zm-18 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 9h-12v-8h12v8zm4 3h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
				</svg>
			</div>
			<div className={styles.infoBox}>
				<h6>{props.title}</h6>
				{props.title ? (
					<p>
						<span className="bold">Režija:</span> {props.director}
					</p>
				) : null}
				{props.role ? (
					<p>
						<span className="bold">Uloga:</span> {props.role}
					</p>
				) : null}
			</div>
		</div>
	)
}

export default InfographicItem
