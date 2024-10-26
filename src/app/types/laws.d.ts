type LawItemSchema = {
  id: number;
  title: string;
  laws: string;
};

type LawsResponse = ResponseWithPagination<LawItemSchema>;
