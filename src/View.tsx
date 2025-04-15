import { useEffect, useState } from "react"

import { com, per } from "@/math.ts"

function Table({ n, state }: { n: number | null, state: "permutations" | "combinations" }) {
    if (!n || n > 50) {
        console.log("error")
        return null
    }

    return (
        <div className="my-8">
            <h2 className="text-2xl font-serif mb-4 text-center">
                {state === "combinations" ? `C(${n},r)` : `P(${n},r)`} Table
            </h2>
            <div className="overflow-x-auto">
                <table className="mx-auto border-collapse font-serif">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-6 py-3 text-lg">r</th>
                            <th className="border border-gray-300 px-6 py-3 text-lg">
                                {state === "combinations" ? `C(${n},r)` : `P(${n},r)`}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(n + 1).fill(0).map((_, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                                <td className="border border-gray-300 px-6 py-3 text-center">{i}</td>
                                <td className="border border-gray-300 px-6 py-3 text-right font-medium">
                                    {state === "combinations" ? com(n, i) : per(n, i)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default function View({ state }: { state: "permutations" | "combinations" }) {
    const [n, setN] = useState<null | number>(null)
    const [r, setR] = useState<null | number>(null)
    const [showTable, setShowTable] = useState<boolean>(false)


    const [res, setRes] = useState("")
    function Ansbox({ children }: any) {
        if (!children) {
            return <h1 className="text-[15rem] text-gray-400">{state == "combinations" ? "10" : "20"}</h1>
        }
        return <h1 className="text-[15rem]">{children}</h1>
    }
    function convert(n: number | null) {
        if (!n) {
            return 0
        }
        return n
    }
    useEffect(() => {
        console.log(n, r)
        if (!!n !== !!r) {
            console.log(n, r)
            setRes("?")
        }
        if (!n || !r) {
            return
        }
        if (n < r) {
            return
        }
        const ans = state === "combinations" ? com(n, r) : per(n, r)
        setRes(`${ans}`)
    }, [convert(n), convert(r)])

    return (
        <div className="flex flex-col items-center w-full">
            <div className='font-serif flex items-center'>
                <input
                    value={n?.toString()}
                    onChange={e => setN(Number(e.target.value))}
                    autoFocus
                    type="number"
                    placeholder={"5"}
                    className='w-20 borders-none focus:outline-none text-5xl text-right mb-[10rem]'
                />
                <h1 className='text-[15rem]'>{state === "combinations" ? "C" : "P"}</h1>
                <input
                    value={r?.toString()}
                    onChange={e => setR(Number(e.target.value))}
                    type="number"
                    placeholder={"2"}
                    className='w-20 borders-none focus:outline-none text-5xl text-left p-0 mt-[10rem]'
                />
                <h1 className='text-[15rem] text-left font-serif'>=</h1>
                <Ansbox>{res}</Ansbox>
            </div>
            <button
                onClick={() => { setShowTable((e) => !e) }}
                className="mt-8 mb-4 hover:drop-shadow-md border-gray-900 border-2 p-2 px-6 rounded-lg font-serif transition-all hover:bg-gray-100">
                {showTable ? "Hide Table" : "Show Full Table"}
            </button>

            {showTable && <Table n={n} state={state} />}
        </div >
    )
}
