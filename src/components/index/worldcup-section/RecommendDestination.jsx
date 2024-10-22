import Image from "next/image";
import { style } from '@/styles/css/style.css';

export default function RecommendDestination() {
    return (
        <div className="recommend-destination" style={{backgroundImage: 'url(`/images/index/worldcup-section/worldcup-section-bg.jpg`)'}}>
            <h4 className="section-title">추천된 여행지 ✈️</h4>
        </div>
    );
}
