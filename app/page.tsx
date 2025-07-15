import AGlimpseOfMyLife from "@/pages/AGlimpseOfMyLife";
import ProfileCard from "@/pages/ProfileCard";
import AboutMe from "@/pages/AboutMe";
import AppNavigation from "@/pages/AppNavigation";

export default function Home() {
  return (
    <div className="outer-container">
      <AppNavigation/>
      <div className="grid">
        <AGlimpseOfMyLife />
      </div>
      <div className="main-container mx-auto">
        <div className="about-me-wrapper-container">
          <div className="profile-card-wrapper gap-25 flex-row items-end">
            <ProfileCard />
          </div>
          <div className="about-me-sections" >
            <AboutMe />
          </div>
        </div>
      </div>
      
    </div>
  );
}
