export default function Home(props:{content : string}) {
    return (
        <>
        <h2 className="text-xl border-b-4 border-b-blue inline">{props.content}</h2>
        </>
    )
}