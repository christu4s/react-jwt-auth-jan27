
const HigherOrderComponent = (Component)=> {
   const NewComponent = (props) => {
    return (
        <div className="higherOrder">
            <Component {...props}/>
        </div>
    );
   }

   return NewComponent;
}

export default HigherOrderComponent