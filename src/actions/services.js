import axios from 'axios';
import { ANIMAL_URL, VEGIES_URL } from '../constants/api';

export const getAnimals = () => axios.get(ANIMAL_URL);

export const getVegies = () => axios.get(VEGIES_URL);