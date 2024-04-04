export default function Page({
    params, searchParams }: {
        params: { id: string },
        searchParams: any
    }) {
        console.log(searchParams,"searchParams")
    return (
        <div className="mt-12 flex flex-col items-center justify-center">
            <h1 className="text-3xl">profile : {params.id}</h1>
            <a href={`/products/create`} className="mt-8 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Create
            </a>
        </div>
    )
}