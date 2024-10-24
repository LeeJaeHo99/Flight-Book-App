import Image from "next/image";

export default function SaleSection() {
    const mock = new Array(12).fill(0);
    return (
        <section className="sale-section">
            <div className="inner">
                <h3 className="main-title">최저가 항공권</h3>
                <h4 className="sub-title">할인된 항공권을 안내해드립니다.</h4>
                <div className="sale-content--wrap">
                    {mock.map(() => {
                        return (
                            <div className="sale-content">
                                <Image
                                    src={"/images/worldcup/airplane.png"}
                                    width={200}
                                    height={200}
                                    alt={""}
                                />
                                <div className="sale-text--wrap">
                                    <div className="sale-text__top">
                                        <div className="sale-info">
                                            <div className="city">Osaka</div>
                                        </div>
                                        <div className="sale-company">
                                            <Image
                                                src={
                                                    "/images/company-logo/koreanair--logo.png"
                                                }
                                                width={20}
                                                height={20}
                                                alt={"company-logo"}
                                            />
                                            <span>대한항공</span>
                                        </div>
                                    </div>
                                    <div className="sale-text__bot">
                                        <div className="before-price--wrap">
                                            <span className="sale-percent">
                                                10%
                                            </span>
                                            <span className="before-price">
                                                20000
                                            </span>
                                        </div>
                                        <div className="after-price">
                                            ₩ <span>18000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
