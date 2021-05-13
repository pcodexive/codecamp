import { useRouter } from 'next/router';
import FooterPresenter from './FooterPresenter';

const FooterContainer: React.FC = () => {
  const router = useRouter();

  const moveToCurriculum = () => router.push('/curriculum/precamp');

  const moveToFaq = () => router.push('/faq');

  return <FooterPresenter moveToCurriculum={moveToCurriculum} moveToFaq={moveToFaq} />;
};

export default FooterContainer;
