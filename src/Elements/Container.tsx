function Container({ children }: {children: React.ReactNode}): JSX.Element {
  return (
    <div className="w-4/5 mx-auto h-full"> {children} </div>
  );
}

export default Container;
