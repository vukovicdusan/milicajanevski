import React from "react";
import * as styles from "../styles/Infographic.module.css";
import Underline from "./Underline";
import Wrapper from "./layout/Wrapper";
import Region from "./layout/Region";
import ShapeDivider from "./svg/ShapeDivider";
import InfographicItem from "./InfographicItem";

const Infographic = () => {
  return (
    <div className={styles.infographicBackground}>
      <ShapeDivider background={"dark"} position={"top"}></ShapeDivider>
      <Region>
        <Wrapper>
          <div className={styles.infographicTitle}>
            <h2 className="section-title">Film</h2>
            <Underline color={"secondary"}></Underline>
          </div>
          <div className={styles.infographicMain}>
            <span className={styles.infographicMainLine}></span>
            <InfographicItem
              position={"left"}
              role={"Cica"}
              director={"Snježana Tribuson"}
              year={"2024"}
              title={"Oblak u službi zakona"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Svetlana Sorga"}
              director={"Djordje Milosavljević"}
              year={"2024"}
              title={"V Efekat"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"Nevena"}
              director={"Saša Hajduković"}
              year={"2024"}
              title={"Koža"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Marina Tucaković"}
              director={"Nemanja Ćeranić i Miloš Radunović"}
              year={"2024"}
              title={"Nedelja"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"Tanja Bošković"}
              director={"Dragan Bjelogrlić"}
              year={"2024"}
              title={"Toma"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Ana Marija"}
              director={"Suzana Purković"}
              year={"2023"}
              title={"Pokidan"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"Ana Basta"}
              director={"Ivan Stefanović i Vladimir Tagić"}
              year={"2023"}
              title={"Deca zla (serija)"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Sanja Maslac"}
              director={"Bojan Vuletić"}
              year={"2023"}
              title={"Pad (serija)"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"Maja"}
              director={"Matija Lukac"}
              year={"2022"}
              title={"Polica (kratki film)"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Doplerka"}
              director={"Igor Đorđević i Maša Nešković"}
              year={"2022"}
              title={"Bunar (serija)"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"Advokatica Marinković"}
              director={"Predrag Antonijević"}
              year={"2022"}
              title={"Ubice mog oca"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Cveta"}
              director={"Siniša Cvetić"}
              year={"2022"}
              title={"Usekovanje"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"Mija"}
              director={"Karmen Obrdalj"}
              year={"2021"}
              title={"Kad jutro svane"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"tetka"}
              director={"Nikola Pejaković"}
              year={"2021"}
              title={"Advokado (serija)"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"Isidora"}
              director={"Lyubov Mulmenko"}
              year={"2021"}
              title={"Dunav"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Zorica Gajić"}
              director={"Saša Hajduković"}
              year={"2020"}
              title={"Kosti (serija)"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"službenica"}
              director={"Srdan Golubović"}
              year={"2019"}
              title={"Otac (film)"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Ljubina sestra"}
              director={"Goran Stefanović i Vladimir Tagić"}
              year={"2018"}
              title={"Jutro će promeniti sve (serija)"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"strina Višnja"}
              director={"Ivan Živković"}
              year={"2018"}
              title={"Koreni (serija)"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"negovateljica"}
              director={"Maša Nešković"}
              year={"2018"}
              title={"Asimetrija (film)"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              director={"Ognjen Glavonjić"}
              year={"2018"}
              title={"Teret (film)"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Evelin (sinhronizacija)"}
              year={"2018"}
              title={"Neviđeni 2 (animirani fim)"}
            ></InfographicItem>
            <InfographicItem
              position={"left"}
              role={"Mara"}
              director={"Ivan Živković i Žanko Tomić"}
              year={"2016"}
              title={"Vere i zavere (serija)"}
            ></InfographicItem>
            <InfographicItem
              position={"right"}
              role={"Stamena"}
              director={"Miloš Pušić"}
              year={"2013"}
              title={"Odumiranje (film)"}
            ></InfographicItem>
          </div>
        </Wrapper>
      </Region>
    </div>
  );
};

export default Infographic;
