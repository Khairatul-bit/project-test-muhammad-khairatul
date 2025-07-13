export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  published_at: string;
  small_image: {
    url: string;
  };
  medium_image: {
    url: string;
  };
}

export interface ApiResponse {
  data: Post[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}