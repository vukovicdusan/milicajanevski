import React from "react"
import Wrapper from "./layout/Wrapper"
import * as styles from "../styles/Bio.module.css"
import Region from "./layout/Region"
import ShapeDivider from "./svg/ShapeDivider"
import Underline from "../components/Underline"
import bio1 from "../public/img/8.jpg"
import bio2 from "../public/img/3.jpg"
import Image from "next/image"

const Bio = (props) => {
	return (
		<Region>
			<div className={styles.bioBackgroundLight}>
				<Wrapper>
					<div className={styles.bioSwitcher}>
						<div className={styles.bioStack}>
							<h1>Milica Janevski</h1>
							<Underline position={"start"}></Underline>
							<p>
								<span className="bold">
									Datum i mesto rođenja:{" "}
								</span>{" "}
								18.08.1986. Valjevo
							</p>
							<p>
								<span className="bold">Jezici: </span>srpski,
								engleski, osnove francuskog i italijanskog
							</p>
							<p>
								<span className="bold">Veštine: </span>
								akrobatika, fizički teatar, mačevanje, balet,
								pevanje, jahanje, klizanje, skijanje, scenske
								borbe, ples, razni sportovi (karate, tai chi
								chuan, atletika, džudo, košarka, odbojka,
								kik-boks, gimnastika)
							</p>
						</div>
						<div className={styles.imgContainer}>
							<Image
								// width={600}
								// height={500}
								// fill
								className={styles.bioImage}
								src={bio1}
								alt="bio image"
							></Image>
						</div>
					</div>
				</Wrapper>
			</div>
			<div className={styles.bioBackgroundDark}>
				<ShapeDivider
					background={"light"}
					position={"top"}
				></ShapeDivider>
				<Wrapper>
					<div className={styles.bioSwitcher}>
						<div className={styles.imgContainer2}>
							<Image
								// width={600}
								// height={500}
								// fill
								className={styles.bioImage}
								src={bio2}
								alt="bio image"
							></Image>
						</div>
						<div className={styles.bioStack2}>
							<h2>Obrazovanje</h2>
							<Underline position={"end"}></Underline>
							<p>
								Osnovne akademske studije glume (BFA, 2009) u
								klasi prof. Jasne Đuričić, Akademija Umetnosti,
								Novi Sad.
							</p>
							<p>
								Master studije glume na Akademiji Umetnosti,
								Novi Sad.
							</p>
							<h3>Radionice</h3>
							<ul className={styles.workshopStack}>
								<li>
									Master radionica – psihodrama,metoda rada
									(Tomi Janežič)
								</li>
								<li>
									Šekspir i slika jezika u teatru (Ryszard
									Nieoczym)
								</li>
								<li>Snaga glasa (Ryszard Nieoczym)</li>
								<li>Telo i glas (Denes Debrei)</li>
							</ul>
						</div>
					</div>
					<Region>
						<div className={styles.bioVideo}></div>
					</Region>
				</Wrapper>
			</div>
		</Region>
	)
}

export default Bio
