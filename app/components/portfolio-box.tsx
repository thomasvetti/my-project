import Image from "next/image";


interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    return (
        <div
            key={id}
            className="flex flex-col justify-between p-4 border border-teal-50 rounded-xl h-[340px] w-full md:w-[240px] bg-transparent"
        >
            <h3 className="mb-2 text-xl">{title}</h3>
            <div className="relative w-full h-[140px] mb-4">
                <Image
                    src={image}
                    alt="Image"
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>
            <div className="flex gap-5 mt-auto">
                <a
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </a>
                <a
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Live demo
                </a>
            </div>
        </div>
    );
}

export default PortfolioBox