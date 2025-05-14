export const FilterTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-neutral-400 font-primary text-lg font-bold">
      <span className="text-primary-300">{children}</span>
    </div>
  );
};
