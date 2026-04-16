import React from "react";
import ScrollFloat from "../ScrollFloat";
import AnimatedContent from "../Animate";

<AnimatedContent
  distance={100}
  direction="vertical"
  reverse={false}
  duration={0.8}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity
  scale={1}
  threshold={0.1}
  delay={0}
>
  <div>Content to Animate</div>
</AnimatedContent>;

function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-content">
          <h2 className="about-title animate-fade-in ">About Me</h2>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Hello, I'm Bindu.
          </ScrollFloat>
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <div>
              <p className="about-para animate-slide-up">
                I am an aspiring Full‑Stack Web Developer with an M.Sc. in
                Computer Science and hands‑on experience building scalable
                applications using the MERN stack (MongoDB, Express, React,
                Node.js). My strengths include designing pixel‑perfect,
                interactive UIs, developing secure backend APIs, and deploying
                production‑ready apps with live database integration. I have
                delivered projects such as a Medication Management App and an
                Employee Management System, showcasing my ability to solve
                real‑world problems through clean code and effective design.
                Actively preparing for opportunities at IT organizations, I am
                focused on presenting recruiter‑ready projects, optimizing my
                portfolio for visibility, and demonstrating strong
                problem‑solving and communication skills.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
}

export default About;
