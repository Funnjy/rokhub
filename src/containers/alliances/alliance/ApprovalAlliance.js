import React from 'react';
import ApprovalCard from '../../../components/cards/ApprovalCard';

/**
 * Component controls approval of alliance.
 */
class ApprovalAlliance extends React.Component {
    constructor(props) {
        super(props);
        this.handlerOnClick = this.handlerOnClick.bind(this);
    }

    /**
     * @todo Доделать обработку кнопок
     */
     handlerOnClick(event) {
        console.log(event.target.id);
    }

    render() { 
        return (
            <ApprovalCard
                alliance={this.props.alliance}
                handlerOnClick={this.handlerOnClick}
            />
        );
    }
}

export default ApprovalAlliance;