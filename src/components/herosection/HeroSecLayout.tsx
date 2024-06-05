import SignupBanner from "./SignupBanner";
import SignupForm from "./SignupForm";

export default function HeroSecLayout() {
  return (
    <div className="maincon py-10">
      <div className="lg:flex flex-row container mx-auto p-4">
        <div className="flex-1">
          <SignupBanner />
        </div>
        <div className="flex-1">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
