import React, { useContext, useEffect } from 'react';
import { Error404 } from './generic/HTTPErrors';

/**
 * Create routing component.
 * 
 * The state has properties: 
 * pathname is current pathname in url,
 * params are current params in url.
 * handlerClickLink is function, it changes the url in browser and the context state.
 */
const LocationContext = React.createContext();
export class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: this.props.location.pathname,
            params: this.props.location.search.slice(1)
        };
        this.handlerClickLink = this.handlerClickLink.bind(this);
    }

    /**
     * Add the popstate listener for navigation in browser history
     * and change context state.
     */
    componentDidMount() {
        this.changeHistory = (event) => {
            const { pathname, search } = document.location;
            this.handlerClickLink(pathname, search.slice(1), true);
        };
        window.addEventListener('popstate', this.changeHistory);
    }
 
    componentWillUnmount() {
        window.removeEventListener('popstate', this.changeHistory);
    }

    handlerClickLink(pathname, params, isEventPopstate) {
        if(!isEventPopstate) window.history.pushState({...this.state}, null, `${pathname}${(params)?'?' + params:''}`);
        this.setState({ pathname, params });
    }
    
    render() {
        return (
            <LocationContext.Provider value={
                {
                    location: this.state,
                    onClick: this.handlerClickLink
                }
            }>
                {this.props.children}
            </LocationContext.Provider>
        );
    }
}

/**
 * Show component.
 * All users have access to this component.
 * 
 * @param {Object} props {
 *                            component: Object,
 *                            pathname: string
 *                       }
 * @returns {Object}
 */
export function Route(props) {
    const Component = props.component;
    const context = useContext(LocationContext);
    const parsedParams = parseParams(context.location.params);

    return <Component params={parsedParams} />;
}

/**
 * Protected component with access for users or guests.
 * The field accessFor responsible for access (user or guest).
 * 
 * @param {Object} props {
 *                           accessToken: string,
 *                           accessFor: string,
 *                           pathname: string,
 *                           component: Object,
 *                       }
 * @returns {Object}
 */
export function ProtectedRoute(props) {
    const { accessToken, component: Component, accessFor } = props;
    const context = useContext(LocationContext);
    const parsedParams = parseParams(context.location.params);

    if(accessFor === 'user' && !accessToken) {
        return <div className="alert alert-warning">Доступ только для авторизованных</div>;
    }

    if(accessFor === 'guest' && accessToken) {
        // return <Redirect to={window.history.state.pathname} />;
        return <div className="alert alert-warning">Вы успешно авторизовались. Добро пожаловать</div>;
    }

    return <Component params={parsedParams} />;
}

/**
 * Creates a Link component with or without icon.
 * If you need an icon put the property src (path to the icon).
 * This component changes the fields path and params in context state.
 * 
 * 
 * @param {Object} props {
 *                           className: string,
 *                           path: string,
 *                           name: string,
 *                           src: string
 *                       }
 * @returns {Object}
 */
export function Link(props) {
    const [ pathname, params ] = props.path.split('?');
    const context = useContext(LocationContext);

    return (
        <a className={props.className} onClick={() => context.onClick(pathname, params)}>
            {props.src ? <img className="icon" src={props.src} alt={props.name} /> : null} {props.name}
        </a>
    );
}

/**
 * Shows route component.
 * All children has the property pathname,
 * if pathname is equal to pathanme in context. shows component else
 * shows an error page not found.
 * 
 * @param {Object} props 
 * @returns {Object}
 */
export function Switch(props) {
    const context = useContext(LocationContext);
    const Component = props.children.find(child => 
        child.props.pathname === context.location.pathname || `${child.props.pathname}/` === context.location.pathname);
    
    return Component || <Error404 />;
}

/**
 * Redirect component.
 * 
 * @param {Object} props {
 *                            to: string
 *                       }
 * @returns {null}
 */
export function Redirect(props) {
    const context = useContext(LocationContext);
    useEffect(() => context.onClick(props.to, props.params));
    return null;
}

/**
 * Gets string params and return object of params.
 * 
 * @param {string} params 
 * @returns {Object}
 */
function parseParams(params) {
    const parsedParams = {};
    params?.split('&')?.forEach(param => {
        let [key, value] = param.split('=');
        parsedParams[key] = value;
    });

    return parsedParams;
}