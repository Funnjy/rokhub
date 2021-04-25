import { Link } from '../Router';

/**
 * Create the alliances list.
 * 
 * @param {Object} props {
 *                          alliances: array
 *                       }
 * @returns {Object || string}
 */
export default function AlliancesCard(props) {
    if(!props.alliances.length) return <div>Альянсы не найдены</div>;

    return (
        <ul className="list-zebra">
            {props.alliances.map(alliance => allianceCard(alliance))}
        </ul>
    );
}

/**
 * Create the alliance item.
 * 
 * @param {Object} alliance 
 * @returns {Object}
 */
function allianceCard(alliance) {
    return (
        <li className="alliances__list-item list-zebra__item" key={alliance['id']}>
            <div className="alliance__info">
                <Link className="link-simple" path={`/alliances/alliance?id=${alliance['id']}&type=show`} name={`[${alliance['tag']}]`} />
                <div className="alliance__name">{alliance['name']}</div>
            </div>
            <div className="alliance__leader">{alliance['leader']}</div>
        </li>
    );
}