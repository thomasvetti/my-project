interface ContainerPageProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerPageProps) => {
    const { children } = props

    return (
        <div className="relative w-full max-w-6xl px-4 pb-25 mx-auto mt-40 md:pb-0 md:px-6">
            {children}
        </div>
    );
}

export default ContainerPage;