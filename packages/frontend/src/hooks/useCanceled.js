import { useEffect, useRef } from "react";

export default () => {
  const canceled = useRef(null);

  useEffect(() => {
    canceled.current = false;
    return () => {
      canceled.current = true;
    };
  }, []);

  return canceled;
};
