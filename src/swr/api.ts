import axios from 'axios';
import { apiRoutes } from './apiRoutes.ts';

/**
 * No auth interceptors, unlike votura. A verifier that asks who you are before it shows you a
 * published result has misunderstood its job.
 */
export const api = axios.create({ baseURL: apiRoutes.base });
