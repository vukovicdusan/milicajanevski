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
			<div className={styles.underline}></div>
		</div>
	)
}

export default Underline
