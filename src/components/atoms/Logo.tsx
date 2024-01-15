import React from "react";
import Link from "next/link";
import Image from "next/image";

// scss import
import styles from "./styles/Logo.module.scss";

// props type
export type LogoProps = {
  id: number;
  link: string;
  size?: "small" | "medium" | "large";
  bgColor?: "black" | "white";
};

const Logo = ({ id, link, size = "medium", bgColor = "black" }: LogoProps) => {
  const width = size === "small" ? 100 : size === "medium" ? 250 : 500;
  const height = width * (2 / 5);

  const imagePath =
    bgColor === "black" ? "/images/logo-black.png" : "/images/logo-white.png";

  return (
    <Link href={link} className={styles.logo_link}>
      <Image
        src={imagePath}
        alt="logo"
        width={width}
        height={height}
        className={styles.logo_img}
      />
    </Link>
  );
};

export default Logo;
