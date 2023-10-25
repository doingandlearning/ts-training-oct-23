import axios from "axios";
import {
  SWAPICategory,
  SWAPIResponseType,
  Person,
  SWAPICategoryTypes,
  SearchResponse,
} from "./types";

const baseURL = "https://swapi.dev/api/";

export const searchSWAPI = async <T extends SWAPICategory>(
  category: SWAPICategory,
  id?: number,
  query?: string
): Promise<SearchResponse<SWAPIResponseType[T]> | SWAPICategoryTypes> => {
  try {
    let url = `${baseURL}${category}/`;
    if (id) {
      url += id;
    }
    const response = await axios.get(url, {
      params: {
        search: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching from SWAPI for category ${category} with id ${id} and query ${query}:`,
      error
    );
    throw error;
  }
};

export const searchPeople = async (query: string): Promise<Person[]> => {
  try {
    const response = await axios.get<Response<Person>>(`${baseURL}people`, {
      params: {
        search: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching from SWAPI:", error);
    throw error;
  }
};
