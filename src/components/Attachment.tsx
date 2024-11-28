export default function Attachment({attachment}: {attachment: {name: string, type: string}}) {
    return (
        <div className="flex flex-col text-center items-center">
            <p className="text-white">{attachment.name}</p>
            <p className="text-white">{attachment.type}</p>
        </div>
    )
}