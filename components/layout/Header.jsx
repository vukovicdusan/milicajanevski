import { React, useState } from "react"
import Wrapper from "./Wrapper"
import * as css from "../../styles/Header.module.css"
import Link from "next/link"

// import MobileMenu from "../MobileMenu"
// import Loader from "../Loader"

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [animate, setAnimate] = useState(false)
	const [loading, setLoading] = useState(false)

	const menuOpenHandler = (e) => {
		menuOpen ? setMenuOpen(false) : setMenuOpen(true)
	}

	const menuCloseHandler = (e) => {
		setMenuOpen(false)
	}

	return (
		<div>
			{/* {loading ? (
				<div className="full-loader">
					<Loader></Loader>
				</div>
			) : null} */}
			{/* {animate ? (
				<MobileMenu
					isOpen={menuOpen}
					user={loginContext.user}
					close={menuCloseHandler}
				></MobileMenu>
			) : (
				""
			)} */}
			<header className={css.header}>
				<Wrapper>
					<div className={css.headerWrap}>
						<Link className={css.headerLogo} href={"/"}>
							Milica Janevski
						</Link>
						<nav className={css.desktopNav}>
							<ul className={css.headerWrap}>
								<li>
									<Link href={"/"}>Početna</Link>
								</li>
								<li>
									<Link href={"./gallery"}>Galerija</Link>
								</li>
							</ul>
						</nav>
						<button
							onClick={menuOpenHandler}
							className={`${css.hamburger} [ button-ghost ]`}
							aria-label="open menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="hamburger-svg"
								style={{
									transition: "all .4s ease-in-out",
									width: 32 + "px",
									height: 32 + "px",
									transform: menuOpen
										? "rotate(225deg)"
										: "rotate(0deg)",
								}}
							>
								<line
									id="top-line"
									x1="4.8"
									y1="9.6"
									x2="27.2"
									y2="9.6"
									stroke="var(--text-primary)"
									strokeWidth="3"
									strokeLinecap="round"
									style={{
										transition: "all .4s ease-in-out",

										transform: menuOpen
											? "rotate(-90deg) translate(-29px, 7px)"
											: "rotate(0deg)",
									}}
								></line>

								<line
									id="bottom-line"
									x1="27.2"
									y1="22.4"
									x2="4.8"
									y2="22.4"
									stroke="var(--text-primary)"
									strokeWidth="3"
									strokeLinecap="round"
									style={{
										transition: "all .4s ease-in-out",

										transform: menuOpen
											? "rotate(0deg) translate(0,-9px)"
											: "rotate(0deg)",
									}}
								></line>
							</svg>
						</button>
					</div>
				</Wrapper>
			</header>
		</div>
	)
}

export default Header
