"use client";
import MuskImage from "../public/musk.jpg";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MatchModal from "../components/CreateMatchModal";

export default function LeaderBoard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [CreateMatchModal, setCreateMatchModal] = useState(false);
  const [toastDisplay, setToastDisplay] = useState(true);

  // Dummy array with player data
  const dummyData = [
    { name: "Mayank", Score: "21-17", AMP: 20 },
    { name: "Nakul", Score: "21-15", AMP: 19 },
    { name: "Bhavya", Score: "21-14", AMP: 18 },
    { name: "Sathish", Score: "21-16", AMP: 17 },
    { name: "Anirudh", Score: "21-18", AMP: 16 },
    { name: "Mihir", Score: "21-20", AMP: 15 },
    { name: "Dev", Score: "21-19", AMP: 14 },
    { name: "Dev", Score: "21-19", AMP: 14 },
    { name: "Dev", Score: "21-19", AMP: 14 },
    { name: "Dev", Score: "21-19", AMP: 14 },
  ];

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const toggleCreateMatchModal = () => {
    setCreateMatchModal(!CreateMatchModal);
  };

  return (
    <div className="py-24 bg-[#F3F5F8] mt-4">
      {/* <ButtonGroup alignment="center"> */}
      <div className="flex justify-center items-center">
        <button
          onClick={toggleCreateMatchModal}
          className="inline-flex w-3/5 cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold  text-white transition-colors duration-300 bg-blue-600 md:w-auto"
        >
          Create Match
          <span className="px-1 text-white ">
            <FaPlus />
          </span>
        </button>
      </div>

      <div
        className="relative h-[500px] mt-8 px-8 overflow-x-auto shadow-md bg-[#F3F5F8] sm:rounded-lg"
        // style={{ maxHeight: "80vh", overflowY: "auto" }}
      >
        <table className="w-full px-8 text-sm text-left rtl:text-right text-gray-500">
          {/* Table head - properties */}
          {/* Table head - properties */}
          <thead className="text-lg text-gray-700 bg-gray-300">
            <tr>
              <th scope="col" className="px-8 py-8">
                Match Number
              </th>
              <th scope="col" className="px-8 py-8">
                Players
              </th>
              <th scope="col" className="px-8 py-8">
                Score
              </th>
              {/* <th scope="col" className="px-8 py-8">
                Score
              </th> */}
              <th scope="col" className="px-8 py-8">
                <span className="sr-only">View</span>
              </th>
              <th scope="col" className="px-8 py-8">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the dummyData array to create table rows dynamically */}
            {dummyData.map((player, index) => (
              // Table row - data
              <tr key={index} className="bg-white border-b text-lg">
                <th
                  scope="row"
                  className="px-8 py-8 text-lg font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>

                <td className="px-8 py-8 text-lg flex">
                  {/* Image 1 */}
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
                </td>
                <td className="px-8 py-8 text-lg">{player.Score}</td>
                {/* <td className="px-8 py-8 text-lg">{player.AMP}</td> */}
                <td className="px-8 py-8 text-lg text-right">
                  <button
                    onClick={toggleModal}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
                <td className="px-8 py-8 text-lg text-right">
                  <button
                    onClick={toggleModal}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*View/Edit Modal */}
        {modalVisible && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
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
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <FaRegEye className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Modal Title
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur amet labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Create match modal */}
        {/* {CreateMatchModal && <MatchModal modalDisplay={CreateMatchModal} />} */}
        {CreateMatchModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
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
                <div className="bg-white w-[400px] flex justify-center pt-5 pb-4 ">
                  <div className="w-[300px] ">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <FaRegEye className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Choose 4 players
                      </h3>
                      {/* Team 1 selection */}
                      <form class="max-w-sm mx-auto">
                        <label
                          for="countries"
                          class="block mb-2 text-lg font-medium text-gray-900"
                        >
                          Select Team 1
                        </label>
                        <select
                          id="countries"
                          class="bg-gray-50 border my-1 border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5"
                        >
                          {/* <option selected>Choose player 1</option> */}
                          <option value="US">Mayank</option>
                          <option value="CA">Sathish</option>
                          <option value="FR">Dev</option>
                          <option value="DE">Bhavya</option>
                          <option value="DE">Nakul</option>
                          <option value="DE">Mihir</option>
                          <option value="DE">Anirudh</option>
                        </select>
                        <select
                          id="countries"
                          class="bg-gray-50 border my-1 border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5"
                        >
                          {/* <option selected>Choose player 2</option> */}
                          <option value="US">Mayank</option>
                          <option value="CA">Sathish</option>
                          <option value="FR">Dev</option>
                          <option value="DE">Bhavya</option>
                          <option value="DE">Nakul</option>
                          <option value="DE">Mihir</option>
                          <option value="DE">Anirudh</option>
                        </select>
                      </form>
                      {/* Team 2 selection */}
                      <form class="max-w-sm mx-auto">
                        <label
                          for="countries"
                          class="block mb-2 mt-2 text-lg font-medium text-gray-900"
                        >
                          Select Team 2
                        </label>
                        <select
                          id="countries"
                          class="bg-gray-50 border my-1 border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5"
                        >
                          {/* <option selected>Choose player 3</option> */}
                          <option value="US">Mayank</option>
                          <option value="CA">Sathish</option>
                          <option value="FR">Dev</option>
                          <option value="DE">Bhavya</option>
                          <option value="DE">Nakul</option>
                          <option value="DE">Mihir</option>
                          <option value="DE">Anirudh</option>
                        </select>
                        <select
                          id="countries"
                          class="bg-gray-50 border my-1 border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5"
                        >
                          {/* <option selected>Choose player 4</option> */}
                          <option value="US">Mayank</option>
                          <option value="CA">Sathish</option>
                          <option value="FR">Dev</option>
                          <option value="DE">Bhavya</option>
                          <option value="DE">Nakul</option>
                          <option value="DE">Mihir</option>
                          <option value="DE">Anirudh</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={toggleCreateMatchModal}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="w-full mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Start Match
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Toast */}
        {toastDisplay && (
          <AnimatePresence>
            {toastDisplay && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                id="toast-bottom-right"
                className="fixed flex items-center w-max p-4 space-x-4 text-gray-500 bg-gray-200 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 lg:max-w-xs"
                role="alert"
              >
                <div className="flex">
                  <div className="ms-3 text-sm font-normal">
                    <span className="mb-1 text-sm font-semibold text-gray-900">
                      You must be logged in
                    </span>
                    <div className="mb-2 mt-2 text-sm font-normal">
                      Please login before moving forward
                    </div>
                    <div className="grid grid-cols-1 gap-2 h-10">
                      <div></div>
                      <div>
                        <Link
                          href="/sign-in"
                          className="inline-flex justify-center items-center w-3/4 h-full px-2 py-1.5 text-sm font-semibold text-center text-black bg-secondary-500 rounded-lg hover:bg-secondary-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`ms-auto -mx-1.5 -my-1.5  items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8`}
                    data-dismiss-target="#toast-interactive"
                    aria-label="Close"
                    onClick={() => {
                      setToastDisplay(false);
                    }}
                  >
                    <RxCross1 className="text-black" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
