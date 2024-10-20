interface EmployerItemSchema {
  id: number;
  name: string;
  major: string;
  image: string;
  surname: string;
}

interface EmployerResponse {
  data: EmployerItemSchema[];
  page: number;
  limit: number;
  total: number;
}
