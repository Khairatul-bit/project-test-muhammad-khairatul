import axios from 'axios';
import { ApiResponse } from '@/types';

const API_URL = '/api';

export const fetchPosts = async (
  page: number = 1,
  perPage: number = 10,
  sortOrder: string = '-published_at'
): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`${API_URL}/ideas`, {
      params: {
        'page[number]': page,
        'page[size]': perPage,
        'append[]': ['small_image', 'medium_image'],
        'sort': sortOrder,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};