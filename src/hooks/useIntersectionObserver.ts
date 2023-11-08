import { LegacyRef, useCallback, useEffect, useRef, useState } from "react";

type propsType = {
  options?: IntersectionObserverInit;
  callback: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver | undefined,
  ) => void;
};

const useIntersectionObserver = ({ options, callback }: propsType) => {
  const observerRef = useRef<IntersectionObserver | undefined>(undefined);
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
          callback(entry, observerRef.current);
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
  }, [options, callback, observerRef, observedElements]);

  return { observe };
};

export default useIntersectionObserver;
