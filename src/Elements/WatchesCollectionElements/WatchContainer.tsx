interface WatchContainer {
  watchImg: string;
  watchName: string;
  watchPrice: string;
}

const WatchContainer: React.FC<WatchContainer> = ({
  watchImg,
  watchName,
  watchPrice,
}) => {
  return (
    <div className=" h-[236px] w-[149px] flex relative justify-center flex-shrink-0">
      <img
        src={watchImg}
        alt="green watch"
        className="w-[119px] h-[182px] lg:w-[240px] lg:h-[382px] z-20 flex-grow-0"
      />
      <div className="w-[149px] h-[158px] text-[8px] lg:w-[312px] lg:h-[330px] bg-black absolute bottom-0 rounded-[25px] border-1 border-[#707070] drop-shadow-lg text-white items-center flex flex-col justify-end pb-4">
        <h2> {watchName}</h2>
        <button className="bg-white text-black font-bold py-1 px-6 rounded-full">
          {watchPrice}$
        </button>
      </div>
    </div>
  );
};

export default WatchContainer;
