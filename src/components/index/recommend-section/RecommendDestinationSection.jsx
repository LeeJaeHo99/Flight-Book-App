import RecommendContent from './RecommendContent';

export default function RecommendDestinationSection() {
    return (
        <section className="recommend-destination-section">
            <div className="inner">
                <h3 className="main-title">여행지 추천</h3>
                <h4 className="sub-title">유명한 여행지를 추천해드립니다.</h4>
                <RecommendContent/>
            </div>
        </section>
    );
}
