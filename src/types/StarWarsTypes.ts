export interface Person {
  id: number;
  name: string;
  height: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  films: FilmTitle[];
  image_url: string;
}

export type FilmTitle = {
  id: number;
  title: string;
};

export interface Film {
  id: number;
  title: string;
  opening_crawl: string;
  producer: string;
  director: string;
  characters: Person[];
  image_url: string;
  release_date: string;
}

export type PersonName = {
  id: number;
  name: string;
};

export interface ApiResponse<T> {
  current_page: number;
  last_page: number;
  data: T;
  total: number;
}
