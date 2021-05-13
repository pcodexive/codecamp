export type IProps = {
  stage: string;
  remaining: string;
  start: Date;
  end: Date;
  isExpired: boolean;
  codecampCardRef?: React.MutableRefObject<Element | null>
};
