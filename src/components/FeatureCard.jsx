export default function FeatureCard (props) {
    return (
        <article className="feature-card">
            <div className="icon_feature-card">
                <p>{props.icon}</p>
            </div>
            <h2 className="title_feature-card">{props.feature}</h2>
            <p className="description_feature-card">{props.description}</p>
        </article>
    );
}