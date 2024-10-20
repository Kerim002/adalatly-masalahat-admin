type BannerSchema = {
  id: number;
  image: string;
  link: string;
  is_active: boolean;
};

interface BannerResponse {
  data: BannerSchema[];
  limit: number;
  page: 1;
  total: number;
}
