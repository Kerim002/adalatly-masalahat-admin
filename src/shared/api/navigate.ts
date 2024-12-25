let navigate: (path: string) => void = () => {};

export const setNavigate = (navFn: (path: string) => void) => {
  navigate = navFn;
};

export const redirectTo = (path: string) => {
  navigate(path);
};
