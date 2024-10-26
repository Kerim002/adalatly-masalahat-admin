interface EmployerItemSchema {
  id: number;
  name: string;
  major: string;
  image: string;
  surname: string;
}

type EmployerResponse = ResponseWithPagination<EmployerItemSchema>;
