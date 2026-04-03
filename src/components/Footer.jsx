import { socialLinks } from "../data/portfolioData"

function Footer(){
        return(
            <footer>
                <div className="footer_icon">
                    {socialLinks.map(link => {
                        const Icon = link.icon
                        return <a key={link.id} href={link.href} aria-label={link.ariaLabel} target="_blank" rel="noreferrer" ><Icon /></a>
                    })
                    }
                </div>
                <div>
                    <p>© 2026 Osondu Gabriel. All rights reserved.</p>
                </div>
            </footer>
        )
}
export default Footer