import './prop.css'


const Props = (props) => {
    return (
      <div className={`AppCard ${props.Styles}`}>
        <img src={props.Image} alt="img" />
        <h2>{props.Title}</h2>
        <p>{props.Text}</p>
        <div id='Hidden'>{props.Hidden}</div>
      </div>
    );
  };
  
  export default Props;
  