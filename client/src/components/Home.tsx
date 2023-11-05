import { ReactElement } from "react"

type HomeProps = {title: string}

const Home = ({title}: HomeProps): ReactElement => {
    return (
        <h1>{title}</h1>
    )
}

export default Home