const Container = ({ children }) => {
  return (
    <div
      className="overflow-y-hidden
      bg-primary"
    >
      {children}
    </div>
  );
};

export default Container;
