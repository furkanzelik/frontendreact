import React, {useEffect} from "react";

function Blogs(){

    useEffect(() => {
        console.log('use effect ran')
    }, []);

    return(
        <div> Blogs </div>
    )
}

export default Blogs