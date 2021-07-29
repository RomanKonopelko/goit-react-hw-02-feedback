
interface Props {
    title: string,
    children: React.ReactNode
}

const Section = ({ title, children }: Props) => (
    <section>
    <h2>{title}</h2>
    {children}
</section>)

export default Section;