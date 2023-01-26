import React from "react"
import Wrapper from "./Wrapper"
import * as styles from "../../styles/Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Wrapper>
				<p className={styles.footerCenter}>
					{" "}
					Copyright © 2023 Milica Janevski | Website by Dušan Vuković{" "}
				</p>
			</Wrapper>
		</footer>
	)
}

export default Footer
