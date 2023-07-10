import React, { useState } from 'react';

const useSystemModal = () => {
  const [isOpen, setIsOpen] = useState({
    is: false,
    msg: '',
  });

  const handler = (val, msg) => {
    setIsOpen({is: val, msg});
  };

  return [isOpen.is, isOpen.msg, handler];
};

export default useSystemModal;
