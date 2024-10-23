import Image from 'next/image';

export default function Footer(){
    return(
        <footer>
            <div className="inner">
                <h2>
                    <Image
                        src={'/images/header/logo.png'}
                        width={50}
                        height={50}
                        alt={'logo'}
                    />
                </h2>
            </div>
        </footer>
    );
}