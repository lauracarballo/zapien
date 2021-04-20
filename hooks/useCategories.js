import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function useCategories() {
  const { data, error } = useSWR("/api/categories", fetcher);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
}
