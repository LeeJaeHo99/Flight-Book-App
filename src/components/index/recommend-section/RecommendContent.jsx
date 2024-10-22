import Image from "next/image";

export default function RecommendContent() {
    const mock = new Array(4).fill(0);
    console.log("mock: ", mock);

    return (
        <div className="recommend-content--wrap">
            <div className="recommend-content">
                <Image
                    src={"/images/index/recommend-section/japan.jpg"}
                    width={460}
                    height={280}
                    alt={"국가"}
                />
            </div>
        </div>
    );
}
