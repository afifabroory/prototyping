import { useContext } from "react"
import { BgColorStateContext } from "../../contexts/BgColorContext"

export default function Button({className, text, onClickHandler}) {
    return (
        <button className={className} onClick={onClickHandler}>
            {text}
        </button>
    )
}

export function ToggleButton() {
    const context = useContext(BgColorStateContext)

    return (
        <Button className={`rounded-full font-bold p-3 text-2xl ${context.state ? 'bg-slate-700' : 'bg-white'}`} onClickHandler={context.handler} text={context.state ? "💡": "🌙"} />
    )
}