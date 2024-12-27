import ImageIcons from "@/utilities/ImageIcons";
import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-[#6772FF] text-white py-10 md:flex-col md:space-y-24">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full overflow-hidden">
              <Image
                src={ImageIcons.USFlag}
                alt="Language"
                className="w-full h-full"
              />
            </span>
            <p className="text-sm font-medium">EN</p>
            <span className="text-white text-xs">▼</span>
          </div>
  
          <div className="lg:order-last lg:mt-0">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.8 19h-3.4v-9h3.4v9zm-1.7-10.2c-1.08 0-1.8-.72-1.8-1.6 0-.9.72-1.6 1.8-1.6 1.08 0 1.8.72 1.8 1.6 0 .9-.72 1.6-1.8 1.6zm13.8 10.2h-3.4v-4.8c0-1.2-.02-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v4.9h-3.4v-9h3.2v1.2h.05c.45-.8 1.55-1.6 3.2-1.6 3.42 0 4.1 2.3 4.1 5.3v4.1z" />
              </svg>
            </a>
          </div>
  
        </div>
          <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <a
              href="#"
              className="text-sm text-white hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-white hover:underline"
            >
              Privacy Policy
            </a>
            <div className="mt-6 text-center text-sm">
                <p>© 2024, Inc. All Rights Reserved.</p>
            </div>
          </div>
      </footer>
    );
  }
  