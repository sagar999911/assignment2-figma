import { FunctionComponent } from "react";
import SkillsTrending from "../components/SkillsTrending";
import ProfileScore from "../components/ProfileScore";
import ProfileViews from "../components/ProfileViews";
import ResumeVisitors from "../components/ResumeVisitors";
import PersonalityReport from "../components/PersonalityReport";

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
              <ProfileViews />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full text-3xl lg:flex-wrap mq750:gap-[20px]">
          <ResumeVisitors />
          <PersonalityReport />
          </div>
        </section>
      </main>
    </div>
  );
};

export default JobSeekerDashboard;
