import Container from "../../Elements/Container";
import Heading from "../../Elements/Heading";
import WatchContainer from "../../Elements/WatchesCollectionElements/WatchContainer";
import greenWatch from "../../imgs/watches/greenWatch.png";

export default function WatchesCollection(){

    return(
        <section className="bg-white">
            <Container>
                <main className="py-12 flex flex-col items-center gap-12">
                    <Heading  maxWidth="240px" color="black" content={"Collection"} />

                    <div className="flex gap-6 w-full justify-start ml-6 lg:ml-0 overflow-x-scroll lg:overflow-x-hidden">
            
                    <WatchContainer watchImg={greenWatch} watchName="Sport CWATCH" watchPrice="250" />

                    <WatchContainer watchImg={greenWatch} watchName="Sport CWATCH" watchPrice="250" />

                    <WatchContainer watchImg={greenWatch} watchName="Sport CWATCH" watchPrice="250" />

                    <WatchContainer watchImg={greenWatch} watchName="Sport CWATCH" watchPrice="250" />

                    </div>

                </main>
            </Container>
        </section>
    )
}