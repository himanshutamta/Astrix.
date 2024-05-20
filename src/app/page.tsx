"use client";
import MiddleSection from "./components/home/MiddleSection";
import LeftSection from "./components/home/LeftSection";
import { useState } from "react";
import EventDetail from "./components/home/EventDetail";
import CollectibleDetail from "./components/home/CollectibleDetail";
import { CarousalImages } from "./components/home/CarousalImages";
import Description from "./components/home/description";

export default function Home() {
  const [selectTab, setSelectTab] = useState("Events");
  const changeTab = (tab: string) => {
    setSelectTab(tab);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[65%]">
          <LeftSection tab={selectTab} changeTab={changeTab} />
        </div>
        <div className="w-20 bg-[#B9A0FF]">
          <MiddleSection />
        </div>
        <div className="md:w-[40%]">
          {selectTab === "Events" ? <EventDetail /> : <CollectibleDetail />}
        </div>
      </div>
      <Description />
    </>
  );
}
