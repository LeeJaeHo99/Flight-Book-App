import Image from 'next/image';

export default function Star() {
    return (
        <div className="star-wrap">
            <Image
                src={"/images/icon/star.png"}
                width={32}
                height={32}
                alt={"star-icon"}
            />
            <Image
                src={"/images/icon/star.png"}
                width={32}
                height={32}
                alt={"star-icon"}
            />
            <Image
                src={"/images/icon/star.png"}
                width={32}
                height={32}
                alt={"star-icon"}
                style={{filter: 'grayScale(1)'}}
            />
            <Image
                src={"/images/icon/star.png"}
                width={32}
                height={32}
                alt={"star-icon"}
                style={{filter: 'grayScale(1)'}}
            />
            <Image
                src={"/images/icon/star.png"}
                width={32}
                height={32}
                alt={"star-icon"}
                style={{filter: 'grayScale(1)'}}
            />
        </div>
    );
}
