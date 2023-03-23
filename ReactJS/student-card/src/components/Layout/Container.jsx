import { useState } from "react"
import { BgColorStateContext }  from "../../contexts/BgColorContext"

export default function Container({children, hvCenter = false, bgColor}) {
    const [bgState, setBgState] = useState(true)

    const bgHandler = () => {
        setBgState(!bgState)
    }

    let childComponent = null
    if (hvCenter) {
        childComponent = <div className="flex justify-center items-center h-screen">{children}</div> 
    }

    return (
        <BgColorStateContext.Provider value={{state: bgState, handler: bgHandler}}>
            <div className={`mx-auto ${bgState ? bgColor.light : bgColor.dark}`}>{childComponent}</div>
        </BgColorStateContext.Provider>
    )
}