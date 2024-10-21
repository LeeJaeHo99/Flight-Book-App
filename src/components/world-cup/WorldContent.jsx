'use client';

import Image from 'next/image';

export default function WorldcupContent(){

    return(
        <div className="worldcup-wrap">
            <div className="worldcup">
                <Image src={'/'} width={16} height={16} alt={'월드컵 이미지'}/>
                <h5 className="worldcup-title"></h5>
            </div>
            <div className="worldcup">
                <Image src={'/'} width={16} height={16} alt={'월드컵 이미지'}/>
                <h5 className="worldcup-title"></h5>
            </div>
        </div>
    );
}