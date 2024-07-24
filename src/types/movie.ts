export interface Movie {
    id: number;
    title: string;
    release_year: number;
    genre: string[];
    director: string;
    cast: Cast[];
    rating: number;
    duration_minutes: number;
    synopsis: string;
    thumbnail_horizontal: string;
    thumbnail_vertical: string;
}

export interface Cast {
    name: string;
    role: string;
}
