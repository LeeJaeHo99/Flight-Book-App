import Image from "next/image";
import Link from "next/link";

export default async function RecommendContent() {
    let content = [];
    let randomContent = [];

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recommend`);
        const result = await response.json();
        if(result.success){
            content = result.data;
        }else{
            throw new Error(result.error)
        }
        function getRandomContent(arr, num) {
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, num);
        }
        randomContent = getRandomContent(content, 3);
    }
    catch(e){
        console.error(e);
        content = [];
    }
    if (content.length === 0) {
        return <p>데이터를 불러오지 못하였습니다.</p>;
    }

    return (
        <div className="recommend-content--wrap">
            {randomContent.map((el, i) => {
                return (
                    <div className="recommend-content">
                        <Link 
                            href={`/country/${randomContent[i].country}`}
                            className="destination-img--wrap">
                            <Image
                                className="destination-img"
                                src={
                                    `/images/index/recommend-section/${randomContent[i].country}.jpg`
                                }
                                width={460}
                                height={280}
                                alt={"국가"}
                            />
                        </Link>
                        <div className="recommend-text--wrap">
                            <div className="destination-wrap">
                                <div className="city">{randomContent[i].city}</div>
                                <div className="country">
                                    <Image
                                        src={"/images/icon/location.png"}
                                        width={16}
                                        height={16}
                                        alt={"location-icon"}
                                    />
                                    <span>{randomContent[i].country}</span>
                                </div>
                            </div>
                            <div className="rate-wrap">
                                <Image
                                    src={"/images/icon/star.png"}
                                    width={16}
                                    height={16}
                                    alt={"star-icon"}
                                />
                                <div className="rate">{randomContent[i].rate}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
