import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=" "
            src="/images/login.jfif"
            width={50}
            height={50}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <Image width={50} height={40} src={"/images/logo.png"} alt=" "/>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Beaginner Tech Stack
            </h2>

            <p className="mt-4 leading-relaxed text-white/90"></p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16  lg:hidden">
             

              <h2 className="mt-8 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                Welcome to Beaginner Tech Stack
              </h2>
                <p className="mt-4 leading-relaxed text-white/90"></p>
            </div>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}