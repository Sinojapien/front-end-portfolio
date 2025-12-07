import React, { useCallback, useRef } from "react";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Noto_Sans } from "next/font/google";
import { NextSeo, type NextSeoProps } from "next-seo";

import IntroductionView from "@/views/IntroductionView";
import AboutView from "@/views/AboutView";
import ExperienceView from "@/views/ExperienceView";
import ContactView from "@/views/ContactView";

import { items } from "@/views/ExperienceView/constants";

const font = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const getServerSideProps: GetServerSideProps<{
  seo: NextSeoProps;
}> = async ({ req, res }) => {
  res.setHeader("cache-control", "public, max-age=86400");

  const CANONICAL_URL = `${
    process.env.NODE_ENV === "development" ? "http://" : "https://"
  }${req.headers.host}`;
  const seoTitle = `Portfolio - ${process.env.NEXT_PUBLIC_PORTFOLIO_NAME_ALT}`;
  const seoDescription =
    "Hi, This is Tim. A Front-End Software Developer & UI/UX Designer.";

  return {
    props: {
      seo: {
        title: seoTitle,
        description: seoDescription,
        canonical: CANONICAL_URL,
        openGraph: {
          url: CANONICAL_URL,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: items[0].src,
              alt: items[0].alt,
              type: "image/png",
              width: 256,
              height: 256,
            },
            {
              url: items[1].src,
              alt: items[1].alt,
              type: "image/png",
              width: 1920,
            },
            {
              url: items[2].src,
              alt: items[2].alt,
              type: "image/jpeg",
            },
            {
              url: items[3].src,
              alt: items[3].alt,
              type: "image/png",
            },
          ],
        },
        twitter: {
          //TODO:
        },
      },
    },
  };
};

const Page = ({
  seo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const sectionRefs = useRef<
    Record<"about" | "experience" | "contact", HTMLElement | null>
  >({
    about: null,
    experience: null,
    contact: null,
  });

  const onDownload = useCallback(async () => {
    const res = await fetch("/api/download-resume", {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    });
    const content = await res.blob();
    const contentUrl = URL.createObjectURL(content);
    const a = document.createElement("a");
    a.href = contentUrl;
    a.download = "Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    // window.open(contentUrl, "_blank", "noopener noreferrer");
    URL.revokeObjectURL(contentUrl);
  }, []);

  const onAbout = useCallback(() => {
    window.scroll({
      top: sectionRefs.current.about?.offsetTop,
      behavior: "smooth",
    });
  }, [sectionRefs]);

  const onExperience = useCallback(() => {
    window.scroll({
      top: sectionRefs.current.experience?.offsetTop,
      behavior: "smooth",
    });
  }, [sectionRefs]);

  const onContact = useCallback(() => {
    window.scroll({
      top: sectionRefs.current.contact?.offsetTop,
      behavior: "smooth",
    });
  }, [sectionRefs]);

  return (
    <>
      <NextSeo {...seo} />
      <main className={`${font.className}`}>
        <IntroductionView
          onDownload={onDownload}
          onAbout={onAbout}
          onExperience={onExperience}
          onContact={onContact}
        />
        <AboutView
          ref={(el) => {
            sectionRefs.current = { ...sectionRefs.current, about: el };
          }}
        />
        <ExperienceView
          ref={(el) => {
            sectionRefs.current = { ...sectionRefs.current, experience: el };
          }}
        />
        <ContactView
          ref={(el) => {
            sectionRefs.current = { ...sectionRefs.current, contact: el };
          }}
        />
      </main>
    </>
  );
};

export default Page;
