import Image from "next/image";
import { Inter } from "next/font/google";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen ${inter.className}`}>
      {/* Left Section with Login */}
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-96">
          <div className="mb-4 mt-16 ml-32">
            <Image
              src="/thesilla.png"
              alt="logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <div className="mb-4 ml-32">
            <Image
              src="/thesillaname.png"
              alt="logo"
              width={180}
              height={37}
              priority
            />
          </div>
          
          <h2 className="mb-3 text-2xl text-black font-semibold ml-20 mt-20">Login</h2>
          <form className="flex flex-col gap-4 ml-16">
            {/* Email Input */}
            <div className="relative ml-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiOutlineMail className="h-5 w-5 text-orange-500" />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-80 pl-10 text-black border border-orange-500 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-orange-500"
              />
            </div>
            {/* Password Input */}
            <div className="relative ml-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiOutlineLockClosed className="h-5 w-5 text-orange-500" />
              </span>
              <input
                type="password"
                placeholder="Password"
                className=" w-80 pl-10 text-black border border-orange-500 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-80 ml-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors focus:outline-none "
            >
              Login
            </button>
            <a href="#" className=" mt-4 text-orange-500 hover:underline text-center">
              Forgot Password?
            </a>
          </form>
          <div className="mt-4 flex flex-col gap-2 items-center">
            <p className="text-sm">Or sign in with</p>
            <div className="flex gap-2">
              <button className="ml-6 px-4 py-2 border border-gray-300 text-gray-500 hover:text-white rounded-lg hover:bg-orange-600 transition-colors focus:outline-none flex items-center">
                <FaGoogle className="mr-2 text-red-500" /> Google
              </button>
              <button className=" px-4 py-2 border border-gray-300 text-gray-500 hover:text-white rounded-lg hover:bg-orange-600 transition-colors focus:outline-none flex items-center">
                <FaFacebook className="mr-2 text-blue-500" /> Facebook
              </button>
            </div>
          </div>
          <p className="mt-32 text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <a href="#" className="text-orange-500 hover:underline mr-4" >
              Sign Up
            </a>
          </p>
          <p className="mr-8 text-sm text-gray-500 text-center">
            Powered  by Lim, an
          </p>
        </div>
      </div>

      {/* Right Section with Background Image */}
      <div
  className="flex-1 bg-cover bg-center hidden lg:block"
  style={{
    backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(223, 102, 0, 0.8)), url('/students.jpg')",
  }}
></div>
    </main>
  );
}
