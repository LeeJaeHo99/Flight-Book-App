import WorldcupContentWrap from '../../components/world-cup/WorldcupContentWrap';

export default async function Worldcup() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/worldcup`,
        {cache: 'force-cache'},
    );
    const worldcup = await response.json();

    return (
        <div className="worldcup-page">
            <div className="inner">
                <h3 className="main-title">여행지 이상형 월드컵 🏆</h3>
                <h4 className="sub-title">
                    10개의 이지선다형 문제를 선택하여
                    <br />
                    나에게 맞는 여행지를 추천받을 수 있습니다.
                </h4>
                <WorldcupContentWrap worldcup={worldcup}/>
            </div>
        </div>
    );
}