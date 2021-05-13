export type IProps = {
  moveToPrecamp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  moveToCodecampF: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  moveToCodecampB: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  tabType: string;
};

export type ContainerProps = {
  tabType: string;
};
