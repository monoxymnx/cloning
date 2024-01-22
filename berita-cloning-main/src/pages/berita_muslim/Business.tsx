import React from 'react'
import BussinessHead from './../../components/headers/headBar/berita/BusinessHead';
import BusinessComponents from '../../components/bodys/berita/bussiness/BusinessCom';

type Props = {}

const Bussiness = (props: Props) => {
  return (
    <>
      <BussinessHead />
      <BusinessComponents />
    </>
  );
}

export default Bussiness