import React from 'react'
import CoverStoryHead from '../../components/headers/headBar/berita/CoverStoryHead'
import CoverComponent from '../../components/bodys/berita/cover/CoverStoryCom';

type Props = {}

const CoverStory = (props: Props) => {
  return (
    <>
      <CoverStoryHead />
      <CoverComponent />
    </>
  );
}

export default CoverStory