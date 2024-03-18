import { useEffect } from "react";
import Container from "../../Elements/Container";
import Heading from "../../Elements/Heading";
import watchCollection from "../../imgs/Customize/Grouped-Watches.png";



function BlackWallSection() {


  let headingMaxWidth:string = ""; 
  useEffect(()=>{
    headingMaxWidth = "207px";
    if(window.innerWidth <1024){
      headingMaxWidth = "auto"
    }
  },[window.innerWidth])

  return (
    <div className="bg-black-wall bg-cover bg-center text-white py-12">
        <Container>
            <div className="flex flex-col items-center gap-12">
                <Heading content="Customize your Model Style" maxWidth={headingMaxWidth} color="white"/>
                <div className="flex flex-col gap-4 items-center ">
                    <img src={watchCollection} alt="3 Watches" className="w-[320px] md:w-[420px] lg:w-[500px]" />
                    <p> 250$ </p>
                </div>
                <a className="font-bold py-2 px-8 bg-white rounded-full text-black"> Select</a>
            </div>
      </Container>
    </div>
  );
}

export default BlackWallSection;
