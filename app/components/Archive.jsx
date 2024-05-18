<HomeBanner />;
{
  /* Components Container */
}
<SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
  {/* Features */}
  <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
    <SectionContainer id="features" className="features pt-10">
      <BadgeGroup alignment="center">
        <BadgeMessage>Features</BadgeMessage>
      </BadgeGroup>
      <PageTitle className="text-center mx-auto text-black" type="default">
        Simplify Your Nutrition Journey with NutriTrack
      </PageTitle>
      <Content className="text-center mt-6" alignment="center">
        <p>
          Hey there! Welcome to NutriTrack, the ultimate nutrition meal planner
          powered by Notion. We&apos;ve got some awesome features lined up to
          make your nutrition journey a piece of cake (pun intended). Check them
          out:
        </p>
      </Content>
      <ContentImage />
    </SectionContainer>
  </MotionBTTContainer>
  {/* Card Container Tabs */}
  <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
    <SectionContainer className="feature-tabs pt-20 ">
      <BadgeGroup alignment="center">
        <BadgeMessage>More Features</BadgeMessage>
      </BadgeGroup>
      <PageTitle className="text-center mx-auto text-black" type="default">
        Master Your Meal Planning and Nutrition Journey
      </PageTitle>
      <Content className="text-center mt-6" alignment="center">
        <p>
          Our comprehensive Notion template designed to empower you on your meal
          planning and nutrition journey. With our user-friendly features,
          customizable layouts, and seamless recipe integration, taking control
          of your meals has never been easier.
        </p>
      </Content>
      <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
        <Card className="col-span-1 text-primary-900">
          <CardBody className="w-full bg-white-600/20 p-12">
            <CardImage src={feature4} alt="Customizable Layouts image used." />
            <CardHeader className="!text-black !text-2xl !font-bold">
              Customizable Layouts
            </CardHeader>
            <p>
              Personalize your meal planning experience with our flexible
              layouts. Tailor your sections, categories, and tabs to suit your
              unique style and organization preferences. Our template adapts to
              your needs, providing a seamless and personalized planning
              experience.
            </p>
          </CardBody>
        </Card>
        <Card className="col-span-1 text-primary-900">
          <CardBody className="w-full bg-white-600/20 p-12">
            <CardImage src={feature3} alt="Progress Tracking image used." />
            <CardHeader className="!text-black !text-2xl !font-bold">
              Progress Tracking
            </CardHeader>
            <p>
              Celebrate your wins and stay motivated on your nutrition journey.
              NutriTrack allows you to monitor your progress with weight,
              measurements, and other key metrics. Track your improvements over
              time and see the positive impact of your healthy choices.
            </p>
          </CardBody>
        </Card>
      </CardGroup>
    </SectionContainer>
  </MotionBTTContainer>
  {/* Pricing Table */}
  <PriceTable2 />
  {/* Testimonials */}
  <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
    <SectionContainer id="testimonials" className="benefits">
      <BadgeGroup alignment="left">
        <BadgeMessage>Testimonials</BadgeMessage>
      </BadgeGroup>
      <PageTitle className="text-black py-1" type="default">
        This is what our customers have to say about this template
      </PageTitle>
      <Columns />
    </SectionContainer>
  </MotionBTTContainer>
  {/* CTA */}
  <CallToAction />
  {/* Accordions */}
  <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
    <SectionContainer id="faq" className="faq">
      <BadgeGroup alignment="center">
        <BadgeMessage>FAQ</BadgeMessage>
      </BadgeGroup>
      <PageTitle className="text-center mx-auto text-black py-1" type="default">
        Got some burning questions about NutriTrack? <br></br>
        <br></br>No worries! We&apos;ve got the answers you need:
      </PageTitle>
      <Accordion />
    </SectionContainer>
  </MotionBTTContainer>
</SectionContainer>;

// Modal
// <div
//   id="authentication-modal"
//   tabindex="-1"
//   aria-hidden="true"
//   class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
// >
//   <div class="relative p-4 w-full max-w-md max-h-full">
//     <div class="relative bg-white rounded-lg shadow">
//       <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
//         <h3 class="text-xl font-semibold text-gray-900">
//           Sign in to our platform
//         </h3>
//         <button
//           type="button"
//           class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
//           data-modal-hide="authentication-modal"
//         >
//           <svg
//             class="w-3 h-3"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//             />
//           </svg>
//           <span class="sr-only">Close modal</span>
//         </button>
//       </div>
//       <div class="p-4 md:p-5">
//         <form class="space-y-4" action="#">
//           <div>
//             <label
//               for="email"
//               class="block mb-2 text-sm font-medium text-gray-900"
//             >
//               Your email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="name@company.com"
//               required
//             />
//           </div>
//           <div>
//             <label
//               for="password"
//               class="block mb-2 text-sm font-medium text-gray-900"
//             >
//               Your password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="••••••••"
//               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             />
//           </div>
//           <div class="flex justify-between">
//             <div class="flex items-start">
//               <div class="flex items-center h-5">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
//                   required
//                 />
//               </div>
//               <label
//                 for="remember"
//                 class="ms-2 text-sm font-medium text-gray-900"
//               >
//                 Remember me
//               </label>
//             </div>
//             <a href="#" class="text-sm text-blue-700 hover:underline">
//               Lost Password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//           >
//             Login to your account
//           </button>
//           <div class="text-sm font-medium text-gray-500">
//             Not registered?{" "}
//             <a href="#" class="text-blue-700 hover:underline">
//               Create account
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>

{
  StartMatchModal && (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-center sm:max-w-lg mx-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white flex flex-wrap justify-between w-[380px] pt-5 pb-4">
            {/* Image 1 and BadgeMessage */}
            <div className="flex flex-col items-center w-1/2">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                <div className="px-8 py-8 text-lg flex">
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden mr-4">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                </div>
              </div>
              <div className="flex mt-2">
                <BadgeGroup alignment="center" className="mt-2">
                  <BadgeMessage>Mihir</BadgeMessage>
                </BadgeGroup>
              </div>
            </div>

            {/* Image 2 and BadgeMessage */}
            <div className="flex flex-col items-center w-1/2">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                <div className="px-8 py-8 text-lg flex">
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden mr-4">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                </div>
              </div>
              <div className="flex mt-2">
                <BadgeGroup alignment="center" className="mt-2">
                  <BadgeMessage>Mayank</BadgeMessage>
                </BadgeGroup>
              </div>
            </div>

            {/* Vs Text */}
            <div className="w-full flex justify-center items-center mt-4">
              <span className="text-lg text-black font-bold flex items-center mx-2">
                VS
              </span>
            </div>

            {/* Image 3 and BadgeMessage */}
            <div className="flex flex-col items-center w-1/2">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                <div className="px-8 py-8 text-lg flex">
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden mr-4">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                </div>
              </div>
              <div className="flex mt-2">
                <BadgeGroup alignment="center" className="mt-2">
                  <BadgeMessage>Mayank</BadgeMessage>
                </BadgeGroup>
              </div>
            </div>

            {/* Image 4 and BadgeMessage */}
            <div className="flex flex-col items-center w-1/2">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                <div className="px-8 py-8 text-lg flex">
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden mr-4">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                </div>
              </div>
              <div className="flex mt-2">
                <BadgeGroup alignment="center" className="mt-2">
                  <BadgeMessage>Mayank</BadgeMessage>
                </BadgeGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  StartMatchModal && (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-center sm:max-w-lg mx-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white w-[380px] flex justify-center pt-5 pb-4 ">
            <div className="w-[300px]">
              <div className=" mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                <div className="px-8 py-8 text-lg flex">
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden mr-4">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                  {/* Image 2 */}
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden ml-4">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                  {/* Vs Text */}
                  <span className="text-lg text-black font-bold flex items-center mx-2">
                    VS
                  </span>
                  {/* Repeat for Images 3 and 4 (optional) */}
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden mr-4">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden ml-4">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                </div>
              </div>
              <div className="flex mt-2">
                <BadgeGroup alignment="center" className="mt-2">
                  {" "}
                  <BadgeMessage>Mihir </BadgeMessage>{" "}
                </BadgeGroup>
                <BadgeGroup alignment="center" className="mt-2">
                  {" "}
                  <BadgeMessage>Mihir </BadgeMessage>{" "}
                </BadgeGroup>
                <BadgeGroup alignment="center" className="mt-2">
                  {" "}
                  <BadgeMessage>Mihir </BadgeMessage>{" "}
                </BadgeGroup>
                <BadgeGroup alignment="center" className="mt-2">
                  {" "}
                  <BadgeMessage>Mihir </BadgeMessage>{" "}
                </BadgeGroup>
              </div>
            </div>
          </div>
          {/* Buttons here */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={toggleCreateMatchModal}
              type="button"
              className="w-full mt-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleStartMatch}
              className="w-full mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Start Match
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// const handleEndMatch = async (event) => {
//   event.preventDefault();
//   setToastDisplay(false);
//   setStartMatchModal(false);
//   try {
//     setIsLoading(true);

//     const team1 = [player1, player2];
//     const team2 = [player3, player4];

//     const { error } = await insertBadmintonMatches(
//       team1,
//       team2,
//       team1score,
//       team2score,
//       creator
//     );
//     if (!error) {
//       const fetchedMatches = await getBadmintonMatches();
//       setMatchRecords(fetchedMatches);
//     } else {
//       console.log("Match inserted successfully!");
//       // Handle success (e.g., display success message or clear form data)
//     }
//   } catch (error) {
//     console.error("Error adding match:", error);
//   } finally {
//     setIsLoading(false); // Set loading to false regardless of success or failure
//   }
// };
// const handleEndMatch = async () => {
//   setToastDisplay(false);
//   setStartMatchModal(false);

//   const team1 = [player1, player2];
//   const team2 = [player3, player4];

//   const { error } = await insertBadmintonMatches(
//     team1,
//     team2,
//     team1score,
//     team2score,
//     creator
//   );
//   if (!error) {
//     setIsLoading(true);
//     const fetchedMatches = await getBadmintonMatches();
//     setMatches(fetchedMatches);
//     setIsLoading(false);
//   } else {
//     console.log("Match inserted successfully!");
//     // Handle success (e.g., display success message or clear form data)
//   }
// };
