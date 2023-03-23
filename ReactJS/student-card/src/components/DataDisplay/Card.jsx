import { ReactComponent as IcAcademicCap} from '../../assets/icons/academic-cap.svg'

// Component dengan menggunakan attribute class dan styling

export default function Card({children}) {
    return (
        <div className="rounded-md drop-shadow-lg bg-slate-100 py-5 px-6"
            style={{width: 'fit-content'}}>
            <div style={{minWidth: 400}}>
                {children}
            </div>
        </div>
    )
}

export function StudentCard({instituionOnClick, imageOnClick}) {

    // Generate dynamic based on data
    let academic = []
    let instituion = [{id: 1, name: 'Politeknik Negeri Banjarmasin'}, {id: 2, name: 'Universitas Brawijaya'}, {id: 3, name: 'Universitas Indonesia'}, {id: 4, name: 'Massachusetts Institute of Technology'}]

    instituion.forEach((e) => {
        academic.push(
            <div className="flex flex-row" onClick={instituionOnClick} key={e.id}>
                <IcAcademicCap strokeWidth={1.5} className="w-6 h-6"/>
                <span className="text-base text-gray-600 ml-2">{e.name}</span>
            </div>
        )
    })

    // Render components
    return (
        <Card>
            <div className="flex flex-row">
                <div className="grid content-between mr-12">
                    <div className="cursor-default"> 
                        <div className="text-2xl font-bold font-sans">Harris Russels</div>
                        <div className="text-base text-gray-600">2492FD2392</div>
                    </div>

                    <div className="cursor-pointer">{academic}</div>
                </div>
                <img src="https://images.unsplash.com/photo-1677509537840-20ea56137081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" 
                    alt="Harris Russels" className="w-60 mx-auto rounded-lg cursor-pointer"  onClick={imageOnClick}/>
            </div>
        </Card>
    )
}