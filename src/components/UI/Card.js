
function Card(props) {
    return (
        <div className={props.parentClasses}>
            <div className={props.childClasses}>
                {props.children}
            </div>
        </div>
    );
}

export default Card;