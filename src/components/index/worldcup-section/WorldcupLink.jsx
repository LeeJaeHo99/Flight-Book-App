'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WorldcupLink() {
    const router = useRouter();
    const goToWorldcup = () => {
        router.push('/worldcup');
    }

    return (
        <div className="worldcup-link" onClick={goToWorldcup}>
            <h4 className="section-title">월드컵 🏆</h4>
            <div className="link-wrap">
                <Link href={"/"}>바로가기</Link>
                <Image
                    src={"/images/icon/right-arrow.png"}
                    width={16}
                    height={16}
                    alt={"화살표아이콘"}
                />
            </div>
        </div>
    );
}
