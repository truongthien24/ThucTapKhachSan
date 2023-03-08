import { Canlendar } from "./component/Canlendar";
import { Check } from "./component/Check";
import { Phone } from "./component/Phone"
import { Search } from "./component/Search";
import { Warning } from "./component/Warning";

export const Icon = (props) => {
    switch(props.name) {
        case "phone": return (<Phone {...props}/>);
        break;
        case "calendar": return (<Canlendar {...props}/>);
        break;
        case "check": return (<Check {...props}/>);
        break;
        case "warning": return (<Warning {...props}/>);
        break;
        case "search": return (<Search {...props}/>);
        break;
        default: return <></>;
    }
}