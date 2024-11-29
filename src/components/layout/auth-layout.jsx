import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container">
        <div className="mx-auto grid w-full grid-cols-1 overflow-hidden rounded-lg bg-white shadow-lg md:grid-cols-2 lg:w-[80%]">
          {/* left */}
          <div className="flex h-auto flex-1 items-center justify-center bg-secondary py-0 lg:py-16">
            <figure>
              <Image
                src={"/jcb-login-side.png"}
                width={500}
                height={500}
                alt="jcb"
              />
            </figure>
          </div>

          {/* right */}
          <div className="flex flex-1 items-center justify-center pb-8 md:justify-start">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
