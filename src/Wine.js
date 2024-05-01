import "./style.css";

export default function Wine(props) {
    return (
      <div className="common">
       <p className="title">{props.title}</p>
       <p className="description">{props.description}</p>
       <p className="rating">{props.rating}</p>
      </div>
    );
  }
  