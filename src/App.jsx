import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg w-11/12 rounded text-center mt-[40px]
      px-10 py-2 text-4xl font-bold mx-auto">RANDOM GIFS</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
