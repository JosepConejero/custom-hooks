import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [time, setTime] = useState(0);
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    totalTime: time,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    const initialTime = new Date();
    //const duracion = initialTime.getMilliseconds();
    //console.log("---", duracion);
    //console.log(initialTime.getTime());
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data);
    //const time
    const finalTime = new Date();
    const duration = finalTime.getTime() - initialTime.getTime();
    //console.log(duration);
    setState({
      data: data,
      isLoading: false,
      hasError: null,
      totalTime: duration,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  //return state;
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    totalTime: state.totalTime,
  };
};
