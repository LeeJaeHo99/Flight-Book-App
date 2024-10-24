import Image from "next/image";
import Star from "./Star";

export default function ReviewContent() {
    return (
        <div className="review-content">
            <div className="review-content__profile">
                <div className="profile-wrap">
                    {/* <Image/> */}
                    🥰
                </div>
            </div>
            <div className="review-content__text-wrap">
                <Star />
                <div className="review-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolores et, mollitia hic repudiandae sapiente veniam
                    adipisci beatae, aspernatur praesentium saepe totam quae
                    nemo molestiae dignissimos modi maiores. Tempore, cupiditate
                    obcaecati.
                </div>
            </div>
        </div>
    );
}
