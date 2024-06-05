import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "./signinSchema";

type FormData = z.infer<typeof signUpSchema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <div className="py-16 px-2 md:px-10 rounded-xl shadow-2xl my-2 bg-green">
      <div className="mb-4 text-center text-background">
        <h1 className="text-3xl mb-4 font-bold">Sign up Today</h1>
        <h1 className="text-xl font-semibold ">Make your money work for you</h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="text"
            id="email"
            className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
          />
        </div>
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <div className="mb-4">
          <label htmlFor="username">Username</label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
          />
        </div>
        {errors.username && (
          <p className="text-red-600">{errors.username.message}</p>
        )}
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
          />
        </div>
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <div className="mb-1">
          <label htmlFor="confirmpass">Confirm Password</label>
          <input
            {...register("confirmpass")}
            type="confirmpass"
            id="confirmpass"
            className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
          />
        </div>
        {errors.confirmpass && (
          <p className="text-red-600">{errors.confirmpass.message}</p>
        )}
        <div className="flex gap-x-6 items-center justify-start">
          <div>
            <input
              type="checkbox"
              className="border border-gray-200 px-2 py-1 w-full accent-green"
            />
          </div>
          <span>
            I accept{" "}
            <a href="#" className="font-semibold underline">
              Terms and conditions
            </a>
          </span>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full font-bold bg-buttons text-center rounded-lg py-3"
          >
            Sign up
          </button>
        </div>
      </form>
      <div className="mt-2">
        <h6 className="text-center">
          Already have an account?{" "}
          <span>
            <a href="#" className="font-bold">
              <b>Login</b>
            </a>
          </span>
        </h6>
      </div>
    </div>
  );
}
