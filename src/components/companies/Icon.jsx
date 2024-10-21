const Icon = (props) => {
    return (
        <div>
            <a href={props.Link}><img src={props.Pic} alt="img"/></a>
        </div>
    );
};

export default Icon;
