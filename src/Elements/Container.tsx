function Container({ children }: {children: React.ReactNode}): JSX.Element {
  return (
    <div className="w-screen px-4 lg:w-10/12 mx-auto h-full overflow-hidden"> 
    {children} 
    </div>
  );
}

export default Container;
