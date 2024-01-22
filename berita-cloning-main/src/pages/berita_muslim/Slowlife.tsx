import React from 'react'
import { SlowlifeData } from '../../components/bodys/home/Slowlife/data/SlowlifeData'
import SlowlifeHead from '../../components/headers/headBar/berita/SlowlifeHead'
import SlowlifeComponents from '../../components/bodys/berita/slowlife/SlowlifeCom'

type Props = {}

const Slowlife = (props: Props) => {
  return (
    <>
      <SlowlifeHead />
      <SlowlifeComponents />
    </>
  );
}

export default Slowlife