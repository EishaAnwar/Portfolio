import AGlimpseOfMyLife from "@/pages/AGlimpseOfMyLife";
import ProfileCard from "@/pages/ProfileCard";
import AboutMe from "@/pages/AboutMe";
import AppNavigation from "@/pages/AppNavigation";
import EmbedLinkedInPost from "@/pages/EmbedLinkedInPost";
import SkillSet from "@/pages/SkillSet";
import MyProjects from "@/pages/MyProjects";

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
