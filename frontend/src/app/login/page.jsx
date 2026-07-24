"use client";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/authSlice";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { login } from "@/services/authService";
import { toast } from "react-toastify";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
const router = useRouter();

  
const onSubmit = async (data) => {
  try {
    const response = await login(data);

    dispatch(
      loginSuccess({
        admin: null,
        token: response.token,
      })
    );

    localStorage.setItem("token", response.token);

    toast.success(response.message);

    router.push("/dashboard");
  } catch (error) {
    toast.error(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          CMS Admin Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border p-3"
              {...register("email")}
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded border p-3"
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}