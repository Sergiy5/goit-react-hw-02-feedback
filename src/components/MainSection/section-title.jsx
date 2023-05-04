import{Section} from './section.styled'

const SectionWraper = ({ title, children }) => (
    <Section>
        <h1>{title}</h1>
        {children}
    </Section>
)

export default SectionWraper