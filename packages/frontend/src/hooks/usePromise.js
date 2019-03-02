import { useState } from "react";
import useCanceled from "./useCanceled";

export default promiseFactory => {
  const [state, setState] = useState({ pending: false });
  const canceled = useCanceled();

  const invoke = () => {
    const resolved = state => {
      if (!canceled.current) {
        setState({ pending: false, ...state });
      }
    };

    setState({ pending: true });

    promiseFactory().then(
      data => resolved({ data }),
      error => resolved({ error })
    );
  };

  return { ...state, invoke };
};
