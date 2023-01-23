import React from "react"
import * as styles from "../styles/Infographic.module.css"
import Underline from "./Underline"
import Wrapper from "./layout/Wrapper"
import Region from "./layout/Region"
import ShapeDivider from "./svg/ShapeDivider"
import InfographicItem from "./InfographicItem"

const Infographic = () => {
	return (
		<div className={styles.infographicBackground}>
			<ShapeDivider background={"dark"} position={"top"}></ShapeDivider>
			<Region>
				<Wrapper>
					<div className={styles.infographicTitle}>
						<h2>Film</h2>
						<Underline position={"center"}></Underline>
					</div>
					<div className={styles.infographicMain}>
						<InfographicItem></InfographicItem>
					</div>
				</Wrapper>
			</Region>
		</div>
	)
}

export default Infographic
