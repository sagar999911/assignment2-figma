import { FunctionComponent } from "react";

const ResumeVisitors: FunctionComponent = () => {
  return (
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
  )
}
export default ResumeVisitors;
