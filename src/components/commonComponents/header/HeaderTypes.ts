export type IProps = {
  moveToHome: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  moveToCurriculum: () => void;
  moveToFaq: () => void;
  moveToMap: () => void;
  isNavigationBreakPoint: boolean
};
