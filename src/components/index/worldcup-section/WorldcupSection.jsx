import RecommendDestination from './RecommendDestination';
import WorldcupLink from './WorldcupLink';
import Image from 'next/image';

export default function WorldcupSection(){
    return(
        <section className="worldcup-section">
            <div className="inner">
                <h3 className="main-title">여행지 월드컵</h3>
                <h4 className="sub-title">당신의 여행지 이상형을 추천해드립니다.</h4>
                <div className="worldcup-sction__content-wrap">
                    <div className="worldcup-sction__bg">
                        {/* <Image src={'/images/index/worldcup-section/worldcup-section-bg.jpg'} width={500} height={500} alt={'월드컵섹션배경'}/> */}
                        🇰🇷
                    </div>
                    <div className="worldcup-sction__content">
                        <RecommendDestination/>
                        <WorldcupLink/>
                    </div>
                </div>
            </div>
        </section>
    );
}