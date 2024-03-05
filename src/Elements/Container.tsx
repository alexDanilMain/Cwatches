function Container({ children }: {children: React.ReactNode}): JSX.Element {
  return (
    <div className="w-screen px-4 md:w-4/5 mx-auto h-full overflow-hidden"> 
    {children} 
    </div>
  );
}

export default Container;
