import MainContent from "@/components/index/MainContent";
import WorldcupSection from "@/components/index/worldcup-section/WorldcupSection";
import RecommendDestinationSection from '@/components/index/recommend-section/RecommendDestinationSection';
import ReviewSection from '@/components/index/review-section/ReviewSection';
import SaleSection from '@/components/index/sale-section/SaleSection';

export default function Home() {
    return (
        <div>
            <MainContent />
            <WorldcupSection />
            <RecommendDestinationSection/>
            <SaleSection/>
            <ReviewSection/>
        </div>
    );
}
