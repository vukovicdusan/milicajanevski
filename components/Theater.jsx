import React, { useEffect } from "react"
import Image from "next/image"
import styles from "../styles/Theater.module.css"
import { useState } from "react"
import ChevronLeft from "./svg/ChevronLeft"
import ChevronRight from "./svg/ChevronRight"

const Testimonials = () => {
	const [reelIndex, setReelIndex] = useState(0)
	const [leftButtonDisabled, setLeftButtonDisabled] = useState(true)
	const [rightButtonDisabled, setRightButtonDisabled] = useState(false)

	useEffect(() => {
		reelIndex > 0
			? setLeftButtonDisabled(false)
			: setLeftButtonDisabled(true)
		reelIndex < 1
			? setRightButtonDisabled(false)
			: setRightButtonDisabled(true)
	}, [reelIndex])

	const reelLinkHandler = (direction) => {
		if (direction === "left") {
			setReelIndex(reelIndex !== 0 ? reelIndex - 1 : 1)
		}
		if (direction === "right") {
			setReelIndex(reelIndex !== 1 ? reelIndex + 1 : 0)
		}
	}

	return (
		<div className={styles.reel}>
			<div className={styles.reelButtons}>
				<button
					onClick={() => reelLinkHandler("left")}
					className={styles.reelButton}
					disabled={leftButtonDisabled}
				>
					<ChevronLeft
						svgFill={leftButtonDisabled && "lightgray"}
					></ChevronLeft>
				</button>
				<button
					onClick={() => reelLinkHandler("right")}
					className={styles.reelButton}
					disabled={rightButtonDisabled}
				>
					<ChevronRight
						svgFill={rightButtonDisabled && "lightgray"}
					></ChevronRight>
				</button>
			</div>
			<div
				style={{
					transform: `translateX(${-100 * reelIndex}vw)`,
				}}
				className={styles.reelInside}
			>
				<div className={styles.reelItem}>
					<div className={`${styles.reelItemContent} [ stack ]`}>
						<div className={`${styles.reelItemBody}`}>
							<blockquote>
								<span className="quote-start"></span>
								We looked for an end-to-end Web analytics agency
								to consolidate our data collection and improve
								our analytical potential. And guys from Wlastig
								exceeded our expectations. All the project
								aspects were handled professionally, and the
								results were quite impressive. They delivered
								additional performance measurements that became
								our new business objectives alongside required
								KPIs.
								<span className="quote-end"></span>
							</blockquote>
						</div>
						<div className={styles.reelItemFooter}>
							<div className="frame">
								<span>+23%</span>Leads
							</div>
							<div className="frame">
								<span>-15%</span>Recurring Revenue
							</div>
							<div className="frame">
								<span>+55%</span>Churn Rate
							</div>
						</div>
					</div>
				</div>
				<div className={styles.reelItem}>
					<div className={`${styles.reelItemContent} [ stack ]`}>
						<div className={styles.reelItemBody}>
							<blockquote>
								<span className="quote-start"></span>
								We hired them to set up tracking on our website
								and to analyze the offline data that we gathered
								with online data through our website. We located
								our target groups and made clusters from them so
								we indicated our audience and gave them a
								“slight push” to become our loyal customers.
								<span className="quote-end"></span>
							</blockquote>
						</div>
						<div className={styles.reelItemFooter}>
							<div className="frame">
								<span>+27%</span>Retention rate
							</div>
							<div className="frame">
								<span>-9%</span>Churn Rate
							</div>
							<div className="frame">
								<span>+3%</span>LTV
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
