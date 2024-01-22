import React from 'react'
import FinaceHead from '../../components/headers/headBar/berita/FinaceHead'
import FinaceComponent from '../../components/bodys/berita/finace/FinaceCom';

type Props = {}

const Finace = (props: Props) => {
  return (
    <>
      
      <FinaceHead />
      <FinaceComponent />
    </>
  );
}

export default Finace