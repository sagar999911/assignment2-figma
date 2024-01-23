import { FunctionComponent } from "react";

const ProfileViews: FunctionComponent = () => {
  return (
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
  )
}
export default ProfileViews;
