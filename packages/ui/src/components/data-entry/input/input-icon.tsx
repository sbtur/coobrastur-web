export const InputIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
      {children}
    </div>
  );
};
