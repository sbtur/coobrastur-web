export const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='w-[1280px] max-w-7xl h-24 mx-auto px-4 flex items-center justify-between'>
      {children}
    </div>
  );
};
