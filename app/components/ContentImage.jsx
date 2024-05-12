import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import feature1 from "../public/features1.png";
import feature2 from "../public/features2.png";

const ContentImageData = [
  {
    id: uuid(),
    title: "Effortless Planning",
    content:
      "Say goodbye to meal planning stress! With NutriTrack, planning your meals becomes a breeze. Our user-friendly Notion template lets you create customized daily or weekly meal plans effortlessly. Enjoy a balanced and nutritious diet without the hassle.",
    align: "right",
    image: feature1,
  },
  {
    id: uuid(),
    title: "Shopping List",
    content:
      "We've got your grocery shopping covered! NutriTrack includes a handy shopping list feature. As you plan your meals, the template automatically generates a comprehensive shopping list. No more forgotten items or aimless wandering in the supermarket. Shopping for healthy ingredients has never been easier!",
    align: "left",
    image: feature2,
  },
];

const ContentImage = () => {
  return (
    <SectionContainer className="process-items mt-16 space-y-16">
      {ContentImageData.map((item) => (
        <div
          id={item.id}
          key={item.id}
          className="process-item--container grid md:grid-cols-2 gap-y-8"
        >
          <div
            className={`process-item--image rounded-3xl ${
              item.align === "left" ? "md:order-1" : ""
            }`}
          >
            <Image
              src={item.image}
              width={512}
              height={512}
              objectFit="cover"
              alt="Process Banner 1"
              className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
            />
          </div>
          <div
            className={`process-item--content ${
              item.align === "left"
                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
            } my-auto content text-black/60`}
          >
            <h3 className="mb-6 h4 md:h3 font-semibold text-black">
              {item.title}
            </h3>
            <p className="">{item.content}</p>
            <ul className="process-item--list space-y-3">
              {item.listItems?.length &&
                item.listItems.map((listItem) => (
                  <li
                    id={listItem.id}
                    key={listItem.id}
                    className="inline-grid grid-flow-col-dense"
                  >
                    {/* <Icon
                      icon="ph:seal-check-bold"
                      className="w-6 h-6 text-secondary-500 mr-2"
                    /> */}
                    {listItem.content}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};

export default ContentImage;
