import FeatureCard from "./FeatureCard";

export default function FeatureList () {
    return (
        <section className="features-container">
            <FeatureCard icon="💡" feature="Instant Server Start" description="On demand file serving over native ESM, no bundling required!"/>
            <FeatureCard icon="⚡️" feature="Lightning Fast HMR" description="Hot Module Replacement (HMR) that stays fast regardless of app size."/>
            <FeatureCard icon="🛠️" feature="Rich Features" description="Out-of-the-box support for TypeScript, JSX, CSS and more."/>
            <FeatureCard icon="📦" feature="Optimized Build" description="Pre-configured Rollup build with multi-page and library mode support."/>
            <FeatureCard icon="🔩" feature="Universal Plugins" description="Rollup-superset plugin interface shared between dev and build."/>
            <FeatureCard icon="🔑" feature="Fully Typed APIs" description="Flexible programmatic APIs with full TypeScript typing."/>
        </section>
    );
}