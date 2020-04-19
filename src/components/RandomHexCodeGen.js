import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
const RandomHexCodeGen = () => {
  const hexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  const [currentHexCode, setRandomHexCode] = useState("");
  useEffect(() => {
    setCurrentHexCode();
  }, [setRandomHexCode]);

  const genRandomHexCode = (arr) => {
    let hexcode = [];
    hexcode.push("#");
    for (let i = 0; i < 6; i++) {
      hexcode.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return hexcode.join("");
  };

  const setCurrentHexCode = () => {
    const code = genRandomHexCode(hexes);
    return setRandomHexCode(code);
  };

  return (
    <div
      className="flex justify-center items-center h-full bg-gray-400"
      css={css`
        height: 100vh;
      `}
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg max-w-4xl bg-gray-100">
        <div
          className="h-40 block min-h-full"
          css={css`
            background-color: ${currentHexCode};
            width: 350px;
          `}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Hexcode Generator
          </div>
          <div className="text-4xl text-center rounded-md">
            {currentHexCode}
          </div>
        </div>
        <div className="px-6 py-4 flex justify-center items">
          <button
            onClick={setCurrentHexCode}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Generate Hex Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomHexCodeGen;
