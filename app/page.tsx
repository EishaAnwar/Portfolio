import AGlimpseOfMyLife from "@/pages/AGlimpseOfMyLife";
import ProfileCard from "@/pages/ProfileCard";

export default function Home() {
  return (
    <div className="outer-container ">
      <div className=" grid">
        <AGlimpseOfMyLife />
      </div>
      <div className="main-container mx-auto">
        <div className="about-me-container gap-25 flex-row items-end">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
