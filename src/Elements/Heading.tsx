
interface Heading {
    color: string;
    maxWidth: string;
    content: string; 
  }

  
const Heading: React.FC<Heading> = ({color, maxWidth, content}) => {
    return (
        <h1 className="text-[28px] lg:text-[50px] text-center z-20" style={{color:color, maxWidth:maxWidth}}> {content} </h1>

    );
  }
  
  export default Heading;
  