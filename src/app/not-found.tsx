import HomeFooter from "@/components/HomeFooter";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function UnderConstruction() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 pb-12 pt-28">
      {/* Illustration placeholder */}
      <div className="mb-8 flex justify-center">
        {/* Replace with your SVG / image */}
        <div className="w-full md:w-[520px] h-full rounded-2xl flex items-center justify-center">
          <Image 
            src={"/illustration.jpg"}
            alt="illustration"
            width={3000}
            height={3000}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Heading + subtext */}
      <div className="max-w-4xl text-center">
        <h1 className="text-2xl sm:text-5xl font-semibold text-gray-900 mb-3">
          We Are Updating Our Clinical Details
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-6">
          Thank you for exploring ShardaCare HealthCity. We are currently
          refreshing this section to ensure it reflects our latest treatment
          protocols, specialist profiles, and facilities for international
          patients.
        </p>
      </div>

      {/* Bullet list */}
      <div className="mt-8">
        <p className="text-lg md:text-xl">
          While we finalize this page, our team is ready to assist you with:
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 text-sm sm:text-base">
          <ListItem text="Detailed Doctor Profiles & CVs" />
          <ListItem text="Treatment Cost Estimates" />
          <ListItem text="Visa Assistance Letters" />
          <ListItem text="Video Consultations" />
        </div>
      </div>

      {/* Call-to-action text */}
      <div className="mt-12 text-center max-w-xl">
        <p className="text-sm sm:text-xl text-black">
          Don’t wait for the website update.
        </p>
        <p className="text-xs sm:text-xl text-black">
          Get the specific information you need right now.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link href={"/international-patients-2"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#34ACE1] to-[#5BC7F7] px-6 py-2 text-base font-medium text-white hover:bg-sky-600 transition">
          <span>
            <svg
              width="34"
              height="34"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.6729 36.4217C28.1916 36.4217 26.1109 35.886 22.995 34.1452C19.206 32.0204 16.2753 30.0588 12.5069 26.3001C8.87348 22.669 7.10535 20.3181 4.63073 15.8151C1.83511 10.7307 2.31167 8.06564 2.84438 6.9266C3.47878 5.56522 4.41521 4.75097 5.62558 3.94279C6.31307 3.49236 7.0406 3.10624 7.79894 2.78933C7.87483 2.7567 7.9454 2.72558 8.00839 2.69751C8.38402 2.52828 8.95316 2.27255 9.67407 2.54573C10.1552 2.72634 10.5847 3.0959 11.257 3.7599C12.6359 5.11977 14.5201 8.14836 15.2152 9.63571C15.6819 10.6382 15.9908 11.2999 15.9915 12.042C15.9915 12.9109 15.5544 13.581 15.024 14.3042C14.9246 14.44 14.8259 14.5698 14.7303 14.6957C14.1528 15.4546 14.0261 15.6739 14.1096 16.0655C14.2788 16.8524 15.5408 19.195 17.6147 21.2644C19.6887 23.3338 21.9637 24.5161 22.7537 24.6845C23.1619 24.7718 23.3858 24.6398 24.1689 24.0418C24.2813 23.956 24.3966 23.8673 24.5173 23.7785C25.3262 23.1767 25.9652 22.751 26.8135 22.751H26.8181C27.5565 22.751 28.1886 23.0712 29.2358 23.5994C30.6017 24.2884 33.7214 26.1484 35.0896 27.5287C35.7551 28.1996 36.1262 28.6276 36.3076 29.1079C36.5808 29.8311 36.3235 30.398 36.1558 30.7774C36.1277 30.8404 36.0966 30.9094 36.064 30.9861C35.7446 31.7431 35.3562 32.4691 34.9037 33.1549C34.097 34.3615 33.2797 35.2956 31.9153 35.9308C31.2147 36.2622 30.4479 36.4301 29.6729 36.4217Z"
                fill="white"
              />
            </svg>
          </span>
          Request Information Now
        </Link>
        <Link href={"https://api.whatsapp.com/send/?phone=918698968698&text=Hi&type=phone_number&app_absent=0"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-2 text-base font-medium text-white hover:bg-green-600 transition min-w-[293px]">
          <span>
            <Image
              src={"/whatsapp.svg"}
              alt="whatsapp"
              height={34}
              width={34}
            />
          </span>
          Chat on WhatsApp
        </Link>
      </div>

      {/* Response time note */}
      <p className="mt-3 text-sm text-[#4B4B4B]">
        Our team usually responds within 15 minutes.
      </p>

      {/* Back link */}
      <Link
        href={"/international-patients-2"}
        className="mt-8 text-xs sm:text-sm text-[#1E5990] hover:text-sky-600 inline-flex items-center gap-1 border-b border-[#1E5990]"
      >
        <span className="text-base">
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8067 12.4645H7.2759L13.2746 6.46581L11.6721 4.86328L2.9375 13.5979L11.6721 22.3325L13.2746 20.7299L7.2759 14.7312H23.8067V12.4645Z"
              fill="#1E5990"
            />
          </svg>
        </span>
        <span>Return to Home Page</span>
      </Link>
    </section>
  );
}

type ListItemProps = {
  text: string;
};

const ListItem: React.FC<ListItemProps> = ({ text }) => (
  <div className="flex items-start gap-2">
    <span className="mt-1 h-4 w-4 rounded-full bg-white flex items-center justify-center">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM14.144 21.42L22.78 10.624L21.22 9.376L13.856 18.578L8.64 14.232L7.36 15.768L14.144 21.42Z"
          fill="#3BC04D"
        />
      </svg>
    </span>
    <span className="text-gray-700">{text}</span>
  </div>
);


export default function UnderConstructionPageLayout({
}) {
  return (
    <div className="min-h-screen w-screen">
      <HomeHeader />
      <UnderConstruction />
      <HomeFooter />
    </div>
  );
}