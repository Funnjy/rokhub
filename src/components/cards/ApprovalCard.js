import { Button } from '../generic/Buttons';
import { Link } from '../Router';

/**
 * Approval of alliance.
 * 
 * @param {Object} props {
 *                            user: Object,
 *                            alliance: Object,
 *                            handlerOnClick: function,
 *                       }
 * @returns 
 */
export default function ApprovalCard(props) {
    if(props.alliance === null || props.alliance.approval.length === 0) return <div className="alert error">Заявок нет</div>;
 
    return (
        <ul className="list-zebra">
            {props.alliance.approval.map(approval => approvalCardItem(approval, props.handlerOnClick))}
        </ul>
    );
}

/**
 * 
 * @param {Object} approval {
 *                              id: number,
 *                              nicknameUser: string,
 *                              idUser: number
 *                          }
 * @param {Function} handlerOnClick
 * @returns {Object}
 */
function approvalCardItem(approval, handlerOnClick) {
    const { id, nicknameUser, idUser } = approval;

    return (
        <li id={id} key={id} className="list-zebra__item_flex">
            <Link className="link-simple" path={`/users/user?id=${idUser}`} name={nicknameUser} />
            <div className="">
                <Button id={`${id}_1`} name={'v'} className="button" onClick={handlerOnClick} />
                <Button id={`${id}_0`} name={'x'} className="button button_m-l button_red" onClick={handlerOnClick} />
            </div>
        </li>
    );
}