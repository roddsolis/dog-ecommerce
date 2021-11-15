
import './styles/button.css'
// import Icon from'../img/Cart-icon-normal.svg'




export default function Button (props)  {

   

    return(
        <button className={props.buttonType}>{props.btntext}</button>
        
    )
    
    
}


