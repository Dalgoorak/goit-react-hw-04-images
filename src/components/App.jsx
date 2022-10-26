import { useEffect, useState } from 'react';

import { SearchBar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { fetchImages } from 'helpers/images-api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [originalImageURL, setOriginalImageURL] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      fetchImg();
    }
  }, [searchQuery]);
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     this.fetchImg();
  //   }
  // }

  const onChangeQuery = query => {
    setImages([]);
    setSearchQuery(query);
    setCurrentPage(1);
    setShowModal(false);
    setError(null);
  };

  const fetchImg = () => {
    const options = { searchQuery, currentPage };

    setIsLoading(true);

    fetchImages(options)
      .then(hits => {
        setImages(prevState => [...prevState, ...hits]);
        setCurrentPage(prevState => prevState + 1);

        // this.setState(prevState => ({
        //   images: [...prevState.images, ...hits],
        //   currentPage: prevState.currentPage + 1,
        // }));
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const handleClickImage = largeImageURL => {
    openModal(largeImageURL);
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setOriginalImageURL(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
    setOriginalImageURL('');
  };

  const buttonIsShown = images.length > 0 && !isLoading;

  return (
    <>
      <SearchBar onSubmit={onChangeQuery} />

      <ImageGallery images={images} onImageClick={handleClickImage} />

      {showModal && (
        <Modal largeImageURL={originalImageURL} closeModal={closeModal}></Modal>
      )}

      {isLoading && <Loader />}

      {buttonIsShown && <Button onLoadMore={fetchImg} />}
    </>
  );
};
