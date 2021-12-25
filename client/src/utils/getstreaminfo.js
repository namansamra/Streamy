import { backendServer } from "./constant";

export const getStreamsInfo = async (streams) => {
  const list = JSON.stringify(streams);
  const res = await fetch(
    `${backendServer}/api/stream/getstreams?list=${list}`
  );
  const data = await res.json();
  return data;
};
