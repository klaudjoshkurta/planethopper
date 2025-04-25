/**
 * Fetches a list of planets from the Star Wars API (SWAPI) for a given page.
 *
 * @param page - The page number to fetch planets from.
 * @returns A promise that resolves to an object containing:
 * - `results`: An array of planets of type `Planet`.
 * - `next`: A string representing the URL of the next page, or `null` if there are no more pages.
 *
 * @throws Will throw an error if the HTTP request fails.
 */

import type { Planet } from '@/types/planet';
import axios from 'axios';

const BASE_URL = 'https://swapi.py4e.com/api/planets/'

export const fetchPlanets = async (page: number): Promise<{ results: Planet[]; next: string | null }> => {
    const response = await axios.get(`${BASE_URL}?page=${page}`);
    return response.data;
}
