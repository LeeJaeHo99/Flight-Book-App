'use client';

import Link from 'next/link';
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
            </div>
        </div>
    );
}
