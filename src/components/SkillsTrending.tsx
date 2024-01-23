import { FunctionComponent } from "react";

const SkillsTrending: FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border min-w-[219px] max-w-full text-sm">
      <div className="self-stretch rounded-3xs bg-colors-white-100 flex flex-col items-center justify-start p-[30px] box-border gap-[6px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="w-[326px] relative rounded-3xs bg-colors-white-100 h-[360px] hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-3xl">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <h3 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-lg">
              Skills Trending
            </h3>
            <img
              className="h-6 w-6 relative object-cover z-[1]"
              loading="eager"
              alt=""
              src="/icons--more--horizontal@2x.png"
            />
          </div>
          <div className="w-[200px] relative text-sm leading-[20px] inline-block opacity-[0.4] mix-blend-normal z-[1]">
            This will help job seekers to improve on daily basis
            according to trend.
          </div>
        </div>
        <div className="self-stretch h-[41px] flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[200px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[20px] z-[1]">
              Angular
            </div>
            <div className="relative leading-[20px] text-orange text-right z-[1]">
              65,376
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start relative">
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/elements--line--gorizontal.svg"
            />
            <img
              className="h-2 w-[200px] relative z-[2]"
              loading="eager"
              alt=""
              src="/elements--line--gorizontal-1.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-[41px] flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[200px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[20px] z-[1]">Java</div>
            <div className="relative leading-[20px] text-mediumblue text-right z-[1]">
              12,109
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start relative">
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/elements--line--gorizontal-2.svg"
            />
            <img
              className="h-2 w-[150px] relative z-[2]"
              loading="eager"
              alt=""
              src="/elements--line--gorizontal-3.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-[41px] flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[200px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[20px] z-[1]">PHP</div>
            <div className="relative leading-[20px] text-colors-action-info text-right z-[1]">
              132,645
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-2 pl-0 relative">
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/elements--line--gorizontal-4.svg"
            />
            <img
              className="h-2 w-[230px] relative z-[2]"
              loading="eager"
              alt=""
              src="/elements--line--gorizontal-5.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[200px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[20px] z-[1]">. Net</div>
            <div className="relative leading-[20px] text-orangered text-right z-[1]">
              100,429
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start relative">
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/elements--line--gorizontal-6.svg"
            />
            <img
              className="h-2 w-[170px] relative z-[2]"
              loading="eager"
              alt=""
              src="/elements--line--gorizontal-7.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )

}
export default SkillsTrending;
