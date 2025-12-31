import Link from "next/link";
import Image from "next/image";

interface TechStackIconProps {
  href: string;
  imgSrc: string;
  altText: string;
}

export default function TechStackIcon({ href, imgSrc, altText }: TechStackIconProps) {
    return (
      <Link href={href} target="_blank" className="h-[60px] flex items-center justify-center rounded-xl shadow-md hover:shadow-xl active:shadow-none">
	      <Image src={imgSrc} width={60} height={60} alt={altText} className="p-2"/>
      </Link>
    )
}