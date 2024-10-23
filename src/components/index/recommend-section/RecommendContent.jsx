import Image from "next/image";

export default function RecommendContent() {
    const mock = new Array(3).fill(0);
    console.log("mock: ", mock);

    return (
        <div className="recommend-content--wrap">
            {mock.map((el, i) => {
                return (
                    <div className="recommend-content">
                        <div className="destination-img--wrap">
                            <Image
                                className="destination-img"
                                src={
                                    "/images/index/recommend-section/japan.jpg"
                                }
                                width={460}
                                height={280}
                                alt={"국가"}
                            />
                        </div>
                        <div className="recommend-text--wrap">
                            <div className="destination-wrap">
                                <div className="city">Osaka</div>
                                <div className="country">
                                    <Image
                                        src={"/images/icon/location.png"}
                                        width={16}
                                        height={16}
                                        alt={"location-icon"}
                                    />
                                    <span>Japan</span>
                                </div>
                            </div>
                            <div className="rate-wrap">
                                <Image
                                    src={"/images/icon/star.png"}
                                    width={16}
                                    height={16}
                                    alt={"star-icon"}
                                />
                                <div className="rate">4.9</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
