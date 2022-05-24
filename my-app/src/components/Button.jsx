export default function Button(props) {
    return (
      <a href={props.linkTo}>
        <button className="btn"> {props.prompt} </button>
      </a>
    );
  }
  

  