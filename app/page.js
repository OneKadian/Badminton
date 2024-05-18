import Accordion from "./components/Accordion.jsx";
import HomeBanner from "./components/HomeBanner.jsx";
import CardBody from "./components/CardBody";
import CardGroup from "./components/CardGroup";
import CardHeader from "./components/CardHeader";
import CardImage from "./components/CardImage";
import Card from "./components/Card";
import feature3 from "./public/features3.png";
import feature4 from "./public/features4.png";
import Columns from "./components/Columns.jsx";
import ContentImage from "./components/ContentImage.jsx";
import Footer from "./components/Footer.jsx";
import PriceTable2 from "./components/PriceTable.jsx";
import SectionContainer from "./components/SectionContainer.jsx";
import MotionBTTContainer from "./components/MotionBTTContainer.jsx";
import BadgeGroup from "./components/BadgeGroup.jsx";
import BadgeMessage from "./components/BadgeMessage.jsx";
import PageTitle from "./components/PageTitle.jsx";
import Content from "./components/Content.jsx";
import LeaderBoard from "./components/LeaderBoard.jsx";
import Podium from "./components/Podium.jsx";

// import ContentImage from "./components/ContentImage.jsx";
export default function Home() {
  return (
    <>
      <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
        {/* Page Banner  */}
        {/* <Podium /> */}
        <SectionContainer id="faq" className="faq">
          <LeaderBoard />
        </SectionContainer>
        {/* Archive */}
      </div>
      <Footer />
    </>
  );
}
