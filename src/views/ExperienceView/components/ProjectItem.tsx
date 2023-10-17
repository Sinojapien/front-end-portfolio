import React from "react";

import Image from "next/image";

import { items } from "../constants";
import ChipList from "@/components/ChipList";

const ProjectItem = ({
  src,
  alt,
  href,
  title,
  duration,
  objective,
  description,
  skills,
}: (typeof items)[number]) => (
  <div className="w-80 whitespace-break-spaces">
    <a
      className={`group relative block mb-4 rounded-2xl shadow-xl overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-gray-700/20 after:to-gray-700/2 after:to-45%`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={`w-full aspect-square object-cover contrast-[1.1] group-hover:scale-110 transition-[transform] duration-300`}
        src={src}
        alt={alt}
        width={128}
        height={128}
        quality={75}
        sizes="(max-width: 1280px) 640px, (max-width: 1024px) 512px, (max-width: 768px) 384px, (max-width: 640px) 320px, 320px"
      />
    </a>
    <div className="mb-2 text-2xl font-bold">{title}</div>
    {duration && (
      <div className="mb-1 text-lg font-semi-bold">📅 {duration}</div>
    )}
    <div className="mb-1 text-gray-700">{objective}</div>
    {description && (
      <>
        <hr className="my-3" />
        <div className="text-lg font-semi-bold">Responsibility</div>
        <div className="text-gray-700">{description}</div>
      </>
    )}
    {skills && (
      <ChipList
        className="py-3"
        items={skills.map((item) => ({ label: item }))}
      />
    )}
  </div>
);

export default ProjectItem;
