import { useEffect, useState } from 'react';
import { dummyData } from 'utils/constants';

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useGetGif = (keyword: string) => {
  const [gifUrl, setGifUrl] = useState<string>('');

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(' ')[0]}&limit=1`
      );
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setGifUrl(dummyData[0].url);
      console.log(error);
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useGetGif;
