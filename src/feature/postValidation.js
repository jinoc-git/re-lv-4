const postValidation = (postInfo, refs, isOpenHanler) => {
  const { title, artist, linkUrl, genre, hash } = postInfo;
  const { titleInput, artistInput, linkUrlInput } = refs;

  if (!genre) {
    isOpenHanler(true, '국내 또는 해외를 선택해 주세요');
    return false;
  }
  if (!title) {
    isOpenHanler(true, '제목을 적어주세요');
    titleInput.current.focus();
    return false;
  }
  if (!artist) {
    isOpenHanler(true, '가수를 적어주세요');
    artistInput.current.focus();
    return false;
  }
  if (!linkUrl) {
    isOpenHanler(true, '링크를 적어주세요');
    linkUrlInput.current.focus();
    return false;
  }
  const hashNum = hash.length;
  if (hashNum < 3) {
    isOpenHanler(true, '해시태그는 최소 3개입니다');
    return false;
  }
  const hashCheck = hash.filter((h) => {
    return h === '#';
  });
  if (hashCheck.length !== 0) {
    isOpenHanler(true, '해시태그는 1글자 이상 입력해 주세요');
    return false;
  }
  return true;
};

export default postValidation;
