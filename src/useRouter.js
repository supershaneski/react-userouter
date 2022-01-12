import { useState, useEffect } from 'react'

export const useRouter = (routes, baseURL = '', InitPage, NotFoundPage) => {
    
    const [myContext, setMyContext] = useState({})
    const [routeKey, setRouteKey] = useState('')
    const [started, setStarted] = useState(true)
    
    useEffect(() => {

        let _raw_path = window.location.pathname;
        
        let n0 = _raw_path.indexOf("/");
        if(n0 > 0) {
            _raw_path = "/" + _raw_path;
        }

        if(_raw_path.length > 1) {
            let c0 = _raw_path.slice(-1);
            if(c0 === "/") {
                _raw_path = _raw_path.substring(0, _raw_path.length - 1);
            }
        }
        

        let n1 = (_raw_path.match(/\//g)||[]).length;
        
        let list_paths = [];
        let list_parms = [];

        if(n1 > 1) {
            
            let _str = _raw_path.substr(1)
            let tokens = _str.split("/")

            let prev = "";
            for(let i = 0; i < tokens.length; i++) {
                prev += "/" + tokens[i];
                list_paths.push(prev);
                list_parms[prev] = _raw_path.replace(prev, "");
            }
            list_paths.reverse()

        } else {
            list_paths = [_raw_path];
        }

        let params = "";
        let kpath = "";

        for(let i = 0; i < list_paths.length; i++) {

            if(list_paths[i].indexOf(baseURL) !== 0) continue;
            
            let _rkey = list_paths[i].replace(baseURL, "");
            _rkey = _rkey.length === 0 && list_paths.length === 1 ? "/" : _rkey

            const p = routes[_rkey];
            
            if(typeof p !== "undefined") {
                
                kpath = _rkey;
                
                if(typeof list_parms[baseURL + _rkey] !== "undefined") {
                    params = list_parms[baseURL + _rkey].substr(1);
                }

                break;

            }
            
        }
        
        setRouteKey(kpath)
        setStarted(false)

        const h = window.location.hash.length > 0 ? window.location.hash.substring(1) : '';
        const s = window.location.search.length > 0 ? window.location.search.substring(1) : '';

        const context = {
            param: params,
            hash: h,
            query: s,
        }

        setMyContext(context)

    }, [routes, baseURL])

    const PageNotFound = () => {
        return (
            <span>Page Not Found</span>
        )
    }

    const LoadingPage = () => {
        return (
            <span>Loading...</span>
        )
    }

    return (props) => {

        if(routeKey.length === 0 && started) {

            const LoadPage = InitPage || LoadingPage

            return <LoadPage />

        }
        
        const NotFound = NotFoundPage || PageNotFound
        const Component = routeKey ? routes[routeKey] : () => <NotFound />

        return (
            <>
            <Component context={myContext} {...props} />
            </>
        )
    }

}