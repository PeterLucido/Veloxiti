import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent py-8">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white items-center text-center px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo */}
        <div className="flex justify-center">
          <Image
            src="/VELOXITI_V.png"
            alt="VELOXITI Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Middle Section: Address */}
        <div>
          <a href="https://www.google.com/maps/place/241+Hanley+Industrial+Ct,+St.+Louis,+MO+63144" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 text-1xl hover:underline">
            241 Hanley Industrial Ct.
            <br />
            St. Louis, MO 63144
          </a>
        </div>

        {/* Right Section: Contact Info */}
        <div>
          <a href="mailto:Info@veloxiti.io" 
            className="text-gray-300 text-1xl block hover:underline">
            Info@veloxiti.io
          </a>
          <a href="tel:+16367952482" 
            className="text-gray-300 text-1xl hover:underline">
            636.795.2482
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2024 VELOXITI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
