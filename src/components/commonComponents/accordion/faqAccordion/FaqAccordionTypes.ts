export type IProps = {
  number: number;
  isActive?: boolean;
  noBorderBottom?: boolean;
  title: string;
  handleIsActive: (number: number) => void;
};
