"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WorldcupContentWrap(worldcup) {
    const router = useRouter();
    const [separate, setSeparate] = useState("");
    const [open, setOpen] = useState('open');
    const [worldcupIndex, setWorldcupIndex] = useState(0);
    const addIndex = () => {
        setTimeout(() => {
            setWorldcupIndex(worldcupIndex + 1);
        }, 1500);
    };

    const [score, setScore] = useState(0);
    const addScore = () => {
        setTimeout(() => {
            setScore(score + 1);
        }, 1500);
    };

    const [clickedLeft, setClickedLeft] = useState("");
    const clickAniLeft = () => {
        setClickedLeft("clicked");

        setTimeout(() => {
            setClickedLeft("");
        }, 1500);
    };
    const [clickedRight, setClickedRight] = useState("");
    const clickAniRight = () => {
        setClickedRight("clicked");

        setTimeout(() => {
            setClickedRight("");
        }, 1500);
    };

    let worldcupData = worldcup.worldcup.data[worldcupIndex];
    let worldcupLTitle = worldcupData.lTitle;
    let worldcupLImg = worldcupData.lImg;
    let worldcupRTitle = worldcupData.rTitle;
    let worldcupRImg = worldcupData.rImg;

    return (
        <>
            <button
                className="btn-component start-btn"
                onClick={() => {
                    setSeparate("bigger");
                }}
            >
                시작하기
            </button>
            <div className={`${separate} worldcup-content--wrap`}>
                <div className="worldcup-content">
                    <h3 className="worldcup-title">
                        <span>
                            여행지 이상형 월드컵{" "}
                            <span className="content-percent">
                                ( <span>{worldcupIndex + 1}</span> / 10 )
                            </span>
                        </span>
                        <div
                            className="process-bar"
                            style={{ width: `${worldcupIndex * (100 / 9)}%` }}
                        ></div>
                    </h3>
                    <div className="worldcup-wrap">
                        <div
                            className={`worldcup ${clickedLeft}`}
                            onClick={() => {
                                addIndex();
                                clickAniLeft();
                            }}
                        >
                            <Image
                                src={`/images/worldcup/${worldcupLImg}.png`}
                                width={840}
                                height={840}
                                alt={"월드컵 이미지"}
                            />
                            <h5 className="worldcup-title worldcup-title__left">
                                {worldcupLTitle}
                            </h5>
                        </div>
                        <div
                            className={`worldcup ${clickedRight}`}
                            onClick={() => {
                                addIndex();
                                clickAniRight();
                                addScore();
                            }}
                        >
                            <Image
                                src={`/images/worldcup/${worldcupRImg}.png`}
                                width={840}
                                height={840}
                                alt={"월드컵 이미지"}
                            />
                            <h5 className="worldcup-title worldcup-title__right">
                                {worldcupRTitle}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
