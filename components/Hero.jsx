import React, { useRef, useEffect } from "react"
import Wrapper from "./layout/Wrapper"
import Image from "next/image"
import * as styles from "../styles/Hero.module.css"
import milica from "../public/img/home2_1000px-740x1024.jpg"
import frame from "../public/img/okvir-ime.png"

const Hero = () => {
	const ref = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const positionY = ref.current.getBoundingClientRect().top
			ref.current.style.transform = `translateY(${-positionY * 0.7}px)`
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className={styles.heroBackground}>
			<Wrapper>
				<div className={styles.container}>
					<Image
						ref={ref}
						className={styles.bckgImage}
						src={milica}
						alt="image of milica janevski"
						priority
					></Image>
					<Image
						className={styles.bckgOverlay}
						src={frame}
						alt="frame"
						priority
					></Image>
				</div>
			</Wrapper>
		</div>
	)
}

export default Hero
