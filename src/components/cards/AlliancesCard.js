import { Link } from '../Router';

/**
 * Create the alliances list.
 * 
 * @param {Object} props {
 *                           alliances: array
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
        <li className="list-zebra__item" key={alliance['id']}>
            <div className="">
                <Link className="link-simple" path={`/alliances/alliance?id=${alliance['id']}&type=show`} name={`[${alliance['tag']}] ${alliance['name']}`} />
            </div>
            <div className="board__text_green">{alliance['leader']}</div>
        </li>
    );
}