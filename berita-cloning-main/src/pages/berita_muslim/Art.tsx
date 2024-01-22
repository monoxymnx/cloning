import React from 'react'
import ArtHead from '../../components/headers/headBar/berita/ArtHead'
import ArtComponents from '../../components/bodys/berita/art/ArtCom'

type Props = {}

const art = (props: Props) => {
  return (
    <>
      <ArtHead />
      <ArtComponents />
    </>
  );
}

export default art