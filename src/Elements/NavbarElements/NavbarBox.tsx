function NavbarBox({ children }: {children: React.ReactNode}): JSX.Element {
    return (
      <div className="w-full h-[85px] bg-white"> {children} </div>
    );
  }
  
  export default NavbarBox;
  