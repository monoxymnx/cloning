import React from 'react'
import HistoryHead from '../../components/headers/headBar/berita/HistoryHead'
import HistoryComponents from '../../components/bodys/berita/historyCom/HistoryCom';

type Props = {}

const History = (props: Props) => {
  return (
    <>
      <HistoryHead />
      <HistoryComponents />
    </>
  );
}

export default History