import React from "react";

const Cookies = () => {
  if (
    localStorage.getItem("PruthatekInfoCookie") === null ||
    localStorage.getItem("PruthatekInfoCookie") === "true"
  ) {
    localStorage.setItem("PruthatekInfoCookie", "true");

    return (
      <div
        className="fixed bottom-0 left-0 w-full py-3 px-10 bg-white dark:bg-[#101010] z-50 flex flex-col lg:flex-row items-center justify-between origin-bottom transition-all duration-300 shadow-[0px_4px_14px_0px_#00000040]"
        id="cookiesContainer"
      >
        <div className="mb-4 lg:mb-0">
          <p className="text-justify lg:text-left">
            This website uses cookies to improve your experience. We'll assume
            you're ok with this, but you can opt-out if you wish.
          </p>
        </div>
        <div className="flex items-center justify-between w-full lg:w-fit lg:justify-start gap-4">
          <div
            className="bg-gradient-to-r from-[#f05225] to-[#eea820] p-1 px-3 rounded-lg text-white cursor-pointer"
            onClick={() => {
              document
                .getElementById("cookiesContainer")
                .classList.add("scale-y-0", "opacity-0");
              localStorage.setItem("PruthatekInfoCookie", "false");
            }}
          >
            <p>Accept All</p>
          </div>
          <div
            className="bg-gradient-to-r from-[#f05225] to-[#eea820] p-[1px] rounded-lg cursor-pointer"
            onClick={() => {
              document
                .getElementById("cookiesContainer")
                .classList.add("scale-y-0", "opacity-0");
              localStorage.setItem("PruthatekInfoCookie", "false");
            }}
          >
            <div className="bg-white dark:bg-[#101010] rounded-lg p-1 px-3">
              <p className="text-black dark:text-white">Decline All</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Cookies;
