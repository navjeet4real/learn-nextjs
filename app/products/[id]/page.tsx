export default function Page({
    params, searchParams }: {
        params: { id: string },
        searchParams: any
    }) {
        console.log(searchParams,"searchParams")
    return (
        <h1>profile : {params.id}</h1>
    )
}