import { useContext } from "react";
import { GlobalContext } from "src/components/commonComponents/globalProvider/GlobalProvider";
import { RegisterButton } from "./MobileRegisterButtonStyle";

const MobileRegisterButtonPresenter: React.FC = () => {
    const {toggleRegisterForm} = useContext(GlobalContext)
    return <RegisterButton onClick={toggleRegisterForm}>상담 신청하기</RegisterButton>
}

export default MobileRegisterButtonPresenter