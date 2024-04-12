"use client";
import React from "react";
import WorkWidget from "@/components/Widget/WorkWidget.jsx";
import SkillsWidget from "@/components/Widget/SkillsWidget.jsx";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import ArticleCard from "@/components/Article/Articlecards.jsx";
import ProfileSection from "/workspaces/cs220-portfolio-group-2/src/components/Introduction/Introduction.jsx";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import "./page.css";

//import ThemeSwitcher from "@/components/Theme/ThemeSwitcher.jsx";

// Experiences that go into the Work Widget
//// Logo images are stored in the public folder.
//// If you need to add your own logos, you need to upload them into the public folder.

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

const experiences = [
  {
    logo: "/slack.png",
    organization: "Slack",
    jobTitle: "Software Engineer",
    startYear: 2016,
    endYear: null,
  },
  {
    logo: "/spotify.png",
    organization: "Spotify",
    jobTitle: "Software Engineer",
    startYear: 2014,
    endYear: 2015,
  },
  {
    logo: "/audible.png",
    organization: "Audible",
    jobTitle: "Software Engineer",
    startYear: 2012,
    endYear: 2013,
  },
  {
    logo: "/microsoft.png",
    organization: "Microsoft",
    jobTitle: "Software Engineer",
    startYear: 2010,
    endYear: 2011,
  },
];

//Article Cards

const articles = [
  {
    date: "Nov 15, 2021",
    title: "Everything you need to know about React",
    content:
      "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
  },
  {
    date: "Sep 2, 2020",
    title: "The Missing Introduction to React",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
  {
    date: "Mar 12, 2022",
    title: "We can do it guys",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
];

// Skills that go into the Skills Widget
const skills = [
  { name: "HTML", proficiency: 60, icon: "html5.png" },
  { name: "CSS", proficiency: 50, icon: "css3.png" },
  { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
];

export default function Home() {
  //Return HTML elements for Home page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>
      <div className="profile-section">
        <ProfileSection />
      </div>

      <div className="content">
        <div className={"articles"}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
        {/* <div className="description"></div> */}
        <div className="digits">
          <WorkWidget title={"Work"} content={"My work experience."} experiences={experiences} />
          <SkillsWidget title={"Skills"} content={"My skills."} skills={skills} />
          <>
            <SignupWidget
              title={"Stay up to date"}
              content={"Get notified when I publish something new, and unsubscribe at any time."}
            />
          </>
        </div>
      </div>
      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}
