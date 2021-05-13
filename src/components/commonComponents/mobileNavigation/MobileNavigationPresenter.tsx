import { useRouter } from "next/router"
import { useEffect } from 'react';
import { Division, Menu, Wrapper } from "./MobileNavigationStyles"

interface IProps {
  toggleMobileNavigationMenu: () => void;
  closeMobileNavigationMenu: () => void;
}

const MobileNavigationPresenter: React.FC<IProps> = ({
  toggleMobileNavigationMenu,
  closeMobileNavigationMenu,
}) => {
  const router = useRouter();

  const moveTo = (path: string) => () => {
    router.push(path);
    toggleMobileNavigationMenu();
  };

  // 모바일 메뉴에서 뒤로가기 버튼 누를시, 메뉴창 종료
  useEffect(() => {
    window.historyStack?.push(closeMobileNavigationMenu);
    window.onpopstate = () => {
      const stackFunction = window.historyStack?.pop();
      if (stackFunction) stackFunction();
    };
  }, []);

  return (
    <Wrapper>
      <Division />
      <Menu onClick={moveTo('/curriculum/codecampF')}>커리큘럼</Menu>
      <Menu onClick={moveTo('/faq')}>Q&A</Menu>
      <Menu onClick={moveTo('/map')}>오시는길</Menu>
    </Wrapper>
  );
};

export default MobileNavigationPresenter