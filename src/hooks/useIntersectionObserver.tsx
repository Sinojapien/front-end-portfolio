import { LegacyRef, useCallback, useEffect, useRef, useState } from "react";

const defaultClassname = "on-screen";

type propsType = {
  oneOff?: boolean;
  onScreenClassname?: string;
  options?: IntersectionObserverInit;
  intersectionObserver?: IntersectionObserver;
};

const useIntersectionObserver = ({
  oneOff = true,
  onScreenClassname,
  options,
  intersectionObserver,
}: propsType = {}) => {
  const observerRef = useRef<IntersectionObserver | undefined>(
    intersectionObserver,
  );
  const [observedElements, setObservedElements] = useState<HTMLElement[]>([]);

  const observe: LegacyRef<HTMLElement> = useCallback(
    (el: HTMLElement | null) => {
      if (el?.isConnected && observedElements.indexOf(el) < 0) {
        setObservedElements((val) => [...val, el]);
      }
    },
    [observedElements],
  );

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(onScreenClassname ?? defaultClassname);
            if (oneOff) {
              observerRef.current?.unobserve(entry.target);
            }
          } else {
            entry.target.classList.remove(
              onScreenClassname ?? defaultClassname,
            );
          }
        });
      }, options);
    }

    observedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observedElements.forEach((el) => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
    };
  }, [oneOff, onScreenClassname, options, observerRef, observedElements]);

  return { observe };
};

export default useIntersectionObserver;
