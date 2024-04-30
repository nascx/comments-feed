import { ChangeEvent, FormEvent, useState } from "react"

const CreateCommnet = () => {

    const [email, setEmail] = useState<string>('')

    const [comment, setComment] = useState<string>('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const getData: () => string = () => {

        const now = new Date()

        const currentDate: string = now.toLocaleDateString('pt-br')
        const currentTime: string = now.toLocaleTimeString('pt-br')

        const creatAt: string = `Em ${currentDate}, ${currentTime}`

        return creatAt
    }

    getData()

    return (
        <form onSubmit={handleSubmit} className="flex flex-col mt-5 w-80 justify-center items-center">
            <div className="flex flex-col">
                <label htmlFor="email" className="font-bold mb-1">Email</label>
                <input type="text"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="mb-4"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="comment" className="font-bold mb-1">Comment</label>
                <textarea
                    name="comment"
                    id="comment"
                    value={comment}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
                    className="mb-4"
                />
            </div>
            <button className="bg-[#631A86] rounded-md text-white font-bold w-20 h-12 flex justify-center items-center">Send comment</button>
        </form>
    )
}

export default CreateCommnet