import Image from "next/image";

export function Footer() {
  // return (
  //   <footer className="flex h-fit min-h-[24rem] w-full flex-col items-center justify-around bg-black px-24 sm:flex-row">
  //     <div className="flex h-full w-1/4 flex-col gap-y-4 p-8 pt-16">
  //       <h2 className="text-2xl font-semibold uppercase text-white">Castle</h2>
  //       <h3 className="text-base font-medium text-gray-400">
  //         Powered by Chess.com&#39;s API
  //       </h3>
  //       <p className="text-sm font-medium leading-6 text-gray-500">
  //         This website is a personal project using Chess.com API. Castle
  //         isn&#39;t endorsed by Chess.com and doesn&#39;t reflect the views or
  //         opinions of Chess.com or anyone officially involved in producing or
  //         managing Chess.com.
  //       </p>
  //     </div>
  //     <div className="flex h-full w-1/4 flex-col gap-y-4 p-8 pt-16">
  //       <h2 className="text-2xl font-semibold uppercase text-white">Contact</h2>
  //       <h3 className="text-base font-medium text-gray-400">
  //         kiyuen88ec@gmail.com
  //       </h3>
  //     </div>
  //     <div className="flex h-full w-1/4 flex-col gap-y-4 p-8 pt-16">
  //       <h2 className="text-2xl font-semibold uppercase text-white">Socials</h2>
  //       <a
  //         className="group flex items-center gap-x-2"
  //         target="_blank"
  //         href="https://github.com/eric-k-chu"
  //       >
  //         <Image
  //           src="/icons/github.svg"
  //           alt="github icon"
  //           width={24}
  //           height={24}
  //         />
  //         <h3 className="text-base font-medium text-gray-400 group-hover:text-white">
  //           GitHub
  //         </h3>
  //       </a>
  //       <a
  //         className="group flex items-center gap-x-2"
  //         target="_blank"
  //         href="https://www.linkedin.com/in/eric-k-chu/"
  //       >
  //         <Image
  //           src="/icons/linkedin.svg"
  //           alt="linkedin icon"
  //           width={24}
  //           height={24}
  //         />
  //         <h3 className="text-base font-medium text-gray-400 group-hover:text-white">
  //           LinkedIn
  //         </h3>
  //       </a>
  //     </div>
  //   </footer>
  // );
  return (
    <footer className="flex w-full flex-col">
      <div className="bg-black pb-16 pt-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 p-8 md:flex-row md:justify-around">
          <div className="flex w-full flex-col gap-y-4 border-b-2 border-b-green-700 pb-4 md:max-w-[254px]">
            <h2 className="text-2xl font-semibold uppercase text-white">
              Castle
            </h2>
            <h3 className="text-base font-medium text-gray-400">
              Powered by Chess.com&#39;s API
            </h3>
            <p className="text-sm font-medium leading-6 text-gray-500">
              This website is a personal project using Chess.com API. Castle
              isn&#39;t endorsed by Chess.com and doesn&#39;t reflect the views
              or opinions of Chess.com or anyone officially involved in
              producing or managing Chess.com.
            </p>
          </div>
          <div className="flex w-full flex-col gap-y-4 border-b-2 border-b-green-700 pb-4 md:max-w-[254px]">
            <h2 className="text-2xl font-semibold uppercase text-white">
              Contact
            </h2>
            <h3 className="text-base font-medium text-gray-400">
              kiyuen88ec@gmail.com
            </h3>
          </div>
          <div className="flex w-full flex-col gap-y-4 border-b-2 border-b-green-700 pb-4 md:max-w-[254px]">
            <h2 className="text-2xl font-semibold uppercase text-white">
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
      </div>
    </footer>
  );
}
