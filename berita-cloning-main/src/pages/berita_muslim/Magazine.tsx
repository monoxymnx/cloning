import React from 'react'
import MagazineHead from '../../components/headers/headBar/berita/MagazineHead'
import MagazineComponents from '../../components/bodys/berita/magazine/MagazineCom';

type Props = {}

const Magazine = (props: Props) => {
  return (
    <>
      <MagazineHead />
      <MagazineComponents />
    </>
  );
}

export default Magazine