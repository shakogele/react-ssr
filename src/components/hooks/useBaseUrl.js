import { useTranslation } from 'react-i18next';

const useBaseUrl = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const baseUrl = i18n.language === 'en' ? '' : '/'+lang;
  return baseUrl;
}

export default useBaseUrl;