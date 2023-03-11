import { Canlendar } from "./component/Canlendar";
import { Check } from "./component/Check";
import { Phone } from "./component/Phone"
import { Search } from "./component/Search";
import { Warning } from "./component/Warning";
import { Star } from "./component/Star";
import { Building } from "./component/Building";
import { More } from "./component/More";
import { Location } from "./component/Location";
import { Bank } from "./component/Bank";

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
        case "star": return (<Star {...props}/>);
        break;
        case "building": return (<Building {...props}/>);
        break;
        case "more": return (<More {...props}/>);
        break;
        case "location": return (<Location {...props}/>);
        break;
        case "bank": return (<Bank {...props}/>);
        break;  
        default: return <></>;
    }
}
