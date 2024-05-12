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
