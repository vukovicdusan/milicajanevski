import React, { useEffect } from "react"
import Image from "next/image"
import styles from "../styles/Theater.module.css"
import { useState } from "react"
import ChevronLeft from "./svg/ChevronLeft"
import ChevronRight from "./svg/ChevronRight"
import Wrapper from "./layout/Wrapper"
import Underline from "./Underline"
import Region from "./layout/Region"
import ShapeDivider from "./svg/ShapeDivider"

const plays = [
	{
		year: "2019.",
		theater: "Atelje 212",
		play: "Ovaj će biti drugačiji",
		role: "Jovana",
		screenplay: "Đurđa Tešić",
	},
	{
		year: "2018.",
		theater: "Bitef teatar",
		play: "Severoistok",
		role: "Tamara",
		screenplay: "Jane Maričić",
	},
	{
		year: "2018.",
		theater: "Beo Art Bitef teatar",
		play: "Kraljice",
		role: "Mima",
		screenplay: "Branislav Trifunović",
	},
	{
		year: "2017.",
		theater: "Beogradsko dramsko pozorište",
		play: "Iz života insekata",
		role: "Više uloga",
		screenplay: "Ivan Vuković",
	},
	{
		year: "2017.",
		theater: "Šabačko pozorište",
		play: "Rubište",
		role: "Marija",
		screenplay: "Kokan Mladenović",
	},
	{
		year: "2017.",
		theater: "Jugoslovensko dramsko pozorište",
		play: "Don Žuan",
		role: "Šarlota",
		screenplay: "Gorčin Stojanović",
	},
	{
		year: "2016.",
		theater: "Narodno pozorište Sombor",
		play: "Gogoland",
		role: "Više uloga",
		screenplay: "Andraš Urban",
	},
	{
		year: "2015.",
		theater: "Narodno pozorište Sombor",
		play: "Hajmatbuh",
		role: "Marija Šmit",
		screenplay: "Gorčin Stojanović",
	},
	{
		year: "2014/15.",
		theater: "Mikser House i KC Novi Sad",
		play: "Dogvil",
		role: "Grejs",
		screenplay: "Kokan Mladenović",
	},
	{
		year: "2014.",
		theater: "Narodno pozorište Sombor",
		play: "Boing Boing",
		role: "Dženet",
		screenplay: "Olja Đorđević",
	},
	{
		year: "2014.",
		theater: "Radionica integracije i Quendra multimedia, Priština",
		play: "Romeo i Julija",
		role: "Julija",
		screenplay: "Predrag Miki Manojlović",
	},
	{
		year: "2014.",
		theater: "Narodno pozorište Sombor i Kruševačko pozorište",
		play: "Doktor Nušić",
		role: "Slavka",
		screenplay: "Kokan Mladenović",
	},
	{
		year: "2012.",
		theater: "Srpsko narodno pozorište Novi Sad",
		play: "Galeb",
		role: "Nina Mihajlovna Zarečna",
		screenplay: "Tomi Janežić",
	},
	{
		year: "2012.",
		theater: "Narodno pozorište Sombor",
		play: "Marko Kraljević",
		role: "konj Šarac",
		screenplay: "Aleksandar Božina",
	},
	{
		year: "2011.",
		theater: "Narodno pozorište Sombor",
		play: "Pučina",
		role: "Marija",
		screenplay: "Vladan Đurković",
	},
	{
		year: "2010.",
		theater: "Srpsko narodno pozorište Novi Sad",
		play: "Uljež",
		role: "Jankovićka",
		screenplay: "Radoslav Milenković",
	},
	{
		year: "2010.",
		theater: "Narodno pozorište Sombor i Teatar Teatron Švedska",
		play: "Negovano voće",
		role: "Merdžana",
		screenplay: "Željko Santrač",
	},
]

const Testimonials = () => {
	const [reelIndex, setReelIndex] = useState(0)
	const [leftButtonDisabled, setLeftButtonDisabled] = useState(true)
	const [rightButtonDisabled, setRightButtonDisabled] = useState(false)

	let playsNum = plays.length - 1
	useEffect(() => {
		reelIndex > 0
			? setLeftButtonDisabled(false)
			: setLeftButtonDisabled(true)
		reelIndex < playsNum
			? setRightButtonDisabled(false)
			: setRightButtonDisabled(true)
	}, [reelIndex])

	const reelLinkHandler = (direction) => {
		if (direction === "left") {
			setReelIndex(reelIndex !== 0 ? reelIndex - 1 : 0)
		}
		if (direction === "right") {
			setReelIndex(reelIndex !== playsNum ? reelIndex + 1 : playsNum)
		}
	}

	return (
		<div className={styles.theaterBackground}>
			<Region>
				<Wrapper>
					<div className={styles.theaterTitle}>
						<h2 className="section-title">Pozorište</h2>
						<Underline color={"secondary"}></Underline>
					</div>
					<div className={styles.reel}>
						<span className={styles.timeline}></span>
						<div className={styles.reelButtons}>
							<button
								onClick={() => reelLinkHandler("left")}
								className={styles.reelButton}
								disabled={leftButtonDisabled}
							>
								<ChevronLeft
									svgFill={
										leftButtonDisabled &&
										"rgba(170, 81, 170, 0.4)"
									}
								></ChevronLeft>
							</button>
							<button
								onClick={() => reelLinkHandler("right")}
								className={styles.reelButton}
								disabled={rightButtonDisabled}
							>
								<ChevronRight
									svgFill={
										rightButtonDisabled &&
										"rgba(170, 81, 170, 0.4)"
									}
								></ChevronRight>
							</button>
						</div>

						<div
							style={{
								transform: `translateX(${-100 * reelIndex}vw)`,
								inlineSize: `${(playsNum + 1) * 100}vw`,
							}}
							className={styles.reelInside}
						>
							{plays.map((play, index) => (
								<div key={index} className={styles.reelItem}>
									<div className={styles.reelItemContent}>
										<div className={styles.reelItemYear}>
											{play.year}
										</div>
										<div className="">{play.theater}</div>
										<div className={styles.reelItemIcon}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="var(--background-dark)"
											>
												<path d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
											</svg>
										</div>
										<div className={styles.reelItemBox}>
											<p>{play.play}</p>
											<p>Uloga: {play.role}</p>
											<p>Režija: {play.screenplay}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</Wrapper>
			</Region>
			<ShapeDivider
				position={"bottom"}
				background={"dark"}
			></ShapeDivider>
		</div>
	)
}

export default Testimonials
