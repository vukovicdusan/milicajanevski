import React from "react"
import * as styles from "../styles/Underline.module.css"

const Underline = (props) => {
	return (
		<div
			className={
				props.position === "start"
					? styles.underlineContainerStart
					: styles.underlineContainerEnd
			}
		>
			<div
				className={
					props.color === "primary"
						? styles.underlinePrimary
						: styles.underlineSecondary
				}
			></div>
		</div>
	)
}

export default Underline
