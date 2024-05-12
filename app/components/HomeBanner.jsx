"use client";

// Importing components from Button folder
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

// Importing Content component
import Content from "./Content";

import BadgeGroup from "./BadgeGroup";
import BadgeIcon from "./BadgeIcon";
import BadgeMessage from "./BadgeMessage";

// Importing components from Motion folder
import MotionBTTContainer from "./MotionBTTContainer";

// Importing SectionContainer component
import SectionContainer from "./SectionContainer";

// Importing PageTitle component
import PageTitle from "./PageTitle";
import Banner from "../public/nutritrack-hero-banner.png";
import Image from "next/image";

const HomeBanner = () => {
  return (
    // <SectionContainer className="page-banner--container py-16 bg-[#181818]">
    <SectionContainer className="page-banner--container py-16">
      <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
        {/* Appear First */}
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
          <BadgeGroup alignment="center">
            <BadgeMessage>Discover NutriTrack! 🥘</BadgeMessage>
          </BadgeGroup>
        </MotionBTTContainer>
        {/* Appear Second */}
        <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
          <PageTitle className="text-center mx-auto text-black" type="heavy">
            The effortless way to plan your meals with the power of Notion.
          </PageTitle>
        </MotionBTTContainer>
        {/* Appear Third */}
        <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
          <Content className="text-center " alignment="center">
            <p>
              Streamline your nutrition journey and achieve your health goals
              with ease.
            </p>
          </Content>

          <div className="mt-6 mb-16 text-center">
            <ButtonGroup alignment="center">
              <Button
                href="#features"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold  text-black transition-colors duration-300 bg-secondary-500 md:w-auto"
              >
                Features
              </Button>
              <a
                role="button"
                href="https://github.com/onekadian"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold  text-black transition-colors duration-300 bg-secondary-500 md:w-auto"
                // className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold  text-black transition-colors duration-300 bg-gray-300 md:w-auto"
              >
                Get Template
                {/* <Icon
                  icon="material-symbols:arrow-forward-rounded"
                  className="text-gray-300"
                /> */}
              </a>
            </ButtonGroup>
          </div>
        </MotionBTTContainer>
        {/* Appear Fourth */}
        <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
          <div className="page-banner--image">
            <Image
              src={Banner}
              width={1024}
              height={680}
              alt="Page Banner"
              objectFit="cover"
              className="mx-auto"
            />
          </div>
        </MotionBTTContainer>
      </SectionContainer>
    </SectionContainer>
  );
};

export default HomeBanner;
