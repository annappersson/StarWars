export interface Person {
    id: number;
    name: string;
    height: string;
    birth_year: string;
    films: string[];
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
    data: T[];
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
    total: number;
}

