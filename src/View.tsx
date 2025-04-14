import { useEffect, useState } from "react"







export default function View({ state }: { state: "permutations" | "combinations" }) {

    const [n, setN] = useState<null | number>(null)
    const [r, setR] = useState<null | number>(null)

    const [res, setRes] = useState("")

    function Ansbox({ children }: any) {

        if (!children) {
            return <h1 className=" mx-20 text-[15rem] text-gray-400">{state == "combinations" ? "10" : "20"}</h1>
        }

        return <h1 className=" mx-20 text-[15rem] ">{children}</h1>

    }

    function factorial(n: number): number {
        return n <= 1 ? 1 : n * factorial(n - 1);
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

        function com(n, r) {

            return factorial(n) / (factorial(n - r) * factorial(r))
        }



        function per(n, r) {

            return factorial(n) / (factorial(n - r))
        }



        const ans = state === "combinations" ? com(n, r) : per(n, r)

        setRes(`${ans}`)
    }, [convert(n), convert(r)])


    return (
        <div>
            < div className='font-serif flex align-middle ' >
                <input value={n?.toString()} onChange={e => setN(Number(e.target.value))} autoFocus type="number" placeholder={5} className='w-40 borders-none focus:outline-none text-5xl text-right mb-[10rem]' />

                <h1 className='text-[15rem]'>{state === "combinations" ? "C" : "P"}</h1>

                <input value={r?.toString()} onChange={e => setR(Number(e.target.value))} autoFocus type="number" placeholder={2} className='w-40 borders-none focus:outline-none text-5xl text-left p-0 mt-[10rem]' />
                <h1 className='text-[15rem] text-left font-serif'>=</h1>

                <Ansbox >{res}</Ansbox>
            </div >

            {/**/}
            {/* {(!!n && !r) ? <button onClick={() => setR(n)} className="hover:drop-shadow-md border-gray-900 border-2 p-2 px-3 rounded-lg ">{"Provide full table"}</button> : null} */}


        </div>

    )

}
