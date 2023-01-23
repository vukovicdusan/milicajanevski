import Head from "next/head"
import Bio from "../components/Bio"
import Hero from "../components/Hero"
import Infographic from "../components/Infographic"

export default function Home({ videoUrl }) {
	return (
		<>
			<Head>
				<title>Milica Janevski - Pozorišna i filmska glumica</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero></Hero>
			<Bio videoUrl={videoUrl}></Bio>
			<Infographic></Infographic>
		</>
	)
}

export const getStaticProps = async () => {
	let videoUrl = "https://vimeo.com/505821384"
	return { props: { videoUrl } }
}
