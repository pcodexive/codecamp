import {createContext, useEffect, useState} from 'react'
import Register from 'src/components/mainComponents/home/register/registerContainer';
import MobileNavigation from '../mobileNavigation/MobileNavigationPresenter';

export const GlobalContext = createContext({
  isOpenRegisterForm: false,
  toggleRegisterForm: () => {},
  toggleMobileNavigationMenu: () => {},
  closeMobileNavigationMenu: () => {},
});
const GlobalProvider: React.FC = ({children}) => {
    const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false)
    const [isOpenMobileNavigationMenu, setIsOpenMobileNavigationMenu] = useState(false);

    const toggleRegisterForm = () => {
      setIsOpenRegisterForm((prev) => !prev);
    };

    const closeRegisterForm = () => {
      setIsOpenRegisterForm(false);
    };

    const toggleMobileNavigationMenu = () => {
      window.scrollTo({ top: 0 });
      setIsOpenMobileNavigationMenu((prev) => !prev);
    };

    const closeMobileNavigationMenu = () => {
      window.scrollTo({ top: 0 });
      setIsOpenMobileNavigationMenu(false);
    };

    useEffect(() => {
      if(!isOpenRegisterForm && !isOpenMobileNavigationMenu) return;
      
      const body: HTMLElement | null = document.querySelector('body');
      if (body) { body.style.overflow = 'hidden'; }
      return () => { if (body) { body.style.overflow = 'scroll'; } };
    }, [isOpenRegisterForm, isOpenMobileNavigationMenu]);

    return (
      <>
        {isOpenRegisterForm && (
          <Register toggleRegisterForm={toggleRegisterForm} closeRegisterForm={closeRegisterForm} />
        )}
        {isOpenMobileNavigationMenu && (
          <MobileNavigation
            toggleMobileNavigationMenu={toggleMobileNavigationMenu}
            closeMobileNavigationMenu={closeMobileNavigationMenu}
          />
        )}
        <GlobalContext.Provider
          value={{
            isOpenRegisterForm,
            toggleRegisterForm,
            toggleMobileNavigationMenu,
            closeMobileNavigationMenu,
          }}
        >
          {children}
        </GlobalContext.Provider>
      </>
    );
}

export default GlobalProvider