import React, { useState } from 'react';

const usePostInfo = () => {
  const [info, setInfo] = useState({
    title: '',
    artist: '',
    linkUrl: '',
  });

  const handler = ({ target }) => {
    const { name, value } = target;
    if (name === 'title') setInfo({ ...info, title: value });
    if (name === 'artist') setInfo({ ...info, artist: value });
    if (name === 'linkUrl') setInfo({ ...info, linkUrl: value });
  };

  return [info, handler];
};

export default usePostInfo;
