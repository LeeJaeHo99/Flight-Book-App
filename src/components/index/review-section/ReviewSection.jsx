import Image from 'next/image';
import Star from './Star';

export default function ReviewSection(){
    const mock = new Array(3).fill(0);

    return(
        <section className="review-section">
            <div className="inner">
                <h3 className="main-title">사용자 리뷰</h3>
                <h4 className="sub-title">사용자들의 리뷰를 안내해드립니다.</h4>
                <div className="review-content--wrap">
                    {
                        mock.map(() => {
                            return(
                                <div className="review-content">
                                    <div className="review-content__profile">
                                        <div className="profile-wrap">
                                            {/* <Image/> */}
                                            🥰
                                        </div>
                                    </div>
                                    <div className="review-content__text-wrap">
                                        <Star/>
                                        <div className='review-text'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores et, mollitia hic repudiandae sapiente veniam adipisci beatae, aspernatur praesentium saepe totam quae nemo molestiae dignissimos modi maiores. Tempore, cupiditate obcaecati.
                                        </div> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}