import React from 'react'
import FoodHead from '../../components/headers/headBar/berita/FoodHead'
import FoodComponents from '../../components/bodys/berita/food/FoodCom';

type Props = {}

const Food = (props: Props) => {
  return (
    <>
      <FoodHead />
      <FoodComponents />
    </>
  );
}

export default Food