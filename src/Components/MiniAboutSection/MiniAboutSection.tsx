import Container from "../../Elements/Container";
import Heading from "../../Elements/Heading";
import RandomGuyWithWatch from "../../imgs/MiniAboutSection/RandomGuyWithWatch.png";


function MiniAboutSection() {
  return (
    <div className="bg-zinc-100 py-12 w-full ">
      <Container>
        <div className="flex flex-col items-center gap-12">
          <Heading maxWidth="219px" color="black" content="About Cwatches" />

          <p className="max-w-[337px] text-[12px] text-center">
            Crafting Time, Creating Memories Welcome to CustomWatches, where
            time becomes a canvas for self-expression. At CustomWatches, we
            believe that a watch is more than just a timekeeping device; it’s a
            personal statement, an embodiment of individuality.
          </p>

          <a className="font-bold py-2 px-8 bg-black rounded-full text-white">
            {" "}
            Know more
          </a>
        
        <img src={RandomGuyWithWatch} alt="" />
        </div>
      </Container>
    </div>
  );
}

export default MiniAboutSection;
