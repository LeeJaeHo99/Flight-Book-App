import Image from "next/image";

export default async function SaleSection() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sale`);
    const result = await response.json();
    const saleContent = result.data;
    if(!response.ok){
        return <div>오류가 발생하였습니다</div>
    }
    return (
        <section className="sale-section">
            <div className="inner">
                <h3 className="main-title">최저가 항공권</h3>
                <h4 className="sub-title">할인된 항공권을 안내해드립니다.</h4>
                <div className="sale-content--wrap">
                    {saleContent.map((el, i) => {
                        let saledPrice = saleContent[i].price - (saleContent[i].price * (saleContent[i].salePercent / 100));
                        console.log('saledPrice: ', saledPrice);
                        return (
                            <div className="sale-content" key={i}>
                                <Image
                                    src={`/images/index/sale-section/${saleContent[i].country}.jpg`}
                                    width={200}
                                    height={200}
                                    alt={"asdf"}
                                />
                                <div className="sale-text--wrap">
                                    <div className="sale-text__top">
                                        <div className="sale-info">
                                            <div className="city">{saleContent[i].country}</div>
                                        </div>
                                    </div>
                                    <div className="sale-text__bot">
                                        <div className="before-price--wrap">
                                            <span className="sale-percent">
                                            {saleContent[i].salePercent} %
                                            </span>
                                            <span className="before-price">
                                            ₩ {saleContent[i].price}
                                            </span>
                                        </div>
                                        <div className="after-price">
                                            ₩ <span>{saledPrice}</span>
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
