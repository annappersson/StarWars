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

const delay = async (waitTime = 2000) => {
  await new Promise((res) => setTimeout(res, waitTime));
};

const get = async <T>(endpoint: string) => {
  await delay();
  const res = await instance.get<T>(endpoint);
  return res.data;
};

export const SingleFilm = async (id: number) => {
  return get<Film>(`/films/?search=${id}`);
};

export const Films = async (query: string, page = 1) => {
  return get<Film>(`/films/?search=${query}page=${page}`);
};

export const SinglePerson = async (id: number) => {
  return get<Person>(`/people/?search=${id}`);
};

export const getAllPeople = async (page = 1) => {
  return get<ApiResponse<Person>>(`/people?page=${page}`);
};
