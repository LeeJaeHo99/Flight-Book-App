'use client'

import { useState } from "react";
import WorldcupContent from "../../components/world-cup/WorldContent";

export default function WorldcupContentWrap() {
    const [separate, setSeparate] = useState("");

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
                <WorldcupContent />
            </div>
        </>
    );
}