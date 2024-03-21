const ShimmerCard = () => {
    return (
      <div className="flex flex-col gap-3 bg-slate-100 p-4">
        <div className="w-80 h-[200px] bg-slate-200" ></div>
        <div className="w-40 h-[24px] bg-slate-200"></div>
        <div className="flex gap-8">
          <div className="w-20 h-[18px]  bg-slate-200"></div>
          <div className="w-20 h-[18px]  bg-slate-200"></div>
        </div>
        <div className="w-32 h-[20px] bg-slate-200"></div>
        <div className="w-20 h-[20px] bg-slate-200"></div>
      </div>
    );
  };
  export default ShimmerCard;