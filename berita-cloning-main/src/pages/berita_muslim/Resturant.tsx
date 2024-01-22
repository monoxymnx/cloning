import React from 'react'
import ResturantHead from '../../components/headers/headBar/berita/ResturantHead'
import ResturantComponents from '../../components/bodys/berita/resturant/ResturantCom';

type Props = {}

const Resturant = (props: Props) => {
  return (
    <>
      {" "}
      <ResturantHead />
      <ResturantComponents />
    </>
  );
}

export default Resturant