import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const DesktopOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-800 flex font-gilroy h-[1024px] justify-end mx-auto relative w-full">
        <div className="h-[177px] md:h-[205px] mb-[37px] ml-auto mr-[49px] mt-auto md:px-5 w-[76%] md:w-full">
          <Text
            className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[0] w-[85%] sm:w-full"
            size="txtGilroyMedium24"
          >
            Yes, the institution provides numerous opportunities for students to
            engage in research and internships alongside their coursework. They
            have established partnerships with various organizations and offer
            research. Yes, the institution provides numerous opportunities for
            students to engage in research and internships alongside their
            coursework. We have established partnerships with various
            organizations and offer research
          </Text>
          <div className="absolute bg-blue_gray-100 border border-blue_gray-100 border-solid bottom-[0] flex flex-row gap-3 inset-x-[0] items-center justify-end mx-auto px-5 rounded-md shadow-bs w-full">
            <Line className="bg-black-900 h-[88px] w-[3px]" />
            <Img
              className="h-[72px]"
              src="images/img_telegram.svg"
              alt="telegram"
            />
          </div>
        </div>
        <div className="absolute font-inter h-[1024px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="common-pointer md:h-[1024px] m-auto static w-full"
            onClick={() => navigate("/desktopone")}
          >
            <div className="absolute bg-gray-500 border border-gray-500 border-solid flex md:flex-col flex-row gap-[39px] items-center justify-center p-[18px] right-[0] rounded-md shadow-bs top-[12%] w-[83%]">
              <Text
                className="bg-blue_gray-100 flex h-[50px] items-center justify-center md:ml-[0] ml-[31px] rounded-[5px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 w-[50px]"
                size="txtInterSemiBold36"
              >
                M
              </Text>
              <Text
                className="mr-[803px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                size="txtGilroyMedium32"
              >
                What is MYSY ?
              </Text>
            </div>
            <header className="absolute bg-gray-600 border border-gray-700 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center right-[3%] rounded-md shadow-bs top-[3%] w-[1000px]">
              <Button
                className="border border-blue_gray-100 border-solid cursor-pointer font-extrabold leading-[normal] min-w-[246px] ml-3.5 md:ml-[0] md:mt-0 my-[9px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="lime_100"
              >
                STUDENT
              </Button>
              <Button className="border border-blue_gray-100 border-solid cursor-pointer font-extrabold leading-[normal] min-w-[246px] md:ml-[0] ml-[27px] md:mt-0 my-[9px] text-2xl md:text-[22px] text-center sm:text-xl">
                EDUCATOR
              </Button>
              <Button className="border border-blue_gray-100 border-solid cursor-pointer font-extrabold leading-[normal] min-w-[246px] md:ml-[0] ml-[25px] md:mt-0 my-[9px] text-2xl md:text-[22px] text-center sm:text-xl">
                ADMINISTRATOR
              </Button>
              <Button className="border border-blue_gray-100 border-solid cursor-pointer font-extrabold leading-[normal] min-w-[246px] md:ml-[0] ml-[25px] mr-3 md:mt-0 my-[9px] text-2xl md:text-[22px] text-center sm:text-xl">
                STAKEHOLDER
              </Button>
            </header>
            <Img
              className="absolute h-[30px] right-[4%] top-[32%] w-[30px]"
              src="images/img_micfill0wght4.svg"
              alt="micfill0wghtFour"
            />
            <Sidebar className="!sticky !w-64 bg-colors border border-blue_gray-100 border-solid flex font-gilroy h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto rounded-md shadow-bs top-[0]">
              <div className="flex flex-col gap-[23px] items-center justify-start mb-[25px] mt-[21px] w-full">
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-bold leading-[normal] min-w-[223px] text-2xl md:text-[22px] text-center sm:text-xl"
                  size="sm"
                >
                  NEW CHAT
                </Button>
                <div className="flex flex-col justify-start w-full">
                  <Line className="bg-blue_gray-100 h-px w-full" />
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-[9px] w-[62%] md:w-full">
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      What courses
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-[25px] w-[88%] md:w-full">
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_One"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      What are the admiss
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[15px] mt-[27px] w-[78%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Two"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      How do I apply for{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[15px] mt-[27px] w-[86%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Three"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      Are there any schola
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[15px] mt-[27px] w-[88%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Four"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      Can you provide info
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-[25px] w-[79%] md:w-full">
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Five"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      What financial aid
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-[25px] w-[86%] md:w-full">
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Six"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      What is the examina
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-[25px] w-[77%] md:w-full">
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Seven"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      How can students
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-[25px] w-[84%] md:w-full">
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Eight"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      Are there academic
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[15px] mt-[27px] w-[83%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Nine"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      What is the process
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[15px] mt-[27px] w-[86%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Ten"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      Are there opportunit
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-[25px] w-[83%] md:w-full">
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Eleven"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      What resources are
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[15px] mt-[27px] w-[84%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Twelve"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      Are there any orient
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-6 w-[87%] md:w-full">
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_chatfill0wght.svg"
                      alt="chatfill0wght_Thirteen"
                    />
                    <Text
                      className="ml-[5px] text-white-A700 text-xl"
                      size="txtGilroyBold20"
                    >
                      course selection and{" "}
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100 h-px mt-10 w-full" />
                  <div className="flex flex-row font-inter gap-[46px] items-center justify-start ml-7 md:ml-[0] mt-[19px] w-[71%] md:w-full">
                    <Text
                      className="bg-blue_gray-100 flex h-[100px] items-center justify-center sm:px-5 rounded-[50%] text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-800 w-[100px]"
                      size="txtInterSemiBold48"
                    >
                      M
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtInterRegular40"
                    >
                      ...
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-100 h-[1024px] shadow-bs1 w-px" />
            </Sidebar>
          </div>
          <div className="absolute bg-gray-500 border border-gray-500 border-solid flex md:flex-col flex-row gap-9 items-center justify-center p-[5px] right-[0] rounded-md shadow-bs top-[38%] w-4/5">
            <Text
              className="bg-blue_gray-100 flex h-[50px] items-center justify-center ml-11 md:ml-[0] md:mt-0 my-[13px] rounded-[5px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 w-[50px]"
              size="txtInterSemiBold36"
            >
              M
            </Text>
            <Text
              className="mb-[7px] mr-[39px] p-px text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[83%] sm:w-full"
              size="txtGilroyMedium30"
            >
              Are there any academic support services available to help students
              prepare for exams and succeed in their coursework?
            </Text>
          </div>
          <div className="absolute bg-gray-500 border border-gray-500 border-solid bottom-[23%] flex md:flex-col flex-row gap-9 items-center justify-end p-[5px] right-[0] rounded-md shadow-bs w-[83%]">
            <Text
              className="bg-blue_gray-100 flex h-[50px] items-center justify-center md:mt-0 my-[13px] rounded-[5px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 w-[50px]"
              size="txtInterSemiBold36"
            >
              M
            </Text>
            <Text
              className="mb-[7px] mr-[26px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[87%] sm:w-full"
              size="txtGilroyMedium30"
            >
              Are there any opportunities for research or internships that
              students can pursue alongside their coursework?
            </Text>
          </div>
          <div className="absolute flex md:flex-col flex-row font-gilroy md:gap-10 items-end justify-between right-[2%] top-[24%] w-[71%]">
            <Text
              className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtGilroyMedium24"
            >
              MYSY, or Mukhyamantri Yuva Swavalamban Yojana, is a scholarship
              program in the Indian state of Gujarat that provides financial
              assistance to students pursuing higher education. It aims to
              support and encourage education and skill development among the
              youth of Gujarat.
            </Text>
            <Img
              className="h-[27px] md:mt-0 mt-[87px] w-[27px]"
              src="images/img_imagefill0wgh.svg"
              alt="imagefill0wgh"
            />
          </div>
          <div className="absolute bottom-[38%] flex md:flex-col flex-row font-gilroy md:gap-5 items-end justify-start right-[2%] w-[71%]">
            <Text
              className="relative right-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-2.5 w-[95%] sm:w-full"
              size="txtGilroyMedium24"
            >
              Yes, the institution offers a range of academic support services
              to assist students in preparing for exams and excelling in their
              coursework. These services include tutoring programs, study
              groups, access to online resources, and academic advising.
              Additionally, they conduct workshops and seminars on study skills
              and time management to help students develop effective strategies
              for their studies.{" "}
            </Text>
            <Img
              className="h-[30px] md:ml-[0] ml-[35px] md:mt-0 mt-[110px] w-[30px]"
              src="images/img_micfill0wght4.svg"
              alt="micfill0wghtFour_One"
            />
            <Img
              className="h-[27px] mb-0.5 md:mt-0 mt-[111px] w-[27px]"
              src="images/img_imagefill0wgh.svg"
              alt="imagefill0wgh_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
