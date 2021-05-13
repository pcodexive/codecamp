import React, { useEffect, useRef, useState } from 'react';
import TermPresenter from './TermPresenter';
import { useQuery } from '@apollo/client';
import { FETCH_REGISTER_CODECAMPS, FETCH_REGISTER_PRECAMPS } from './TermQueries';

let PRECAMP_BOX_WIDTH = 282;
let CODECAMP_BOX_WIDTH = 282;
const TermContainer = () => {
  const [precampTran, usePrecampTran] = useState(0);
  const [codecampTran, useCodecampTran] = useState(0);
  const [precampTranCount, setPrecampTranCount] = useState(0)
  const [codecampTranCount, setCodecampTranCount] = useState(0)
  const { data: dataRegisterPrecamps } = useQuery(FETCH_REGISTER_PRECAMPS);
  const { data: dataRegisterCodecamps } = useQuery(FETCH_REGISTER_CODECAMPS);

  const precampCardRef = useRef<null | Element>(null)
  const codecampCardRef = useRef<null | Element>(null)

  useEffect(() => {
    if(precampCardRef && precampCardRef.current){
      PRECAMP_BOX_WIDTH = precampCardRef?.current?.clientWidth
    }
  })

  useEffect(() => {
    if(codecampCardRef && codecampCardRef.current){
      CODECAMP_BOX_WIDTH = codecampCardRef?.current?.clientWidth
    }
  })

  const handlePrecampTranLeft = () => {
    setPrecampTranCount(0)
    usePrecampTran((prev) => {
      if (prev + PRECAMP_BOX_WIDTH > 0) {
        return prev;
      } else prev + PRECAMP_BOX_WIDTH;
      return 0;
    });
  };

  const handlePrecampTranRight = () => {
    const wrapperWidth = 1200;
    const totalWidth = PRECAMP_BOX_WIDTH * dataRegisterPrecamps?.fetchRegisterPrecamps?.length;
    const hidedWidth = PRECAMP_BOX_WIDTH * precampTranCount;
    if (totalWidth - hidedWidth > wrapperWidth) {
      usePrecampTran((prev) => prev - PRECAMP_BOX_WIDTH);
      setPrecampTranCount((prev) => prev + 1);
    }
  };

  const handleCodecampTranLeft = () => {
    setCodecampTranCount(0)
    useCodecampTran((prev) => {
      if (prev + CODECAMP_BOX_WIDTH > 0) {
        return prev;
      } else prev + CODECAMP_BOX_WIDTH;
      return 0;
    });
  };

  const handleCodecampTranRight = () => {
    const wrapperWidth = 1200;
    const totalWidth = CODECAMP_BOX_WIDTH * dataRegisterCodecamps?.fetchRegisterCodecamps?.length;
    const hidedWidth = (CODECAMP_BOX_WIDTH * (codecampTranCount))
    if(totalWidth-hidedWidth > wrapperWidth){
      useCodecampTran((prev) => prev - CODECAMP_BOX_WIDTH);
      setCodecampTranCount(prev => prev + 1)
    }
  };

  return (
    <TermPresenter
      fetchRegisterPrecamps={dataRegisterPrecamps?.fetchRegisterPrecamps}
      fetchRegisterCodecamps={dataRegisterCodecamps?.fetchRegisterCodecamps}
      precampTran={precampTran}
      codecampTran={codecampTran}
      precampCardRef={precampCardRef}
      codecampCardRef={codecampCardRef}
      handlePrecampTranLeft={handlePrecampTranLeft}
      handlePrecampTranRight={handlePrecampTranRight}
      handleCodecampTranLeft={handleCodecampTranLeft}
      handleCodecampTranRight={handleCodecampTranRight}
    />
  );
};

export default TermContainer;
