import AGlimpseOfMyLife from "../UI/AGlimpseOfMyLife";
import ProfileCard from "./AboutMe/ProfileCard";
import AboutMe from "./AboutMe/AboutMe";
import AppNavigation from "../UI/Navbar/AppNavigation";
import EmbedLinkedInPost from "./Awards/EmbedLinkedInPost";
import SkillSet from "./Skills/SkillSet";
import MyProjects from "./Projects/MyProjects";
import ContactForm from "./Contact/ContactForm";

export default function Home() {
  return (
    <>
      <div className="outer-container">
        <AppNavigation />
        <AGlimpseOfMyLife />
        <div className="main-container mx-auto">
          <div className="about-me-wrapper-container">
            <div className="profile-card-wrapper">
              <ProfileCard />
            </div>
            <div className="about-me-sections">
              <AboutMe />
              <SkillSet />
              <MyProjects />
              <EmbedLinkedInPost />
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
