import { useState, useEffect } from 'react';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, USER_MAIN_DATA } from '@/data/mockData';

const API_BASE_URL = 'http://localhost:3000/user/';

/**
 * Custom hook for fetching user data
 * @param {string} userId - The ID of the user
 * @param {string} type - The type of data to fetch ('', 'activity', 'average-sessions', 'performance')
 * @returns {Object} { data, isLoading, error }
 */
const useFetch = (userId, type = '') => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {

      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}${userId}/${type}`);

        if (!response.ok) {
          throw new Error('API request failed');
        }

        const responseData = await response.json();

        if (responseData.error) {
          throw new Error(responseData.error);
        }
        setData(responseData);
      } catch (err) {
        console.warn(`Failed to fetch from API: ${err.message}. Using mock data instead.`);
        setData(getMockData(userId, type));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId, type]);

  return { data, isLoading };
};

/**
 * Retrieves mock data when API call fails
 * @param {string} id - The user ID
 * @param {string} type - The type of data to retrieve ('', 'activity', 'average-sessions', 'performance')
 * @returns {Object} The corresponding mock data for the specified type and user
 */
function getMockData(id, type) {
  // Return the corresponding mock data based on the type

  switch (type) {

    case 'activity':
      return {
        data: USER_ACTIVITY.find(user => user.userId == id)
      };
    case 'average-sessions':
      return {
        data: USER_AVERAGE_SESSIONS.find(user => user.userId == id)
      };
    case 'performance':
      return {
        data: USER_PERFORMANCE.find(user => user.userId == id)
      };
    default:
      return {
        data: USER_MAIN_DATA.find(user => user.id == id)
      };
  }
}

export default useFetch;
