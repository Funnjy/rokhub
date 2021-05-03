import { Error404 } from '../generic/HTTPErrors';
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
        <>
            <div className="board">
                <div className="board__header board__header_center">
                    <div className="board__title">{`[${tag}] ${name}`}</div>
                </div>
                <div className="board__body">
                    <div className="board__text_indent board__text_align-justify">{description}</div>
                    <div><img className="icon" src="/style/icons/leader.png" alt="leader"/>: {leader}</div>
                    <div><img className="icon" src="/style/icons/users.png" alt="leader"/>: {countMembers}</div>
                </div>
            </div>
            <div className="control">
                <Link className="link-simple" path={`/alliances/alliance?id=${id}&type=members`} name="Участники" />
                <Link className="link-simple" path={`/alliances/alliance?id=${id}&type=approval`} name="Заявки" />
                <Link className="link-simple" path={`/alliances/alliance?id=${id}&type=settings`} name="Настройки"/>
            </div>
        </>
    );
}