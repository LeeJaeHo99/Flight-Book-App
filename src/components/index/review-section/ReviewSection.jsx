import ReviewContent from "./ReviewContent";

export default function ReviewSection() {
    const mock = new Array(3).fill(0);

    return (
        <section className="review-section">
            <div className="inner">
                <h3 className="main-title">사용자 리뷰</h3>
                <h4 className="sub-title">사용자들의 리뷰를 안내해드립니다.</h4>
                <div className="review-content--wrap">
                    {mock.map(() => (<ReviewContent />))}
                </div>
            </div>
        </section>
    );
}
