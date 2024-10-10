interface EmployerItemSchema {
  id: number;
  name: string;
  major: string;
  image: string;
  surname: string;
}

interface EmployerResponse {
  employer: EmployerItemSchema[];
  page: number;
  pageSize: number;
  total: number;
}
