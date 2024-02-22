
function NavbarSpacing({ children }: {children: React.ReactNode}): JSX.Element{
    return (
       
        <div className="flex justify-between h-full items-center">
            {children}
        </div>
    );
  }
  
  export default NavbarSpacing;
  
