import { useSearchParams } from "react-router-dom";

export const usePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getPage = () => {
    return searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  };
  const setPage = (page: number) => {
    setSearchParams(
      (prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        page === 1
          ? newParams.delete("page")
          : newParams.set("page", `${page}`);
        return newParams;
      },
      { replace: true }
    );
  };
  const deletePage = () => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.delete("page");
      return newParams;
    });
  };
  return { getPage, setPage, deletePage };
};
