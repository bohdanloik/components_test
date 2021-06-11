import { Checked } from '../Rating/Rating';
import './Star.css';
type StarPropsType = {
    checked: boolean
    setRatingCount: () => void
}
export function Star(props: StarPropsType) {
    return <div onClick={()=> {
        props.setRatingCount();
    }} className={props.checked ? 'star checked' : 'star'}> STAR</div>
}