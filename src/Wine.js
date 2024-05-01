import "./style.css";
import heart from "./heart.png"

export default function Wine(props) {
  let isLike=true;
    return (
      <div className="common">
       <p className="title">{props.title}</p>
       <p className="description">{props.description}</p>
       <p className="rating">{props.rating}</p>
       {isLike == props.like ? <img src={heart} /> : null}
      </div>
    );
  }
  