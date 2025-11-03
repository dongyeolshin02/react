import React, { useState } from 'react';
import style from '../../assets/css/books/book-detail.module.css'

const BookDetail = () => {
    // 이미지 배열 정의
    const images = [
        'https://contents.kyobobook.co.kr/etc/ec/fndg/2cd109fe0e874ca096925a1ba4a83548.jpg',
        'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932920535.jpg',
        'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788934942467.jpg',
        'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788934986355.jpg'
    ];

    // 현재 선택된 이미지 인덱스 상태 관리
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // 썸네일 클릭 핸들러
    const handleThumbnailClick = (index) => {
        setSelectedImageIndex(index);
    };

    // 이전 이미지로 이동
    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // 다음 이미지로 이동
    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={style.books}>
            <div className={style.colImgInfo}>
                {/* 메인 이미지와 화살표 컨테이너 */}
                <div className={style.mainImageContainer}>
                    {/* 이전 버튼 */}
                    <button
                        className={`${style.arrowButton} ${style.leftArrow}`}
                        onClick={handlePrevImage}
                    >
                        &#8249;
                    </button>

                    {/* 메인 이미지 */}
                    <img
                        className={style.mainImg}
                        src={images[selectedImageIndex]}
                        alt="메인 이미지"
                    />

                    {/* 다음 버튼 */}
                    <button
                        className={`${style.arrowButton} ${style.rightArrow}`}
                        onClick={handleNextImage}
                    >
                        &#8250;
                    </button>
                </div>

                {/* 썸네일 이미지 컨테이너 */}
                <div className={style.thumbnailContainer}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`${style.thumbnail} ${selectedImageIndex === index ? style.activeThumbnail : ''}`}
                            src={image}
                            alt={`썸네일 ${index + 1}`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
            </div>
            <div className={style.colProdInfo}>
                <div>
                      <span  className={style.prodTitle}>헤르만 헤세의 첫 산문 문학</span>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;