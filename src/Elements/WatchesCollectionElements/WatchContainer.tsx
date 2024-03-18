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
    <div className="w-auto lg:w-1/3 flex-shrink-0">
      <div className=" h-[236px] w-[149px] lg:h-[354px] lg:w-[223px] flex relative justify-center flex-shrink-0 flex-grow-1">
        <img
          src={watchImg}
          alt="green watch"
          className="w-[119px] h-[182px] lg:w-[178px] lg:h-[273px] 2xl:w-[240px] 2xl:h-[382px] z-20"
        />
        <div className="w-[149px] h-[158px] lg:w-[223px] lg:h-[237px] text-[8px] lg:text-sm 2xl:w-[312px] 2xl:h-[330px] bg-black absolute bottom-0 rounded-[25px] border-1 border-[#707070] drop-shadow-lg text-white items-center flex flex-col justify-end pb-4 lg:gap-3">
          <h2> {watchName}</h2>
          <button className="bg-white text-black font-bold py-1 px-6 rounded-full">
            {watchPrice}$
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchContainer;
