import type { Planet } from '@/types/planet';
import axios from 'axios';

const BASE_URL = 'https://swapi.py4e.com/api/planets/'


export const fetchPlanets = async (page: number): Promise<{ results: Planet[]; next: string | null }> => {
    const response = await axios.get(`${BASE_URL}?page=${page}`);
    return response.data;
}
