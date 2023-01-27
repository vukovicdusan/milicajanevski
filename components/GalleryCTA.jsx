import React from "react"
import Image from "next/image"
import styles from "../styles/GalleryCTA.module.css"
import img from "../public/img/14.jpg"
import Region from "./layout/Region"
import Wrapper from "./layout/Wrapper"
import Link from "next/link"

const GalleryCTA = () => {
	return (
		<div className={styles.background}>
			<Region>
				<Wrapper>
					<div className={styles.center}>
						<Link className={styles.link} href={"./gallery"}>
							<span className={styles.withIcon}>
								<svg
									className={styles.icon}
									width={50}
									height={50}
									clipRule="evenodd"
									fillRule="evenodd"
									strokeLinejoin="round"
									strokeMiterlimit="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1zm1.5-4.498v-3.008l4.751 4.507-4.751 4.507v-3.008h-10.022v-2.998z"
										fillRule="nonzero"
									/>
								</svg>
								Galerija
							</span>

							<div className={styles.container}>
								<Image
									src={img}
									fill
									alt="img for gallery link"
									sizes="(max-width: 360px) 50vw,
					(max-width: 900px) 300px,
					410px"
								></Image>
							</div>
						</Link>
					</div>
				</Wrapper>
			</Region>
		</div>
	)
}

export default GalleryCTA
