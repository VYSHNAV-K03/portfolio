import "./App.css";
import design from "/design.png";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import deved from "/dev-ed-wave.png";
import vectorux_logo from "/vectorux_logo.png";

import code from "/code.png";
import consulting from "/consulting.png";
import onetouch from "/onetouch2.png";
import onetouchjob from "/onetouchjob2.png";
import ayeauto from "/ayeauto2.png";
import web4 from "/web4.png";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Div = styled.div``;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  .logo_input {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 540px;
    margin-bottom: 20px;
  }
  .image_logo {
    width: 170px;
    height: 120px;
    margin-bottom: 30px;
  }
  .image_logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .logo_input input,
  .logo_input textarea {
    margin-bottom: 10px;
    width: 320px;
    background: transparent;
    outline: none;
    border: 0.5px solid #ffffff;
    padding: 8px;
    border-radius: 20px 20px 0px 20px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    /* identical to box height */

    color: rgba(255, 255, 255, 0.52);
  }
  .logo_input textarea {
    min-height: 100px;
  }
  .logo_input button {
    position: absolute;
    right: 0;
    bottom: 10px;
    background: #63e7da;
    padding: 10px 20px;
    border-radius: 18px 18px 18px 0px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    color: #ffffff;
  }
  .content_email {
    /* flex: 1; */
    width: 350px;
  }
  .lets_talk {
    font-family: "Montserrat";
    /* font-style: normal; */
    font-weight: 600;
    font-size: 32px;
    line-height: 34px;

    color: #ffffff;
    margin-bottom: 20px;
  }
  .lets_talk .talk {
    font-family: "Satisfy";
    color: #63e7da;
    font-weight: 500;
  }
  .para_talk {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    /* line-height: 67px; */

    color: #d9d9d9;
    margin-bottom: 20px;
  }
  .email_talk {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    /* line-height: 78px; */
    /* identical to box height */

    color: #63e7da;
  }
  @media screen and (max-width: 596px) {
    .logo_input {
      margin-bottom: 80px;
      width: 100%;
    }
    .logo_input button {
      bottom: -40px;
    }
    .content_email {
      width: 100%;
    }
  }
`;

const Bottom = styled.div`
  margin-top: 100px;
  display: flex;
  padding: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;

  color: #ffffff;
  .bottom_content {
    margin-left: auto;
    margin-right: 200px;
  }
  .connect {
    font-family: "Satisfy";
    color: #63e7da;
  }
  @media screen and (max-width: 596px) {
    margin-top: 10px;

    .bottom_content {
      margin-left: auto;
      margin-right: 0;
    }
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mail, setmail] = useState({
    email: "",
    message: "",
  });

  const sendMail = () => {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "vyshnavchikku891@gmail.com",
      Password: "119C3723C1935523F744B4A581302C3CB429",
      To: "support@vectorux.in",
      From: "vyshnavchikku891@gmail.com",
      Subject: `message from ${mail.email}`,
      Body: `${mail.message}`,
    }).then((message) => alert(message));
  };

  // Email.send();

  useEffect(() => {
    console.log(mail);
  }, [mail]);

  return (
    <Div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">vector ux</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-extrabold dark:text-teal-400 md:text-6xl">
              VECTOR UX
            </h2>
            <h3 className="font-serif text-2xl py-2 dark:text-white md:text-3xl">
              we ideate, innovate & create
            </h3>
            {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p> */}
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/vyshnav-chikku"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/company/vectorux/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@vectoruxtechlab2185"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                className="object-cover"
                src={deved}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p> */}
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={design}
                width={"100px"}
                height={"100px"}
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={code}
                width={"100px"}
                height={"100px"}
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? {"Let's"} make
                it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                width={"100px"}
                height={"100px"}
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, {"I've"} done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-md rounded-lg">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                src={onetouch}
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-md rounded-lg">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                src={onetouchjob}
              />
            </div>
            <div className="basis-1/3 flex-1  shadow-md rounded-lg">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                src={ayeauto}
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-md rounded-lg">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                src={web4}
              />
            </div>
          </div>
        </section>
        <Section className="py-10" id="contact">
          <div className="logo_input">
            <div className="image_logo">
              <img src={vectorux_logo} alt="" />
            </div>
            <input
              type="email"
              name=""
              id=""
              placeholder="your email"
              value={mail.email}
              onChange={(e) =>
                setmail({
                  ...mail,
                  email: e.target.value,
                })
              }
            />
            <textarea
              name=""
              id=""
              placeholder="write a message"
              value={mail.message}
              onChange={(e) =>
                setmail({
                  ...mail,
                  message: e.target.value,
                })
              }
            ></textarea>
            <button type="submit" onClick={sendMail}>
              Submit
            </button>
          </div>
          <div className="content_email">
            <div className="lets_talk">
              Let’s <span className="talk">talk</span> something special.{" "}
            </div>
            <div className="para_talk">
              We seek to push the limitations of creativity to create
              high-engaging, user-friendly and memorable interactive
              experiences.
            </div>
            <div className="email_talk">support@vectorux.in</div>
          </div>
        </Section>
        <Bottom className="bottom_section">
          <div className="bottom_content">
            Let’s <span className="connect">connect</span> there
          </div>
        </Bottom>
      </main>
    </Div>
  );
}

export default App;
