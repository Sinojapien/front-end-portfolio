import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardedRef,
} from "react";

import focusStyles from "@/styles/scrollAnimation/focus.module.scss";
import styles from "./index.module.scss";
import { map } from "lodash";

import { items } from "./constants";

import ProjectItem from "./components/ProjectItem";
import useScrollAnimation from "@/hooks/useScrollAnim";

const ExperienceView = forwardRef(
  (
    { className, ...props }: ComponentPropsWithoutRef<"div">,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { observe } = useScrollAnimation({
      onScreenClassname: focusStyles.active,
      options: { threshold: 0.1 },
    });

    return (
      <div
        ref={ref}
        className={`${className} ${styles.sectionHead} bg-gradient-to-bl from-slate-50 to-indigo-50 text-gray-800`}
        {...props}
      >
        <div className="translate-y-[-50%]">
          <div
            className={`w-fit mx-auto sm:px-16 px-8 py-4 text-4xl font-extrabold leading-normal ${styles.title}`}
          >
            Experience
          </div>
        </div>

        <div className="container mx-auto max-w-5xl px-8 pb-4 text-4xl font-extrabold leading-normal">
          <a
            className={`${styles.sectionTitle}`}
            href="https://twitter.com/flyingmilktea"
            target="_blank"
            rel="noopener noreferrer"
          >
            @FlyingMilkTea
          </a>{" "}
          - 1+ Years
        </div>
        <div
          ref={observe}
          className={`container mx-auto max-w-6xl p-8 ${focusStyles.inactive}`}
        >
          <div className="flex gap-4 flex-wrap justify-center">
            {map(items, (item) => (
              <ProjectItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    );
  },
);

ExperienceView.displayName = "ExperienceView";

export default ExperienceView;
