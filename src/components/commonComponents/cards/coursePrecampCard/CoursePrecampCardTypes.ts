export type IProps = {
  month: string;
  start: Date;
  end: Date;
  isExpired: boolean;
  precampCardRef?: React.MutableRefObject<Element | null>
};
