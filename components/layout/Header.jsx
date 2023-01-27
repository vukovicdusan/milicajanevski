import React from "react"
import Wrapper from "./Wrapper"
import * as css from "../../styles/Header.module.css"
import Link from "next/link"

const Header = () => {
	return (
		<div>
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
								<li>
									<a href="#contact">Kontakt</a>
								</li>
							</ul>
						</nav>
					</div>
				</Wrapper>
			</header>
		</div>
	)
}

export default Header
