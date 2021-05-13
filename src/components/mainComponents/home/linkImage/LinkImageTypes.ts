export type IProps = {
  isMouseOver1: boolean;
  isMouseOver2: boolean;
  handleMouseEnter1: () => void;
  handleMouserLeave1: () => void;
  handleMouseEnter2: () => void;
  handleMouseLeave2: () => void;
  moveToPrecamp: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  moveToCodecamp: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
