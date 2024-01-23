import { FunctionComponent } from "react";

const PersonalityReport: FunctionComponent = () => {
  return (
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
  )
}
export default PersonalityReport;
