import Wrapper from "./layout/Wrapper"

import Image from "next/image"
import * as styles from "../styles/Hero.module.css"
import ShapeDivider from "./svg/ShapeDivider"
import milica from "../public/img/home2_1000px-740x1024.jpg"
import frame from "../public/img/okvir-ime.png"

const Hero = () => {
	return (
		<div className={styles.heroBackground}>
			<Wrapper>
				{/* <Region> */}
				<div className={styles.container}>
					<Image
						className={styles.bckgImage}
						src={milica}
						alt="image of milica janevski"
					></Image>
					<Image
						className={styles.bckgOverlay}
						src={frame}
						alt="frame"
						onScroll={handleScroll}
					></Image>
				</div>
				{/* </Region> */}
			</Wrapper>
			<div className={styles.spacer}></div>
			<ShapeDivider
				background={"light"}
				position={"bottom"}
			></ShapeDivider>
		</div>
	)
}

export default Hero
