import React, { useState } from "react";
import useFetch from "./Services/useFetch";
import HeroDetails from "./HeroDetails";
// import Modal from './HeroFullDetails';

export default function HeroCard() {
  const { data: hero, error, loading } = useFetch(1);
  let [isModalActive, setIsModalActive] = useState(false);

  function openModal() {
    setIsModalActive(true);
  }
  function closeModal() {
    setIsModalActive(false);
  }

  if (error) throw error;
  if (loading) return "<Loader />";

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {/* <div className="px-3 py-3  border-indigo-500 border shadow">
          <img
            className="h-60 w-full object-cover object-center overflow-hidden"
            src={`${hero.image.url}`}
            alt={`${hero.name}`}
          />
          <p className="text-indigo-600">Appearance</p>
          <ul className="">
            <li>Eye Color: {hero.appearance["eye-color"]}</li>
            <li>Gender: {hero.appearance.gender}</li>
            <li>Hair Color: {hero.appearance["hair-color"]}</li>
            <li>
              Height: {hero.appearance["height"][0]}(in ft) /{" "}
              {hero.appearance["height"][1]}(in cms)
            </li>
            <li>Race: {hero.appearance["race"]}</li>
            <li>
              Weight: {hero.appearance["weight"][0]}(in lb) /{" "}
              {hero.appearance["weight"][1]} (in kg)
            </li>
          </ul>
          <div>{hero.name}</div>
        </div> */}
        <div className="grid place-content-end position-relative overflow-hidden border-indigo-500 border shadow">
          <img
            className=" w-full object-cover object-center overflow-hidden"
            src={`${hero.image.url}`}
            alt={`${hero.name}`}
          />
          <div className="bg-gradient-to-t from-gray-400 absolute top-0 left-0 h-full w-full"></div>
          <div className="grid grid-flow-row"></div>
          <div className="absolute left-0 bottom-0 px-3 py-3 text-white font-mono">
            <p className="text-sm font-medium mb-1 border-b border-gray-200">
              {hero.name}
            </p>
            <ul className="text-xs">
              <li>Real Name: {hero.biography["full-name"]}</li>
              <li>Race: {hero.appearance.race}</li>
              <li>Alter Egos: {hero.biography["alter-egos"]}</li>
            </ul>

            <button
              type="button"
              onClick={openModal}
              className="px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md bg-opacity-80 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Show More..
            </button>
          </div>
          <HeroDetails
            openModal={isModalActive}
            closeModal={closeModal}
            heroFullDetials={hero}
          />
        </div>
      </div>
    </>
  );
}
