import { useCallback } from "react";

import useIntersectionObserver from "./useIntersectionObserver";

const defaultClassname = "on-screen";

type propsType = {
  oneOff?: boolean;
  onScreenClassname?: string;
  options?: IntersectionObserverInit;
};

const useScrollAnimation = ({
  oneOff = true,
  onScreenClassname = defaultClassname,
  ...props
}: propsType = {}) => {
  const callback = useCallback(
    (
      entry: IntersectionObserverEntry,
      observer: IntersectionObserver | undefined,
    ) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(onScreenClassname);
        if (oneOff) {
          observer?.unobserve(entry.target);
        }
      } else {
        entry.target.classList.remove(onScreenClassname);
      }
    },
    [oneOff, onScreenClassname],
  );

  const { observe } = useIntersectionObserver({
    callback,
    ...props,
  });

  return { observe };
};

export default useScrollAnimation;
