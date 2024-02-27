
interface Heading {
    color: string;
    maxWidth: string;
    content: string; 
  }

  
const Heading: React.FC<Heading> = ({color, maxWidth, content}) => {
    return (
        <h1 className="text-[50px]" style={{color:color, maxWidth:maxWidth}}> {content} </h1>

    );
  }
  
  export default Heading;
  