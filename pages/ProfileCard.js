import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="profile-card-wrapper gap-25 flex-row items-end fade-in">
      <div className="profile-card-container relative overflow-hidden">
        <div className="absolute top-0 left-0 w-10 h-10 md:w-[65px] md:h-[65px] bg-orange-500 rounded-br-full z-10 pointer-events-none" />
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
            <Link
              target="_blank"
              href="https://github.com/EishaAnwar"
              title="Github"
            >
              <Image
                src={
                  "https://res.cloudinary.com/djivuystd/image/upload/v1752581545/github-logo_i3euk7.svg"
                }
                alt={"Github"}
                width={24}
                height={24}
              />
            </Link>
            <Link
              target="_blank"
              href="mailto:eishaanwar51@gmail.com"
              title="Gmail"
            >
              <Image
                src={
                  "https://res.cloudinary.com/djivuystd/image/upload/v1752589822/gmail-logo_ldyheb.png"
                }
                alt={"Gmail"}
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/eisha-anwar/"
              title="LinkedIn"
            >
              <Image
                src={
                  "https://res.cloudinary.com/djivuystd/image/upload/v1752581545/linkedin-logo_d6z28n.svg"
                }
                alt={"Linked In"}
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="/EishaAnwarResume.pdf"
              title="Download Resume"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              <Image
                src={
                  "https://res.cloudinary.com/djivuystd/image/upload/v1752592834/download-icon_vxquki.png"
                }
                alt={"Download Resume"}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-[65px] h-[65px] bg-orange-500 rounded-tl-full z-10 pointer-events-none" />{" "}
      </div>
    </div>
  );
}
