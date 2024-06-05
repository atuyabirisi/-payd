import { TiArrowRightThick } from "react-icons/ti";

export default function SignupBanner() {
  return (
    <div className="flex h-full items-center">
      <div className="flex flex-col  items-center justify-center py-5 md:px-5 text-center h-full">
        <div className="bg-green rounded-xl" style={{ overflow: "hidden" }}>
          <img src="src\assets\image (1).png" alt="signup_banner" />
        </div>
        <div>
          <h1 className="text-3xl py-5 text-green">
            <b>Money & Vibes</b>
          </h1>
          <p className="md:text-xl">
            Payd lets you make your payments magical. Right from payment pages
            to generating invoices, we provide you with the tools to make your
            money easy. We enable you to conveniently access multiple payment
            channels on one platform, powered by licensed payment service
            providers.
            <br />
            <span className="text-white underline flex justify-center">
              <a href="/posts" className="flex gap-x-3 items-end">
                See what is new{" "}
                <div className="flex items-end">
                  <TiArrowRightThick />
                </div>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
