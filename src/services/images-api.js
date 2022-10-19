import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const apiKey = '17488430-d244df9e1a1645d78232e5491';

export const fetchImages = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 12,
}) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then(response => response.data.hits);
};

// export default { fetchImages };
