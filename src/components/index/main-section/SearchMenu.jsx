export default function SearchMenu({ enter }) {
    return (
        <div className={`search-menu--wrap ${enter}`}>
            <div className="search-menu__title">항공권 검색</div>
            <div className="search-menu__input-wrap">
                <div className="departure-wrap"></div>
                <div className="destination-wrap"></div>
                <div className="date-component">
                    
                </div>
            </div>
        </div>
    );
}
