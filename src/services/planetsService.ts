import type { Planet } from '@/types/planet';
import axios from 'axios';

const BASE_URL = 'https://swapi.tech/api/';

export const fetchPlanets = async (page: number): Promise<{ results: { uid: string; name: string; url: string }[]; next: string | null }> => {
    const response = await axios.get(`${BASE_URL}planets/?page=${page}`);
    return response.data;
}

export const fetchPlanetDetails = async (planetID: string): Promise<Planet> => {
    const response = await axios.get(`${BASE_URL}planets/${planetID}`);
    return response.data;
}
