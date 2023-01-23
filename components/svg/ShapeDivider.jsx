import React from "react"
import * as styles from "../../styles/ShapeDivider.module.css"

const ShapeDivider = (props) => {
	return (
		<div
			className={
				props.position === "top"
					? styles.shapeDividerTop
					: styles.shapeDividerBottom
			}
		>
			<svg
				className={
					props.background === "dark" || ""
						? styles.dark
						: styles.light
				}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
			</svg>
		</div>
	)
}

export default ShapeDivider
