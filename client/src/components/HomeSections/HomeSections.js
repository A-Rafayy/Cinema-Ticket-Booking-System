import React, { useState } from "react";
import "./HomeSections.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { HomeSectionsTabs } from "../../Utils/Constants";
import { imageInformation } from "../../Utils/Constants";

const HomeSections = () => {
  const [sectionTab, setSectionTab] = useState(1);
  const showSectionTabs = HomeSectionsTabs.map((tab) => (
    <div
      key={tab.id}
      onClick={() => {
        setSectionTab(tab.id);
      }}
      className={sectionTab === tab.id ? "defaultTabsActivated" : "defaultTabs"}
    >
      {tab.title}
    </div>
  ));
  const nowShowing = imageInformation.map((i) => (
    <MovieCard key={i.id} movieInfo={i} />
  ));
  const comingSoon = imageInformation.map((i) => (
    i.id === 1 ? <></> : <MovieCard key={i.id} movieInfo={i} />
  ));
  return (
    <div className="HomeSections-div1">
      <div className="HomeSections-div2">{showSectionTabs}</div>
      <div>
        {sectionTab === 1 ? nowShowing : comingSoon}
      </div>
    </div>
  );
};

export default HomeSections;
