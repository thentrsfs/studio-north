const Cursor = ({ className, style, onClick } : { className?: string; style?: React.CSSProperties; onClick?: () => void }) => {
  return (
    <div
      className={`z-9 flex flex-col gap-2 select-none transition-transform duration-100 ease-out ${className}`}
      style={style}
      onClick={onClick}
    >
      <div className="w-25 h-25 rounded-full text-sm font-plus bg-offwhite border-offwhite text-ink flex items-center justify-center font-bold uppercase tracking-widest">
        View
      </div>
      <div className="text-offwhite flex flex-col items-center font-plus text-xs font-semibold tracking-wide">
        <span>STUDIO/NORTH®</span>
        <span>2013-∞</span>
      </div>
    </div>
  );
};

export default Cursor;
