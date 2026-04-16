import React from "react";
import TextType from "../text";

function Home() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1KM5YHbv2882mLIL48HvSelWDOQ67mg_x/view?usp=drive_link";
    link.download = "Bindu_Resume.pdf";
    link.click();
  };

  return (
    <>
    <div>
      <TextType
        text={["I’m a MERN Full-Stack Developer."]}
        typingSpeed={75}
        fontSize="4rem"
        style={{ fontWeight: 700 }}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        loop={false}
        cursorBlinkDuration={0.5}
      />
        <p className="mt-4">
          This portfolio showcases my projects, skills, and journey into IT
          development.
        </p>
        <p className="mt-4">
          Explore my work, learn more about me, and feel free to connect through
          the contact page.
        </p>
        <button onClick={handleResumeDownload} className="resume-btn mt-4">
          RESUME
        </button>
      </div>
    </>
  );
}

export default Home;
