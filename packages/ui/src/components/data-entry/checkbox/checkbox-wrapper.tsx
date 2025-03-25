export const CheckboxWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row items-start space-x-3 space-y-0">
      {children}
    </div>
  );
};
