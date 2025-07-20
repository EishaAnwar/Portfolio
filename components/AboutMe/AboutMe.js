import Image from "next/image";
import Link from "next/link";

export default function ABoutMe() {
  return (
    <div className="container" id="about">
      <div className="title">
        <p>FULL STACK</p>
        <p>ENGINEER</p>
      </div>

      <div className=".intro">
        👋 With over two years of experience in software development, I
        specialize in building robust, scalable web applications using modern
        technologies like React.js, Next.js, and TypeScript. I’ve contributed to
        small to enterprise-scale projects within micro-frontend architectures,
        leveraging the MERN stack to deliver full-stack solutions. My expertise
        also includes automation testing, CI/CD pipelines, and crafting
        accessible, component-driven design systems.
      </div>

      <div className="stats-container">
        <div className="stats">
          <div>
            <span>+2</span>
            <span className="line-break">YEARS OF</span>
            <span className="line-break">EXPERIENCE</span>
          </div>

          <div>
            <span>+4</span>
            <span className="line-break">PROJECTS</span>
            <span className="line-break">COMPLETED</span>
          </div>
        </div>
        <div className="talkBtn">
          <Image
            src="https://res.cloudinary.com/djivuystd/image/upload/v1752598677/stack-icon_r0hjzw.svg"
            alt="stack icon"
            width={48}
            height={48}
          />

          <Link href="#contact" aria-label="contact">
            <span className="line-break">Let’s build something</span>

            <div className="work-together-box">
              <span>extraordinary together!</span>
              <Image
                src="https://res.cloudinary.com/djivuystd/image/upload/v1752598677/arrow-down-icon_sitxdj.svg"
                alt="arrow down icon"
                width={24}
                height={24}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
