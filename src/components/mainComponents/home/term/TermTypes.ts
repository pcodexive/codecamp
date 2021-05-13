export type IProps = {
  fetchRegisterPrecamps: Array<any>,
  fetchRegisterCodecamps: Array<any>,
  precampTran: number;
  codecampTran: number;
  precampCardRef: React.MutableRefObject<Element | null>
  codecampCardRef: React.MutableRefObject<Element | null>
  handlePrecampTranLeft: () => void;
  handlePrecampTranRight: () => void;
  handleCodecampTranLeft: () => void;
  handleCodecampTranRight: () => void;
};
