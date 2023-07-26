const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={className}>
      <p className="paragraph">{text}</p>
    </div>
  );
  //  Write your code here.
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="box1" text="small" />
      <Box className="box2" text="Medium" />
      <Box className="box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
