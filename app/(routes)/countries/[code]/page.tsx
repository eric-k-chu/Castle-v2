import { ErrorMessage } from "@/_components";
import { getCountries } from "@/_utils";
import Image from "next/image";

type Props = {
  params: { code: string };
};

export default async function CountryPage({ params }: Props) {
  const countryCode = params.code.toUpperCase();
  const country = getCountries().find((n) => n.code === countryCode);

  if (!country) {
    return <ErrorMessage message={`${countryCode} does not exist.`} />;
  }

  return (
    <h1 className="flex items-center space-x-4 text-xl font-semibold uppercase sm:text-2xl md:text-4xl">
      <span className="mr-1 font-light text-primary-1">
        &#40;{country?.code}&#41;
      </span>
      {country?.name}
      <Image
        src={country?.src}
        alt={`${countryCode} flag`}
        width={0}
        height={0}
        className="inline h-auto w-8 rounded-sm border border-neutral-700 sm:w-10"
      />
    </h1>
  );
}
