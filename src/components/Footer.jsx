import React from "react";
import Wrapper from "./Wrapper";
import FooterVoyager from "./FooterVoyager";

// import data from './data/team.json'

function Footer() {
  return (
    <Wrapper>
      <footer className="bg-primary-white h-[200px]  lg:h-[150px]">
        <section className="flex justify-center p-4">
          Check out our team's
          <a
            className="pl-[6px]"
            href="https://github.com/chingu-voyages/v49-tier2-team-16"
          >
            Github Repository
          </a>
        </section>
        <section className="lg:flex">
          <section className="w-full grid grid-cols-3 gap-4 bg-primary-color">
            <div className="">
              <p className="text-brand-red"> Web Developers:</p>
              <FooterVoyager
                liUrl={"https://linkedin.com/in/mnix-dev"}
                ghUrl={"https://github.com/mnichols08"}
                voyager={"Mikey Nichols"}
              />
              <FooterVoyager
                liUrl={"https://www.linkedin.com/in/andybrockmann"}
                ghUrl={"https://github.com/PongRVA"}
                voyager={"Andy Brockmann"}
              />
            </div>
            <div>
              <FooterVoyager
                liUrl={"https://www.linkedin.com/in/kaz-smino/"}
                ghUrl={"https://github.com/Kaz-Smino"}
                voyager={"Kaz Smino"}
              />

              <FooterVoyager
                liUrl={
                  "https://www.linkedin.com/in/laura-gieg-web-designer-developer/"
                }
                ghUrl={"https://github.com/frosty8104"}
                voyager={"Laura Gieg"}
              />

              <FooterVoyager
                liUrl={"https://www.linkedin.com/in/rigo0101/"}
                ghUrl={"https://github.com/r1g023"}
                voyager={"@seiya2323"}
              />
            </div>
            <div>
              <FooterVoyager
                liUrl={"https://www.linkedin.com/in/valeriylysenko/"}
                ghUrl={"https://github.com/Valeriusdev"}
                voyager={"Valeriy Lysenko"}
              />

              <FooterVoyager
                liUrl={""}
                ghUrl={"https://www.linkedin.com/in/rigo0101/"}
                voyager={"Kseniia Riabova"}
              />

              <FooterVoyager
                liUrl={"https://www.linkedin.com/in/lashtun/"}
                ghUrl={"https://github.com/NadiiaLashtun"}
                voyager={"Nadiia Lashtun"}
              />
            </div>
          </section>
          <section className="w-full grid grid-cols-3 gap-4 bg-primary-color">
            <div className="lg:py-3.5">
              <p className="text-brand-red"> UI/UX Designer:</p>
              <FooterVoyager
                liUrl={"https://www.linkedin.com/in/lashtun/"}
                ghUrl={"https://github.com/NadiiaLashtun"}
                voyager={"Nadiia Lashtun"}
              />
            </div>
            <div className="lg:py-3.5">
              <p className="text-brand-red"> Product Owner:</p>
              <FooterVoyager
                liUrl={
                  "https://www.linkedin.com/in/harmeet-kaur-psm-i-pspo-i-safe-popm-008778236/"
                }
                ghUrl={"#"}
                voyager={"Harmeet Kaur"}
              />
            </div>
            <div className="lg:py-3.5">
              <p className="text-brand-red"> Scrum Master: </p>
              <FooterVoyager
                liUrl={"https://www.linkedin.com/in/valeriylysenko/"}
                ghUrl={"https://github.com/Valeriusdev"}
                voyager={"Valeriy Lysenko"}
              />
            </div>
          </section>
        </section>
        {/* I'm not sure whose code this is so I commented it out */}
        {/* {data.map((dev) => (
          <p>{dev.name}</p>
        ))} */}
      </footer>
    </Wrapper>
  );
}

export default Footer;
