import Image from 'next/image';
import Link from 'next/link';

export default function Header(){
    return(
        <header>
            <div className="inner">
                <Link className="logo-wrap" href={'/'}>
                    <Image
                        className='logo'
                        src={'/images/header/logo.png'}
                        width={50}
                        height={50}
                        alt={'로고'}
                    />
                </Link>
                <div className="menu-wrap">
                    <ul>
                        <li><Link href={'/'}>공지사항</Link></li>
                        <li><Link href={'/'}>예약확인</Link></li>
                        <li><Link href={'/'}>항공권찾기</Link></li>
                        <li><Link href={'/'}>여행월드컵</Link></li>
                    </ul>
                    <div className="profile-wrap">
                        <Image
                            src={'/images/header/profile__abc.png'}
                            width={40}
                            height={40}
                            alt={'profile'}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}