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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            eligendi quaerat. Nemo sapiente ducimus voluptates earum obcaecati
            molestias fuga eaque eum perferendis enim quod exercitationem amet,
            officia possimus debitis{" "}
            <span className="text-white underline">
              <a href="/posts">See what is new</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
