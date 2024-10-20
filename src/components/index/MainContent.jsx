export default function MainContent(){
    return(
        <section className="main-wrap">
            <div className="inner">
                <video
                    src="/videos/index/main-bg.mp4"
                    autoPlay
                    muted
                    loop
                ></video>
                <h1 className="main-text">
                    Air-Ticket-App
                </h1>
                <h2 className="sub-text">
                    당신의 편안한 비행을 위해
                </h2>
            </div>
        </section>
    );
}