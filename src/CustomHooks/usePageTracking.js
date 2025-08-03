import {useLocation} from "react-Router-dom";
import {useEffect} from "react";
import ReactGA from "react-ga4";

const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({hitType: "pageview", page: location.pathname + location.search});
    }, [location]);
};

export default usePageTracking;
