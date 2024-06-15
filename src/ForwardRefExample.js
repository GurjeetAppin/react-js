import React,{forwardRef} from "react"; // forwardRef using as a wrapper like that forwardRef(function_name) and the value is get using the "ref" parameter
function ForwardRefExample(props, inputRef){
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}
export default  forwardRef(ForwardRefExample);