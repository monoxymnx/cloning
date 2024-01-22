import React from 'react'
import QuranHead from '../../components/headers/headBar/berita/QuranHead'
import QuranComponents from '../../components/bodys/berita/quran/QuranCom';

type Props = {}

const Quran = (props: Props) => {
  return (
    <>
      <QuranHead />
      <QuranComponents />
    </>
  );
}

export default Quran