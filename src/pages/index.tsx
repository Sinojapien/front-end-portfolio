import { Noto_Music } from "next/font/google";

import IntroductionView from "@/views/IntroductionView";
import AboutView from "@/views/AboutView";
import ExperienceView from "@/views/ExperienceView";
import ContactView from "@/views/ContactView";
import { useCallback, useRef } from "react";

// TODO: SEO, custom hook, animate on scroll, fix tailwind css bug on Chrome

const font = Noto_Music({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  const sectionRefs = useRef<
    Record<"about" | "experience" | "contact", HTMLElement | null>
  >({
    about: null,
    experience: null,
    contact: null,
  });

  const onDownload = useCallback(async () => {
    const res = await fetch("/resume.pdf", {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    });
    const content = await res.blob();
    const contentUrl = URL.createObjectURL(content);
    window.open(contentUrl, "_blank", "noopener noreferrer");
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
  );
};

export default Page;
