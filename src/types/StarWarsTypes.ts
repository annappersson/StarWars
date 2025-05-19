export interface Person {
  id: number;
  name: string;
  height: string;
  birth_year: string;
  films: string[];
  image_url: string;
}

export interface Film {
  id: number;
  title: string;
  opening_crawl: string;
  producer: string;
  director: string;
  charachter: string[];
}

export interface ApiResponse<T> {
  current_page: number;
  last_page: number;
  data: T[];
  total: number;
}
