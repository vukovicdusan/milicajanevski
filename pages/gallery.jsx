import React from "react"
import Head from "next/head"
import * as styles from "../styles/Gallery.module.css"
import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"
import Region from "../components/layout/Region"
import Wrapper from "../components/layout/Wrapper"

const gallery = (images) => {
	return (
		<>
			<Head>
				<title>
					Milica Janevski - Pozorišna i filmska glumica - Galerija
				</title>
				<meta
					name="description"
					content="Galerija slika glumice Milice Janevski"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Region>
				<Wrapper>
					<div className={styles.grid}>
						<Gallery>
							{images.images.map((image, index) => (
								<div key={index} className={styles.frame}>
									<Item
										original={image.image}
										thumbnail={image.image}
										width={image.width}
										height={image.height}
									>
										{({ ref, open }) => (
											<img
												ref={ref}
												onClick={open}
												src={image.image}
											/>
										)}
									</Item>
								</div>
							))}
						</Gallery>
					</div>
				</Wrapper>
			</Region>
		</>
	)
}

export async function getStaticProps() {
	const results = await fetch(
		`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/image?max_results=39`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(
					process.env.CLOUDINARY_API_KEY +
						":" +
						process.env.CLOUDINARY_API_SECRET
				).toString("base64")}`,
			},
		}
	)

	if (!results.ok) {
		throw new Error("Error! Couldn't get the images!")
	}

	const { resources } = await results.json()

	const images = resources.map((resource) => {
		const { width, height } = resource
		return {
			image: resource.secure_url,
			width,
			height,
		}
	})

	return {
		props: {
			images,
		},
	}
}

export default gallery
