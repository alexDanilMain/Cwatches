import Container from "../../Elements/Container";
import Heading from "../../Elements/Heading";
import greenWatch from "../../imgs/watches/greenWatch.png";

export default function WatchesCollection(){

    return(
        <div className="bg-white">
            <Container>
                <main className="py-28">
                    <Heading  maxWidth="240px" color="black" content={"Collection"} />
                    <div className="flex gap-24 ">
                        <button className="w-11 h-11 border-black border-8 border-r-white border-t-white rounded-md rotate-45"></button>
                        <div className=" h-[494px] w-80 flex relative justify-center">
                            <img src={greenWatch} alt="green watch" className="w-[240px] h-[382px] z-20" />
                            <div className="w-[312px] h-[330px] bg-black absolute bottom-0 rounded-[60px] border-1 border-[#707070] drop-shadow-lg"></div>
                        </div>
                    </div>
                </main>
            </Container>
        </div>
    )
}