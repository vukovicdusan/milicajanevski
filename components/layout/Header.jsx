import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import * as css from "../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  let router = useRouter();
  useEffect(() => {
    let targetId = router.asPath.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    setMounted(true);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  }, [mounted]);
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
                  <Link href={"/gallery"}>Galerija</Link>
                </li>
                <li>
                  {/* <ScrollLink href="/#contact">Kontakt</ScrollLink> */}
                  <a href="/#contact">Kontakt</a>
                </li>
              </ul>
            </nav>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Header;
