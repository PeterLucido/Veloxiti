import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LeftPhotoProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

const LeftPhoto = ({ title, description, buttonText, buttonLink, imageSrc, imageAlt, imageHeight, imageWidth }: LeftPhotoProps) => {
  return (
    <section className="flex items-center justify-between h-96 mx-auto p-8 bg-black bg-opacity-80 text-white rounded-xl shadow-lg border border-gray-700 mt-4 w-11/12">
      <div className="w-1/2 flex justify-start">
        <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} className="rounded-lg" />
      </div>
      <div className="w-1/2 pl-8 text-right">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
        <Link href={buttonLink} legacyBehavior>
          <a className="px-4 py-2 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50" style={{ backgroundColor: '#29ABE2', borderColor: '#29ABE2' }}>
            {buttonText}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default LeftPhoto;
