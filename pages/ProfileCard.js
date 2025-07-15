import Image from "next/image";

export default function Home() {
  return (
    <div className="profile-card-container overflow-hidden ">
      <div className="absolute top-0 left-0 w-[65px] h-[65px] bg-orange-500 rounded-br-full z-1 rounded-tl-[12px]" />
      <div className="profile-image">
        <Image
          src={
            "https://res.cloudinary.com/djivuystd/image/upload/v1752540592/ProfilePicture_ynzmcf.jpg"
          }
          alt={"Eisha Anwar"}
          width={240}
          height={210}
        />
      </div>
      <div className="bio">
        <div className="intro">
          <div className="name">Eisha Anwar</div>
          <div className="profeesional-summary">
            Full Stack Engineer , building immersive digital experiences while
            chasing new adventures
          </div>
        </div>
        <div className="social-media-links">
          <a target="_blank" href="https://github.com/EishaAnwar">
            <Image
              src={
                "https://res.cloudinary.com/djivuystd/image/upload/v1752581545/github-logo_i3euk7.svg"
              }
              alt={"Github"}
              width={24}
              height={24}
            />
          </a>
          <a target="_blank" href="mailto:eishaanwar51@gmail.com">
            <Image
              src={
                "https://res.cloudinary.com/djivuystd/image/upload/v1752589822/gmail-logo_ldyheb.png"
              }
              alt={"Gmail"}
              width={24}
              height={24}
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/eisha-anwar/">
            <Image
              src={
                "https://res.cloudinary.com/djivuystd/image/upload/v1752581545/linkedin-logo_d6z28n.svg"
              }
              alt={"Linked In"}
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[65px] h-[65px] bg-orange-500 rounded-tl-full z-1" />
    </div>
  );
}
