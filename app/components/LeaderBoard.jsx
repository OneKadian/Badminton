"use client";
import MuskImage from "../public/musk.jpg";
import Image from "next/image";
import BadgeGroup from "./BadgeGroup.jsx";
import BadgeMessage from "./BadgeMessage.jsx";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

export default function LeaderBoard() {
  const [modalVisible, setModalVisible] = useState(false);

  // Dummy array with player data
  const dummyData = [
    { name: "Mayank", matchesPlayed: 17, AMP: 20 },
    { name: "Nakul", matchesPlayed: 15, AMP: 19 },
    { name: "Bhavya", matchesPlayed: 14, AMP: 18 },
    { name: "Sathish", matchesPlayed: 16, AMP: 17 },
    { name: "Anirudh", matchesPlayed: 18, AMP: 16 },
    { name: "Mihir", matchesPlayed: 20, AMP: 15 },
    { name: "Dev", matchesPlayed: 19, AMP: 14 },
  ];

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="py-24">
      <BadgeGroup alignment="center">
        <BadgeMessage>Leaderboard </BadgeMessage>
      </BadgeGroup>
      <div className="relative mt-8 px-8 overflow-x-auto shadow-md bg-[#F3F5F8] sm:rounded-lg">
        <table className="w-full px-8 text-sm text-left rtl:text-right text-gray-500">
          {/* Table head - properties */}
          <thead className="text-lg text-gray-700 bg-gray-300">
            <tr>
              <th scope="col" className="px-8 py-8">
                Rank
              </th>
              <th scope="col" className="px-8 py-8">
                Name
              </th>
              <th scope="col" className="px-8 py-8">
                Matches
              </th>
              <th scope="col" className="px-8 py-8">
                AMP
              </th>
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
                <td className="px-8 py-8 text-lg">
                  {/* {player.name} */}
                  <span className="rounded-full border-2 border-black h-16 w-16 text-3xl flex justify-center items-center overflow-hidden">
                    <Image
                      src={MuskImage}
                      alt="muskImage"
                      height={64}
                      width={64}
                    />
                  </span>
                </td>
                <td className="px-8 py-8 text-lg">{player.matchesPlayed}</td>
                <td className="px-8 py-8 text-lg">{player.AMP}</td>
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
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur amet labore.
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
    </div>
  );
}
