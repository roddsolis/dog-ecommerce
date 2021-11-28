
import './styles/button.css'




 function Button (props)  {

   

    return(
        <button className={props.buttonType}>{props.btntext}</button>
        
    )
    
    
}

export default Button


