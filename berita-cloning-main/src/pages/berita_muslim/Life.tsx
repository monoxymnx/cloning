import React from 'react'
import LifeHead from '../../components/headers/headBar/berita/LifeHead'
import LifeComponents from '../../components/bodys/berita/life/LifeCom';

type Props = {}

const Life = (props: Props) => {
  return (
    <>
      <LifeHead />
      <LifeComponents />
    </>
  );
}

export default Life