import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function HeroDetails(props) {
  const hero = props.heroFullDetials;

  return (
    <>
      <Transition appear show={props.openModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-gray-600 bg-opacity-40"
          onClose={props.closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left capitalize align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="grid grid-flow-col auto-cols-max gap-4 items-center text-lg font-medium leading-6 text-gray-900"
                >
                  <img
                    className=" w-20 h-20 rounded-full object-cover object-center overflow-hidden"
                    src={`${hero.image.url}`}
                    alt={`${hero.name}`}
                  />
                  <span>{hero.name}</span>
                </Dialog.Title>
                <div className="mt-2">
                  <div className="text-sm text-gray-500">
                    <div className="mb-2">
                      <p className="text-sm font-medium mb-1 border-b border-gray-200">
                        Appearance
                      </p>
                      <ul className="text-xs">
                        <li>Eye Color: {hero.appearance["eye-color"]}</li>
                        <li>Gender: {hero.appearance.gender}</li>
                        <li>Hair Color: {hero.appearance["hair-color"]}</li>
                        <li>
                          Height: {hero.appearance["height"][0]} /{" "}
                          {hero.appearance["height"][1]}
                        </li>
                        <li>
                          Weight: {hero.appearance["weight"][0]} /{" "}
                          {hero.appearance["weight"][1]}
                        </li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm font-medium mb-1 border-b border-gray-200">
                        Biography
                      </p>
                      <ul className="text-xs">
                        <li>aliases: {hero.biography.aliases}</li>
                        <li>
                          First appearance::{" "}
                          {hero.biography["first-appearance"]}
                        </li>
                        <li>
                          place of birth: {hero.biography["place-of-birth"]}
                        </li>
                        <li>publisher: {hero.biography["publisher"]}</li>
                      </ul>
                    </div>

                    <div className="mb-2">
                      <p className="text-sm font-medium mb-1 border-b border-gray-200">
                        connections
                      </p>
                      <ul className="text-xs">
                        <li>
                          group affiliation:{" "}
                          {hero.connections["group-affiliation"]}
                        </li>
                        <li>relatives: {hero.connections.relatives}</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm font-medium mb-1 border-b border-gray-200">
                        Powerstats
                      </p>
                      <ul className="text-xs">
                        <li>intelligence: {hero.powerstats.intelligence}</li>
                        <li>strength: {hero.powerstats.strength}</li>
                        <li>speed: {hero.powerstats.speed}</li>
                        <li>durability: {hero.powerstats.durability}</li>
                        <li>power: {hero.powerstats.power}</li>
                        <li>combat: {hero.powerstats.combat}</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm font-medium mb-1 border-b border-gray-200">
                        Work
                      </p>
                      <ul className="text-xs">
                        <li>base: {hero.work.base}</li>
                        <li>occupation: {hero.work.occupation}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={props.closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
