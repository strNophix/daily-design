import React from "react";
import clsx from "clsx";

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={clsx(
          "border border-[#363636] bg-transparent rounded-md p-3 focus:border-[#6b8dd1]  w-full focus:outline-none shadow-sm",
          props.className
        )}
      />
    </div>
  );
};

const SpanLink: React.FC<React.HTMLProps<HTMLHyperlinkElementUtils>> = (
  props
) => {
  return (
    <a className="text-[#6b8dd1] inline cursor-pointer">{props.children}</a>
  );
};

const Day1: React.FC<any> = () => {
  return (
    <main className="flex min-h-screen text-gray-200">
      {/* Left section of sign up page */}
      <div className="hidden md:block md:w-80 bg-[#131313] h-screen relative">
        <div className="absolute top-4 left-4">
          <div className="h-10 w-10 bg-[#454545] rounded-md" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="bg-red-200 w-full h-96 opacity-10" />
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="p-11 text-center font-semibold space-y-2 text-xl">
            <p className="text-4xl">67%</p>
            <p>time saved in total compared to projects not using Hub.</p>
            <p>- fintory.com</p>
          </div>
        </div>
      </div>
      {/* Form section of sign up page */}
      <div className="flex-1 bg-[#242424] md:border-l md:border-[#363636]">
        <div className="mx-auto space-y-14 w-full p-2 md:w-1/2 md:mt-20">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">Set up your Hub account.</h1>
            <p>
              You have been invited by Fintory on Hub to start collaborating.
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-8">
                <div className="space-y-3">
                  <Input
                    type="text"
                    name="customerName"
                    placeholder="Full name"
                  />
                  <Input
                    type="email"
                    name="customerEmail"
                    placeholder="Email"
                  />
                  <Input
                    type="password"
                    name="customerPassword"
                    placeholder="Password"
                  />
                  <Input
                    type="password"
                    name="customerPasswordRepeat"
                    placeholder="Confirm Password"
                  />

                  <Input
                    type="text"
                    name="customerCompany"
                    placeholder="Company Name"
                  />
                  <Input type="text" name="customerRole" placeholder="Role" />
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <Input
                    type="checkbox"
                    name="confirm"
                    className="form-check-input appearance-none checked:bg-[#6b8dd1] p-[.6rem]"
                  />
                  <p>
                    I agree with Hub's{" "}
                    <SpanLink>Terms, Privacy Policy</SpanLink> and{" "}
                    <SpanLink>E-Sign</SpanLink> content
                  </p>
                </div>
                <div>
                  <button
                    disabled
                    className="rounded-md px-5 py-3 bg-[#6b8dd1] disabled:bg-[#344262] disabled:text-[#5b6370]"
                  >
                    Continue
                  </button>
                </div>
                <hr className="border-t border-[#363636]" />
                <div className="pb-8 md:pb-0">
                  <p>
                    Already have an account? <SpanLink>Sign in →</SpanLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Day1;
