import React from "react"
import Wrapper from "./Wrapper"
import Region from "./Region"
import Link from "next/link"
import * as styles from "../../styles/Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Wrapper>
				<Region></Region>
			</Wrapper>
		</footer>
	)
}

export default Footer
