// const Button = (props) => {
//     console.log(props)
//     return (
//     <button style={{ color: props.color }}>
//         {props.text} - {props.color.toUpperCase()}
//     </button>
//     )
// }

// Button.defaultProps = {
//     color: "black",
// }

const Button = ({text, color, children}) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e)
        console.log(text)
    } 

    return (
    <button 
        // onClick={() => {
        //     console.log(text)
        // }}
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{ color: color }}
    >
        {text} - {color.toUpperCase()}
        {children}
    </button>
    )
}

Button.defaultProps = {
    color: "black",
}

export default Button