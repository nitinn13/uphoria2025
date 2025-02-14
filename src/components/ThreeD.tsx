import React from "react";
import image3d from '../assets/image3d.jpg';

type FloatingCircleLinkProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
};

type SizeClasses = {
  [key in "sm" | "md" | "lg"]: string;
};

const FloatingCircleLink = ({
  href = "#",
  size = "md",
  children,
  imgSrc = image3d, // Default to image3d
  imgAlt = "Icon",
}: FloatingCircleLinkProps) => {
  const sizeClasses: SizeClasses = {
    sm: "w-13 h-13",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const actualSizeClass = sizeClasses[size];

  return (
    <div className="relative">
      <a
        href={href}
        target="_blank"
        className={`
          fixed
          bottom-8
          right-8
          ${actualSizeClass}
          rounded-full
          flex
          items-center
          justify-center
          shadow-lg
          hover:bg-pink-400
          hover:scale-110
          transition-all
          duration-300
          cursor-pointer
          animate-bounce
          overflow-hidden
        `}
      >
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
      </a>
    </div>
  );
};

export default FloatingCircleLink;
