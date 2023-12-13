export default function PrincipalTitle () {
    return (
        <section className="principal-container">
            <div>
                <h1 className="principal-title">Vite</h1>
                <p className="principal-title">Next Generation Frontend Tooling</p>
                <p className="principal-description">Get ready for a development environment that can finally catch up with you.</p>
                <div className="container__buttons-feature">
                    <button className="button-feature purple-button">Get Started</button>
                    <button className="button-feature gray-button">Why Vite?</button>
                    <button className="button-feature gray-button">View on GitHub</button>
                    <button className="button-feature purple-button">🎉 ViteConf 23!</button>                    
                </div>
            </div>
            <div className="principal_logo-container">
                <img className="principal-logo" src="https://vitejs.dev/logo-with-shadow.png" alt="" />
            </div>
        </section>
    );
}