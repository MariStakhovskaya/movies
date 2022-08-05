import React, {useState} from "react";




const Rating = () => {

    const [valueSelect, setValueSelect] = useState('all')

    return (
        <>
            <select onChange={(e)=>{setValueSelect(e.target.value)}}>
        <option value="all">all</option>
        <option value="six">6 and more</option>
        <option value="seven">7 and more</option>
        <option value="eight">8 and more</option>
        <option value="nine">9 and more</option>
        <option value="ten">10</option>

            </select>
            {valueSelect}
        </>
    )
}


export default Rating

