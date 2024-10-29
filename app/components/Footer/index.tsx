import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black py-20 text-white">
      <div className="flex flex-col gap-5 md:flex-row md:gap-0 w-[95%] max-w-[75rem] mx-auto mb-20 text-[#e7e8ec99]">
        <div className="flex flex-col basis-full gap-4 px-4">
          <p className="font-[600] text-white">Product</p>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Login
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              University
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Integrations
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Pricing
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Changelog
            </Link>
          </div>
        </div>
        <div className="flex flex-col basis-full gap-4 px-4">
          <p className="font-[600] text-white">Blog</p>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              AI for Sales Prospecting
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Why good CRM data matters
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Google Maps lead generation in 5 easy steps
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Outbound Sales Automation
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              AI Lead Generation
            </Link>
          </div>
        </div>
        <div className="flex flex-col basis-full gap-4 px-4">
          <p className="font-[600] text-white">Tools</p>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Email Finder
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Headcount Finder
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Credits Calculator
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Chrome extension
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Lookup WHOIS Info
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              CPM Calculator
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Margin Calculator
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Headcount Directory
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Glossary
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Dossier
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Job Board
            </Link>
          </div>
        </div>
        <div className="flex flex-col basis-full gap-4 px-4">
          <p className="font-[600] text-white">Support</p>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Send us an email
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Join Slack
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              FAQ
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Status
            </Link>
          </div>
        </div>
        <div className="flex flex-col basis-full gap-4 px-4">
          <p className="font-[600] text-white">Company</p>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Customer Stories
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Wall of Love
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Careers
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Creators Program
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Integrate with Clay
            </Link>
          </div>
        </div>
        <div className="flex flex-col basis-full gap-4 px-4">
          <p className="font-[600] text-white">Legal</p>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Terms of Service
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Do not sell my data
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-white hover:underline">
              Cookie preferences
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[95%] max-w-[75rem] mx-auto">
        <Link href="/" className="flex gap-1 mb-4">
          <Image src="/clay-logo.png" width={40} height={25} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 70 38"
            fill="none"
            className="w-[46px]"
          >
            <path
              d="M12.0515 29.4999C14.0013 29.4425 15.8984 28.8532 17.5375 27.7957C19.1766 26.7382 20.4955 25.2528 21.3515 23.4999L16.4515 21.4999C16.0818 22.4372 15.4322 23.2376 14.5912 23.7924C13.7502 24.3471 12.7586 24.6291 11.7515 24.5999C8.2515 24.8999 6.1515 22.4999 5.9515 19.2999C5.7515 16.0999 7.5515 13.3999 11.0515 13.1999C12.0423 13.0674 13.0504 13.2233 13.9549 13.649C14.8594 14.0746 15.622 14.752 16.1515 15.5999L20.6515 12.8999C19.5738 11.3073 18.0831 10.0378 16.3392 9.22751C14.5952 8.4172 12.6637 8.09655 10.7515 8.29993C4.0515 8.69993 0.151497 13.6999 0.551497 19.5999C0.951497 25.4999 5.4515 29.8999 12.0515 29.4999Z"
              fill="currentColor"
            ></path>
            <path
              d="M21.9531 30.7001H27.2531L27.6531 0.100098H22.3531L21.9531 30.7001Z"
              fill="currentColor"
            ></path>
            <path
              d="M42.4557 27.6C40.9898 29.1808 38.9999 30.1758 36.8557 30.4C32.8557 30.7 29.8557 28.8 29.5557 24.9C29.2557 21 33.0557 18.3 37.5557 18L41.6557 17.6V16.9C41.5557 15 40.0557 14 38.0557 14.1C37.1818 14.1679 36.3496 14.5012 35.6704 15.0552C34.9913 15.6093 34.4977 16.3576 34.2557 17.2L29.8557 15.4C30.7557 11.8 33.9557 9.60003 37.6557 9.30003C41.3557 9.00003 46.4557 11.5 46.8557 16.5L47.2557 22V22.8C47.2557 23.3 47.3557 23.9 47.3557 24.1C47.3557 24.3 47.4557 24.9 47.8557 25C48.0862 25.0517 48.3252 25.0517 48.5557 25L49.5557 24.6L50.9557 28.5C49.931 29.346 48.6779 29.8681 47.3557 30C46.3826 30.1215 45.3953 29.9482 44.5218 29.5025C43.6482 29.0568 42.9285 28.3592 42.4557 27.5V27.6ZM34.9557 24.4C35.0557 25.7 36.3557 26.1 37.6557 26C38.9557 25.9 42.1557 24.1 41.9557 21.7L37.8557 22C36.2557 22.1 34.8557 22.8 34.9557 24.4Z"
              fill="currentColor"
            ></path>
            <path
              d="M63.7516 9.5L57.2516 22.5L52.6516 8.5L46.8516 8L54.0516 29L50.1516 36.8L55.5516 37.3L69.4516 9.9L63.7516 9.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        <p>
          © Clay 2024 / Uplevel your data enrichment. Scale personalized
          outreach.
        </p>
      </div>
    </div>
  );
};

export default Footer;
