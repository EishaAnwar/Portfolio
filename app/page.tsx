import AGlimpseOfMyLife from "@/pages/AGlimpseOfMyLife";

export default function Home() {
  return (
    <div className="outer-container ">
      <div className=" grid">
        <AGlimpseOfMyLife />
      </div>
      <div className="main-container mx-auto">
        <div className="about-me-container p-5 gap-25 flex-row items-end">
          <div className="profile-card-container opacity-0 translate-y-0 transition-transform duration-500 ease-out md:translate-y-[25px] md:opacity-100">
            <div className="ProfileCard"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
