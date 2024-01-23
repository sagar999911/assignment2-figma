import { FunctionComponent } from "react";

const ProfileScore: FunctionComponent = () => {
  return (
    <div className="w-[326px] rounded-3xs bg-colors-white-100 flex flex-col items-center justify-start p-[30px] box-border gap-[35px] max-w-full mq450:gap-[17px] mq450:pt-5 mq450:pb-5 mq450:box-border">
      <div className="w-[326px] relative rounded-3xs bg-colors-white-100 h-[360px] hidden max-w-full" />
      <div className="self-stretch flex flex-col items-center justify-start gap-[21px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <h3 className="m-0 h-[29px] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-lg">
            Profile Score
          </h3>
          <img
            className="h-6 w-6 relative object-cover opacity-[0.2] z-[1]"
            loading="eager"
            alt=""
            src="/icons--more--horizontal-2@2x.png"
          />
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-center py-[83px] pr-[77px] pl-[74px] relative z-[1] text-center text-colors-white-100">
          <img
            className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden"
            loading="eager"
            alt=""
            src="/group.svg"
          />
          <div className="h-[29px] relative font-medium inline-block z-[1] mq450:text-lg">
            70%
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0 text-sm">
        <div className="flex flex-row items-start justify-start gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img
              className="h-3.5 w-3.5 relative z-[1]"
              alt=""
              src="/color.svg"
            />
            <div className="relative leading-[20px] z-[1]">
              Bullet Proof
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img
              className="h-3.5 w-3.5 relative z-[1]"
              alt=""
              src="/color-1.svg"
            />
            <div className="relative leading-[20px] z-[1]">
              Improvement Area
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileScore;
