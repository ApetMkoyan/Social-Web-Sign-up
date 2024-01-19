import { useState } from 'react';

const useLanguage = (initialLanguage) => {
    const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
    };

    return { currentLanguage, handleLanguageChange };
};

export default useLanguage;
