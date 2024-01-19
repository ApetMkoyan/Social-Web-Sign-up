import { useState } from 'react';

const useImageUpload = () => {
    const [newImg, setNewImg] = useState('');

    const handleImageUpload = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            const imgData = reader.result;
            console.log('Image loaded:', imgData);
            setNewImg(imgData);
        };
    };

    return { newImg, handleImageUpload };
};

export default useImageUpload;
