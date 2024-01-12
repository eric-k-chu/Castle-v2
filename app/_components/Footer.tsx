import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neutral-900 py-16 ">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 p-8 md:flex-row md:justify-around">
        <div className="w-full space-y-4 border-b-2 border-b-green-700 pb-4 md:max-w-[254px]">
          <h2
            className="text-2xl font-semibold uppercase text-white"
            aria-label="Castle"
          >
            Castle
          </h2>
          <h3 className="text-base font-medium text-gray-400">
            Powered by Chess.com&apos;s API
          </h3>
          <p className="text-sm font-medium leading-6 text-gray-500">
            This website is a personal project using Chess.com API. Castle
            isn&apos;t endorsed by Chess.com and doesn&apos;t reflect the views
            or opinions of Chess.com or anyone officially involved in producing
            or managing Chess.com.
          </p>
        </div>
        <div className="w-full space-y-4 border-b-2 border-b-green-700 pb-4 md:max-w-[254px]">
          <h2
            className="text-2xl font-semibold uppercase text-white"
            aria-label="Contact"
          >
            Contact
          </h2>
          <h3 className="text-base font-medium text-gray-400">
            Kiyuen88ec@gmail.com
          </h3>
        </div>
        <div className="w-full space-y-4 border-b-2 border-b-green-700 pb-4 md:max-w-[254px]">
          <h2
            className="text-2xl font-semibold uppercase text-white"
            aria-label="Socials"
          >
            Socials
          </h2>
          <div className="flex flex-row gap-4 md:flex-col">
            <a
              className="group flex items-center gap-x-2"
              target="_blank"
              href="https://github.com/eric-k-chu"
            >
              <Image
                src="/icons/github.svg"
                alt="github icon"
                width={24}
                height={24}
              />
              <h3 className="text-base font-medium text-gray-400 group-hover:text-white">
                GitHub
              </h3>
            </a>
            <a
              className="group flex items-center gap-x-2"
              target="_blank"
              href="https://www.linkedin.com/in/eric-k-chu/"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin icon"
                width={24}
                height={24}
              />
              <h3 className="text-base font-medium text-gray-400 group-hover:text-white">
                LinkedIn
              </h3>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
