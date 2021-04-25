import { Error404 } from '../generic/Error404';
import { Link } from '../Router';

/**
 * Create alliance card.
 * 
 * @param {Object} props {
 *                            id: string,
 *                            tag: string,
 *                            name: string,
 *                            description: string,
 *                            leader: string,
 *                            countMembers: string
 *                       }
 * @returns {Object}
 */
export default function AllianceCard(props) {
    if(!props.alliance?.id) return <Error404 />;

    const { id,
            tag,
            name,
            description,
            leader,
            countMembers } = props.alliance;

    return (
        <div className="alliance">
            <div className="alliance__header">
                <div className="alliance__tag">{tag}</div>
                <div className="alliance__name">{name}</div>
            </div>
            <div className="alliance__body">
                <div className="alliance__panel">
                    <Link className="link-simple" path={`/alliances/alliance?id=${id}&type=settings`} name="Настройки"/>
                    <Link className="link-simple" path={`/alliances/alliance?id=${id}&type=members`} name="Участники"/>
                </div>
                <div className="alliance__information">
                    <div className="alliance__description">{description}</div>
                    <div><img src="/style/icons/leader.png" alt="leader"/>: {leader}</div>
                    <div><img src="/style/icons/users.png" alt="leader"/>: {countMembers}</div>
                </div>
            </div>
        </div>
    );
}