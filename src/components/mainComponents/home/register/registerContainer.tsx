import { useMutation } from '@apollo/client';
import { ChangeEvent, useEffect, useState } from 'react';
import RegisterPresenter from './registerPresenter';
import { CREATE_APPLICATION } from './registerQueries';

interface IProps {
  toggleRegisterForm: () => void;
  closeRegisterForm: () => void;
}

const createApplicationInputInit = {
  name: '',
  phone: '',
  email: '',
  hopecamp: '',
  isAgreement: false,
};

const RegisterContainer: React.FC<IProps> = ({ toggleRegisterForm, closeRegisterForm }) => {
  const [customedPhone, setCustomedPhone] = useState('');
  const [createApplicationInput, setCreateApplicationInput] = useState(createApplicationInputInit);
  const [isOpenAgreementDetail, setIsOpenAgreementDetail] = useState(false);
  const [createApplication] = useMutation(CREATE_APPLICATION);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = event?.target?.name;
    let value: string | boolean = event?.target?.value;
    if (key === 'isAgreement') value = !createApplicationInput?.isAgreement;
    if (key === 'phone') {
      const phone = event?.target.value.replace(/-/g, '');
      const customedPhone = phone
        .replace(/^(\d{3})([0-9]{1,4})(\d{4})?/, '$1-$2-$3')
        .replace(/(-)$/, '');
      setCustomedPhone(customedPhone);
      value = phone;
    }

    setCreateApplicationInput((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onClickAgreementDetailButton = () => {
    setIsOpenAgreementDetail((prev) => !prev);
  };

  const onClickRegisterButton = async () => {
    if (!createApplicationInput?.name) {
      alert('이름은 필수 입력입니다.');
      return;
    }

    if (!createApplicationInput?.phone) {
      alert('연락처는 필수 입력입니다.');
      return;
    }

    if (!createApplicationInput?.email) {
      alert('이메일은 필수 입력입니다.');
      return;
    }

    if (!createApplicationInput?.hopecamp) {
      alert('희망하는 캠프는 필수 선택입니다.');
      return;
    }

    if (!createApplicationInput?.isAgreement) {
      alert('개인정보 취급방침에 동의해주세요.');
      return;
    }

    try {
      await createApplication({ variables: { createApplicationInput } });
      alert('상담 신청이 완료되었습니다. 이용해주셔서 감사합니다.');
      toggleRegisterForm();
    } catch (error) {
      alert(error.message);
    }
  };

  // 모바일 메뉴에서 뒤로가기 버튼 누를시, 메뉴창 종료
  useEffect(() => {
    window.historyStack?.push(closeRegisterForm);
    window.onpopstate = () => {
      const stackFunction = window.historyStack?.pop();
      if (stackFunction) stackFunction();
    };
  }, []);

  return (
    <RegisterPresenter
      customedPhone={customedPhone}
      toggleRegisterForm={toggleRegisterForm}
      onChangeInput={onChangeInput}
      onClickRegisterButton={onClickRegisterButton}
      isOpenAgreementDetail={isOpenAgreementDetail}
      onClickAgreementDetailButton={onClickAgreementDetailButton}
    />
  );
};

export default RegisterContainer;
