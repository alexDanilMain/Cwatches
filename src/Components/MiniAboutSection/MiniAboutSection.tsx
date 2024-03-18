import { useEffect } from "react";
import Container from "../../Elements/Container";
import Heading from "../../Elements/Heading";
import RandomGuyWithWatch from "../../imgs/MiniAboutSection/RandomGuyWithWatch.png";

function MiniAboutSection() {
  let headingMaxWidth: string = "";
  useEffect(() => {
    headingMaxWidth = "219px";
    if (window.innerWidth < 1024) {
      headingMaxWidth = "auto";
    }
  }, [window.innerWidth]);
  return (
    <div className="bg-zinc-100 pt-12 lg:py-12 w-full relative flex flex-col">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <hgroup className="flex flex-col items-center lg:items-start gap-12">
            <Heading
              maxWidth={headingMaxWidth}
              color="black"
              content="About Cwatches"
            />

            <p className="max-w-[337px] text-[12px] text-center lg:text-left">
              Crafting Time, Creating Memories Welcome to CustomWatches, where
              time becomes a canvas for self-expression. At CustomWatches, we
              believe that a watch is more than just a timekeeping device; it’s
              a personal statement, an embodiment of individuality.
            </p>

            <a className="font-bold py-2 px-8 bg-black rounded-full text-white">
              {" "}
              Know more
            </a>
          </hgroup>

        </div>
      </Container>
          <img src={RandomGuyWithWatch} alt="" className="self-end mt-8 max-w-[300px] md:max-w-[500px] lg:max-w-[570px] lg:absolute lg:top-0 lg:right-0 lg:mt-0" />

    </div>
  );
}

export default MiniAboutSection;
