import { FunctionComponent } from "react";
import SkillsTrending from "../components/SkillsTrending";
import ProfileScore from "../components/ProfileScore";

const JobSeekerDashboard: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-colors-grey-1 overflow-hidden flex flex-row items-start justify-start py-0 pr-[37px] pl-0 box-border gap-[38px] tracking-[normal] mq1050:pl-5 mq1050:box-border mq450:gap-[19px]">
      <img
        className="h-[1000px] w-[101px] relative object-cover mq1050:hidden"
        loading="eager"
        alt=""
        src="/group-13@2x.png"
      />
      <main className="flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border max-w-[calc(100%_-_139px)] mq1050:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full text-left text-sm text-colors-black-100 font-h4 mq750:gap-[18px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
              <div className="w-[456px] flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative object-cover"
                    loading="eager"
                    alt=""
                    src="/icons--search@2x.png"
                  />
                  <div className="relative leading-[20px] opacity-[0.4] mix-blend-normal">
                    Search
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-21xl">
                  <h1 className="m-0 h-[52px] relative text-inherit font-medium font-inherit inline-block max-w-full mq1050:text-[32px] mq450:text-[24px]">
                    “Quote of the day “
                  </h1>
                  <div className="self-stretch relative text-sm leading-[20px] opacity-[0.4] mix-blend-normal">
                    This will help you to start you day with full engery
                  </div>
                </div>
              </div>
              <img
                className="h-11 w-11 relative object-contain"
                loading="eager"
                alt=""
                src="/elements--oval@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-center py-0 pr-px pl-0 box-border gap-[36px] max-w-full text-3xl mq750:gap-[18px]">
              <div className="w-[326px] rounded-3xs bg-colors-white-100 flex flex-col items-center justify-start p-[30px] box-border gap-[42px] max-w-full mq450:gap-[21px] mq450:pt-5 mq450:pb-5 mq450:box-border">
                <div className="w-[326px] relative rounded-3xs bg-colors-white-100 h-[360px] hidden max-w-full" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch flex flex-row items-center justify-start relative">
                    <img
                      className="h-6 w-6 absolute my-0 mx-[!important] top-[3px] right-[0px] object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/icons--more--horizontal@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                      <img
                        className="w-[90px] h-[90px] relative object-cover z-[1]"
                        loading="eager"
                        alt=""
                        src="/elements--user--photo@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <h3 className="m-0 h-[29px] relative text-inherit font-medium font-inherit inline-block z-[2] mq450:text-lg">
                          UserName
                        </h3>
                        <div className="relative text-sm leading-[20px] opacity-[0.4] mix-blend-normal z-[1]">
                          Title
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-44 flex flex-col items-start justify-start text-orangered">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="h-[29px] relative font-medium inline-block z-[1] mq450:text-lg">
                        100 345
                      </div>
                      <div className="h-[29px] relative font-medium text-mediumblue inline-block z-[1] mq450:text-lg">
                        1 765
                      </div>
                    </div>
                    <div className="w-[153px] flex flex-row items-start justify-between gap-[20px] text-sm text-colors-black-100">
                      <div className="relative leading-[20px] opacity-[0.4] mix-blend-normal z-[2]">
                        Views
                      </div>
                      <div className="relative leading-[20px] opacity-[0.4] mix-blend-normal z-[2]">
                        Rank
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-0">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[20px]">
                    <button className="cursor-pointer pt-[11px] pb-[9px] pr-[38px] pl-[35px] bg-[transparent] flex-1 rounded-3xs flex flex-row items-center justify-center z-[1] border-[2px] border-solid border-colors-action-info hover:bg-deepskyblue-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-deepskyblue-100">
                      <div className="h-[42px] w-[102px] relative rounded-3xs box-border hidden border-[2px] border-solid border-colors-action-info" />
                      <div className="relative text-sm leading-[20px] font-h4 text-colors-action-info text-center z-[1]">
                        Edit
                      </div>
                    </button>
                    <img
                      className="h-6 w-6 relative object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/icons--message--circle@2x.png"
                    />
                    <img
                      className="h-6 w-6 relative object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/icons--heart@2x.png"
                    />
                    <img
                      className="h-6 w-6 relative object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/icons--bell--on@2x.png"
                    />
                  </div>
                </div>
              </div>
              <SkillsTrending />
              <ProfileScore />
              <div className="w-[326px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
                <div className="self-stretch rounded-3xs bg-colors-white-100 flex flex-col items-center justify-start p-[30px] box-border gap-[45px] max-w-full mq450:gap-[22px] mq450:pt-5 mq450:pb-5 mq450:box-border">
                  <div className="w-[326px] relative rounded-3xs bg-colors-white-100 h-[360px] hidden max-w-full" />
                  <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                      <h3 className="m-0 h-[29px] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-lg">
                        Profile Views
                      </h3>
                      <img
                        className="h-6 w-6 relative object-cover opacity-[0.2] z-[1]"
                        loading="eager"
                        alt=""
                        src="/icons--more--horizontal-2@2x.png"
                      />
                    </div>
                    <img
                      className="w-[196px] h-[196px] relative z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-7.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-0 text-sm">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[24px]">
                      <div className="flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-3.5 w-3.5 relative z-[1]"
                          alt=""
                          src="/color.svg"
                        />
                        <div className="relative leading-[20px] z-[1]">
                          Amazon
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 pr-[9px] pl-0 gap-[6px]">
                        <img
                          className="h-3.5 w-3.5 relative z-[1]"
                          alt=""
                          src="/color-3.svg"
                        />
                        <div className="relative leading-[20px] z-[1]">
                          Ebay
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-3.5 w-3.5 relative z-[1]"
                          alt=""
                          src="/color-4.svg"
                        />
                        <div className="relative leading-[20px] z-[1]">
                          Facebook
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full text-3xl lg:flex-wrap mq750:gap-[20px]">
            <div className="flex-1 rounded-3xs bg-colors-white-100 flex flex-col items-center justify-start pt-4 pb-[30px] pr-[13px] pl-6 box-border gap-[25px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="w-[692px] relative rounded-3xs bg-colors-white-100 h-[360px] hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="w-[185px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                  <h3 className="m-0 self-stretch h-[29px] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-lg">{`Resume Visitors `}</h3>
                </div>
                <img
                  className="h-6 w-6 relative object-cover opacity-[0.2] z-[2]"
                  loading="eager"
                  alt=""
                  src="/icons--more--horizontal-2@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-1.5 box-border max-w-full text-3xs">
                <div className="flex-1 flex flex-row items-center justify-start gap-[30px] max-w-full mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                    <div className="flex flex-col items-start justify-start gap-[33px]">
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2]">
                        400
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2]">
                        300
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2]">
                        200
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2]">
                        100
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2]">
                        0
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[380px] max-w-full text-center mq750:min-w-full">
                    <div className="self-stretch h-[231px] relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                        alt=""
                        src="/lines.svg"
                      />
                      <img
                        className="absolute top-[142px] left-[260px] w-3 h-[89px] z-[3]"
                        loading="eager"
                        alt=""
                        src="/group-1.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[11px] pl-0 gap-[20px] mq750:flex-wrap">
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-[9px]">
                        01
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-3">
                        02
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-3">
                        03
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-[13px]">
                        04
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-3">
                        05
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-3">
                        06
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-3">
                        07
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-[11px]">
                        08
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-3">
                        09
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                        <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2]">
                          10
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                        <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2]">
                          11
                        </div>
                      </div>
                      <div className="relative leading-[15px] opacity-[0.4] mix-blend-normal z-[2] mq750:w-full mq750:h-2">
                        12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.9649] rounded-3xs bg-colors-white-100 flex flex-col items-center justify-start p-[30px] box-border gap-[35px] max-w-full mq750:gap-[17px] mq750:flex-1 mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="w-[692px] relative rounded-3xs bg-colors-white-100 h-[360px] hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full">
                  <div className="w-[521px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[10px] max-w-[calc(100%_-_44px)]">
                    <h3 className="m-0 relative text-inherit font-medium font-inherit z-[2] mq450:text-lg">{`Personality Report `}</h3>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[23px] text-sm mq750:flex-wrap">
                      <div className="flex flex-row items-center justify-start py-0 pr-[7px] pl-0 gap-[6px]">
                        <img
                          className="h-3.5 w-3.5 relative z-[2]"
                          alt=""
                          src="/color-3.svg"
                        />
                        <div className="relative leading-[20px] z-[2]">
                          Artistic
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[3px] pl-0 box-border gap-[6px] min-w-[66px]">
                        <img
                          className="h-3.5 w-3.5 relative z-[2]"
                          alt=""
                          src="/color-4.svg"
                        />
                        <div className="relative leading-[20px] z-[2]">
                          Investigative
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-start gap-[6px] min-w-[62px]">
                        <img
                          className="h-3.5 w-3.5 relative z-[2]"
                          alt=""
                          src="/color-7.svg"
                        />
                        <div className="relative leading-[20px] z-[2]">
                          Enterprising
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-3.5 w-3.5 relative z-[2]"
                          alt=""
                          src="/color.svg"
                        />
                        <div className="relative leading-[20px] z-[2]">
                          Social
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[4px] min-w-[66px]">
                        <img
                          className="h-3.5 w-3.5 relative z-[1]"
                          alt=""
                          src="/color-9.svg"
                        />
                        <div className="relative leading-[20px] z-[1]">
                          Conventional
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-6 h-6 relative object-cover opacity-[0.2] z-[2]"
                      loading="eager"
                      alt=""
                      src="/icons--more--horizontal-2@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[594px] flex flex-row items-start justify-start gap-[30px] max-w-full text-center text-xl mq750:flex-wrap">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-end py-0 pr-0 pl-[18px] box-border relative min-w-[82px] z-[2]">
                    <img
                      className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/elements--oval-1.svg"
                    />
                    <div className="h-[126px] flex-1 relative">
                      <img
                        className="absolute top-[0px] left-[-0.2px] w-full h-full z-[1]"
                        loading="eager"
                        alt=""
                        src="/oval.svg"
                      />
                      <div className="absolute top-[50px] left-[26px] z-[2] mq450:text-base">
                        67%
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-col items-center justify-center py-[50px] pr-[45px] pl-[43px] relative z-[2]">
                    <img
                      className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/oval-1.svg"
                    />
                    <div className="flex flex-row items-start justify-start relative">
                      <div className="h-[26px] relative inline-block z-[1] mq450:text-base">
                        46%
                      </div>
                      <img
                        className="w-[67.5px] absolute my-0 mx-[!important] top-[-50px] right-[-44.9px] h-[122.9px] z-[2]"
                        loading="eager"
                        alt=""
                        src="/oval-2.svg"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-col items-center justify-center py-[50px] pr-12 pl-[46px] relative z-[2]">
                    <img
                      className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/oval-3.svg"
                    />
                    <div className="flex flex-row items-start justify-start relative">
                      <div className="h-[26px] relative inline-block z-[1] mq450:text-base">
                        15%
                      </div>
                      <img
                        className="h-[67.2px] w-[67.5px] absolute my-0 mx-[!important] top-[-50px] right-[-47.9px] z-[2]"
                        loading="eager"
                        alt=""
                        src="/oval-4.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-end py-0 pr-0 pl-[18px] box-border relative min-w-[82px] z-[2]">
                    <img
                      className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/elements--oval-2.svg"
                    />
                    <div className="h-[126px] flex-1 relative">
                      <img
                        className="absolute top-[0px] left-[-0.2px] w-full h-full z-[1]"
                        loading="eager"
                        alt=""
                        src="/oval-5.svg"
                      />
                      <div className="absolute top-[50px] left-[26px] z-[2] mq450:text-base">
                        67%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-9 pl-0 box-border max-w-full text-sm">
                <div className="flex-1 relative leading-[20px] inline-block opacity-[0.4] mix-blend-normal max-w-full z-[2]">
                  Here we will show the persnolity report of user, this will
                  help user to understand how things works in terms of
                  persnolity.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JobSeekerDashboard;
