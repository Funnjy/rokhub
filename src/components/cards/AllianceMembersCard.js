import { Link } from "../Router"

/**
 * Show alliance members.
 * 
 * @param {Object} props {
 *                            alliance: Object
 *                       }
 * @returns {Object}
 */
export default function AllianceMembersCard(props) {
    if(!props.alliance?.members?.length) return <div className="alert error">Нет участников</div>;

    return (
        <div className="alliance-members">
            <div>Участники</div>
            <ul className="list-zebra">
                {props.alliance.members.map(member => memberCard(member))}
            </ul>
        </div>
    )
}

/**
 * 
 * @param {Object} member {
 *                             id: string,
 *                             nickname: string
 *                        }
 * @returns {Object}
 */
function memberCard(member) {
    const { id, nickname } = member;
    const path = `/users/user?id=${id}`;

    return (
        <li className="list-zebra__item" key={id}>
            <Link className="link-simple" path={path} name={nickname} />
        </li>
    );
}
