import React, { useCallback, useState } from "react";
import NavigationBar from "./components/NavigationBar";

import { FaFileDownload } from "react-icons/fa";

import styles from "./index.module.scss";

const IntroductionView = ({
  onDownload,
  onAbout,
  onExperience,
  onContact,
}: {
  onDownload: () => Promise<void>;
  onAbout: () => void;
  onExperience: () => void;
  onContact: () => void;
}) => {
  const [loading, setLoading] = useState(false);

  const handleOnDownload = useCallback(async () => {
    try {
      setLoading(true);
      await onDownload();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    setLoading(false);
  }, [onDownload]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className={`${styles.backgroundDecor}`} />
      <NavigationBar
        onAbout={onAbout}
        onExperience={onExperience}
        onContact={onContact}
      />
      <div className="relative container grid md:grid-cols-3 mx-auto max-w-6xl p-8 grow">
        {/* <div className="grid md:grid-cols-3"> */}
        <div className="flex flex-col justify-center gap-6 md:col-span-2">
          <div className="sm:text-6xl text-5xl font-extrabold text-blue-50">
            Hi, This is Tim
          </div>
          <div className="sm:text-3xl text-2xl font-bold text-blue-50">
            A Front-End Software Developer & UI/UX Designer.
          </div>
          <div className="flex gap-4 mx-1">
            <button
              className="bg-rose-400 hover:bg-rose-500/80 sm:text-xl text-md font-extrabold text-white py-3 px-4 border border-transparent rounded transition-[background-color] disabled:bg-gray-400 disabled:text-gray-200 disabled:border-transparent"
              disabled={loading}
              onClick={handleOnDownload}
            >
              Resume
              <FaFileDownload className="inline-block text-2xl ml-2" />
            </button>
            <button
              className="bg-violet-400 hover:bg-violet-500/60 sm:text-xl text-md font-extrabold text-white py-3 px-4 border border-transparent rounded transition-[background-color]"
              onClick={onAbout}
            >
              Learn More
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default IntroductionView;
