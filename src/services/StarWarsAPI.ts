import axios from "axios";
import type { ApiResponse, Film, Person } from "../types/StarWarsTypes";

const instance = axios.create({
  baseURL: "https://swapi.thehiveresistance.com/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const delay = async (waitTime = 1500) => {
  await new Promise((res) => setTimeout(res, waitTime));
};

const get = async <T>(endpoint: string) => {
  await delay();
  const res = await instance.get<T>(endpoint);
  return res.data;
};

export const getFilm = async (id: number) => {
  return get<Film>(`/films/${id}`);
};

//All film
export const getAllFilms = async (page = 1) => {
  return get<ApiResponse<Film[]>>(`/films?page=${page}`);
};

//one Person
export const getPerson = async (id: number) => {
  return get<Person>(`/people/${id}`);
};

//Alla People
export const getAllPeople = async (page = 1) => {
  return get<ApiResponse<Person[]>>(`/people?page=${page}`);
};
