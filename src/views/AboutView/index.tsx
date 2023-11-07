import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from "react";

import {
  BsPersonGear,
  BsBalloonHeart,
  BsEnvelope,
  BsLayoutTextWindowReverse,
  BsGrid,
} from "react-icons/bs";

import ChipList, { Chip } from "../../components/ChipList";
import Title from "./components/Title";

import { otherChips, frontEndChips } from "./constants";

import fadeInStyles from "@/styles/scrollAnimation/fade-in.module.scss";
import styles from "./index.module.scss";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const AboutView = forwardRef(
  (
    { className, ...props }: ComponentPropsWithoutRef<"div">,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { observe } = useIntersectionObserver({
      onScreenClassname: fadeInStyles.active,
    });

    return (
      <div
        ref={ref}
        className={`${className ?? ""} ${
          styles.sectionHead
        } sm:px-8 px-2 sm:py-24 py-12 text-gray-700 bg-gradient-to-br from-blue-50 to-purple-50`}
        {...props}
      >
        <div className="container mx-auto max-w-5xl">
          <Title className="from-cyan-400 to-blue-700">About Me</Title>
          <div className="grid md:grid-cols-2 grid-cols-1 my-16 text-lg md:divide-x-2 md:divide-y-0 divide-y-2 ">
            <div
              ref={observe}
              className={`flex flex-col gap-y-2 justify-center sm:p-6 p-4 ${fadeInStyles.inactive}`}
            >
              <div>
                <BsPersonGear className="inline text-3xl mr-3 text-blue-500" />
                <b className="text-xl">Name </b>
                <span className="text-gray-600">
                  {process.env.NEXT_PUBLIC_PORTFOLIO_NAME}
                </span>
              </div>
              <div>
                <BsEnvelope className="inline-block text-3xl mr-3 text-blue-500" />
                <b className="text-xl">Email </b>
                <span className="text-gray-600">
                  {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
                </span>
              </div>
              <div>
                <BsBalloonHeart className="inline text-3xl mr-3 text-blue-500" />
                <b className="text-xl">Interests </b>
                <br />
                <span className="text-gray-600">
                  Web development | Game | Music | Cooking
                </span>
              </div>
            </div>

            <div
              ref={observe}
              className={`sm:p-6 p-4 md:text-center text-gray-600 ${fadeInStyles.inactive}`}
            >
              An individual who is eager to apply his knowledge and experience
              in <b>front-end development</b>, <b>UI &amp; UX designs</b> and{" "}
              <b>problem-solving</b> skills on a <b>web front-end developer</b>{" "}
              position. Able to work in teams or independently. Also passionate
              about <b>game development</b>.
            </div>
          </div>
          <Title className=" from-purple-500 to-blue-600">
            Highlighted Skills
          </Title>
          <div className="my-16">
            <div className="text-center">
              <Chip
                className="text-2xl"
                label="FrontEnd"
                icon={
                  <BsLayoutTextWindowReverse className="inline text-3xl mr-3" />
                }
              />
            </div>
            <ChipList
              ref={observe}
              className={`py-8 px-2 justify-center ${fadeInStyles.inactive}`}
              items={frontEndChips}
            />
            <div className="my-6" />
            <div className="text-center">
              <Chip
                className="text-2xl"
                label="Other"
                icon={<BsGrid className="inline text-3xl mr-3" />}
              />
            </div>
            <ChipList
              ref={observe}
              className={`py-8 px-2 justify-center ${fadeInStyles.inactive}`}
              items={otherChips}
            />
          </div>
        </div>
      </div>
    );
  },
);

AboutView.displayName = "AboutView";

export default AboutView;
