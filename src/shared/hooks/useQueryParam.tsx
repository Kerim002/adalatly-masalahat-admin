import { useSearchParams } from "react-router-dom";

export const useQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getQuery = (key: string) => {
    return searchParams.get(key) ?? undefined;
  };
  const setQuery = (queries: { key: string; value: any }[]) => {
    setSearchParams(
      (prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        queries.forEach((item) => {
          newParams.set(item.key, `${item.value}`);
        });
        return newParams;
      },
      { replace: true }
    );
  };
  const deleteQuery = (keys: string[]) => {
    setSearchParams(
      (prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        keys.forEach((key) => newParams.delete(key));
        return newParams;
      },
      { replace: true }
    );
  };
  const deleteAllQuery = () => {
    setSearchParams({});
  };
  return { getQuery, setQuery, deleteQuery, deleteAllQuery };
};
