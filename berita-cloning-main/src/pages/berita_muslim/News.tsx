import React from 'react'
import NewsHead from '../../components/headers/headBar/berita/NewsHead'
import NewsComponents from '../../components/bodys/berita/news/NewsCom';

type Props = {}

const News = (props: Props) => {
  return (
    <>
      
      <NewsHead />
      <NewsComponents />
    </>
  );
}

export default News