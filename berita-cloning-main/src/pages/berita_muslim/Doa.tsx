import React from 'react'
import DoaHead from '../../components/headers/headBar/berita/DoaHead'
import DoaComponent from '../../components/bodys/berita/doa/DoaCom';

type Props = {}

const Doa = (props: Props) => {
  return (
    <>
      <DoaHead />
      <DoaComponent />
    </>
  );
}

export default Doa