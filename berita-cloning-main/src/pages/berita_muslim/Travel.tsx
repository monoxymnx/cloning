import React from 'react'
import TravelHead from '../../components/headers/headBar/berita/TravelHead'
import TravelComponents from '../../components/bodys/berita/travel/TravelCom';

type Props = {}

const Travel = (props: Props) => {
  return (
    <>
      <TravelHead />
      <TravelComponents />
    </>
  );
}

export default Travel