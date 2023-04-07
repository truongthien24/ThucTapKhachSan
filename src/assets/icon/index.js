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
import { BookMark } from "./component/BookMark";
import { Tag } from "./component/Tag";
import { Chat } from "./component/Chat";
import { Top } from "./component/Top";
import { Logout } from "./component/Logout";
import { ServiceIcon } from "./component/ServiceIcon";
import { Paper } from "./component/Paper";
import { Like } from "./component/Like";
import { Reply } from "./component/Reply";
import { Bath } from "./component/Bath";
import { Bed } from "./component/Bed";
import { People } from "./component/People";
import { Key } from "./component/Key";
import { Swatch } from "./component/Swatch";
import { Clock } from "./component/Clock";
import { Card } from "./component/Card";
import { Money } from "./component/Money";

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
        case "bookMark": return (<BookMark {...props}/>);
        break;  
        case "tag": return (<Tag {...props}/>);
        break;  
        case "chat": return (<Chat {...props}/>);
        break;         
        case "top": return (<Top {...props}/>);
        break;
        case "logOut": return (<Logout {...props}/>);
        break;              
        case "service": return (<ServiceIcon {...props}/>);
        break;
        case "paper": return (<Paper {...props}/>);
        break;          
        case "like": return (<Like {...props}/>);
        break;
        case "reply": return (<Reply {...props}/>);
        break;    
        case "bath": return (<Bath {...props}/>);
        break;  
        case "bed": return (<Bed {...props}/>);
        break;  
        case "people": return (<People {...props}/>);
        break;  
        case "key": return (<Key {...props}/>);
        break;  
        case "swatch": return (<Swatch {...props}/>);
        break;  
        case "clock": return (<Clock {...props}/>);
        break; 
        case "card": return (<Card {...props}/>);
        break;   
        case "money": return (<Money {...props}/>);
        break;   
        default: return <></>;
    }
}
