

function Section() {
    return (
        <>
                <canvas id="bg"></canvas>

                <main>

                <header>
                    <h1 id='heading'>Hello!</h1>
                    <h3 id='heading'>My name is Bradley Tian.</h3>
                    <div className="wrapper">
                        <p>I am a </p>
                        <div className="words">
                            <span>CS & Business Student at UC Berkeley</span>
                            <span>Full-Stack Developer</span>
                            <span>Technical Consultant</span>
                            <span>Equity Researcher</span>
                        </div>
                    </div>
                </header>

                <blockquote className='Break1'><p>Keep scrolling to explore my universe!</p></blockquote>

                <section className="proleft">
                    <h1>Google</h1>
                    <p>Sep 2022 - Dec 2022</p>
                    <br/>
                    <p>Spearheading development of unique onboarding platform using React.js to attract ~2500+ students to Apache Beam.</p>
                    <p>Inventing new Linux-based integrations between GCP, Dataflow, and Beam pipelines in Google Colab environment.</p>
                    <p>Designing 7+ workshops on multi-language pipeline development to educate aspiring data scientists across all of US.</p>
                </section>

                <section className="proright">
                    <h1>Poof Payments</h1>
                    <p>May 2022 - Aug 2022</p>
                    <br/>
                    <p>Designed KYC system with Flask and PostgreSQL to protect and verify 3,000+ merchant and customer profiles.</p>
                    <p>Implemented cybersecurity practices in Python to prevent TOCTTOU, XSS, and path attacks on KYC databases.</p>
                    <p>Integrated Stripe’s API service and created webhooks to reduce third-party transactions and checkout time by 25%.</p>
                </section>
                
                <section className="proleft">
                    <h1>LaunchParty</h1>
                    <p>May 2022 - Aug 2022</p>
                    <br/>
                    <p>Redesigned and expanded social media API integrations to streamline marketing efforts for clients and investors.</p>
                    <p>Created API endpoints with Django REST Framework (Python) to automate content formatting for social media posting.</p>
                    <p>Designed 3 UI prototypes in Next.js and established data pipelines between frontend interface and backend API.</p>
                </section>
            
                <section className="Break2">
                    <h1>M1 Finance</h1>
                    <p>Feb 2022 - May 2022</p>
                    <br/>
                    <p>Performed comparable analysis and designed 5 new market strategies for M1’s expansion toward 43,000+ college users.</p>
                    <p>Transformed and analyzed 300+ entries of primary survey data with SQL queries and R libraries (dplyr and ggplot2).</p>
                    <p>Performed regression analysis with Pandas and NumPy to present new user insights to M1’s acquisition marketing team.</p>
                </section>


                <section className="center Break3">
                    <h2>2022 CalHacks 9.0 Solana Tech Prize - 2nd Place</h2>
                    <p>Created a web3 platform utilizing CockroachDB and Solana to help enforce price equity among healthcare services.</p>
                    <p>Pioneered concept of bijective mapping between database entries and smart contracts to allow fast lookup and rendering.</p>
                    <p>Designed backend communication processes between CockroachDB serverless cluster and Solana using Python and JS.</p>
                    <br/>
                    <h2>2021 - 2022 Moralis Hackathon - IPFS/Filecoin Finalist</h2>
                    <p>Directed backend development in creating a web platform in Python and JavaScript for deploying 3D designs as NFTs.</p>
                    <p>Developed prototypes of 3D NFT collections using randomized generative algorithms, IPFS bulk uploading, metadata generation via Moralis APIs, ERC1155 minting protocols, and on-chain deployment through Avalanche.</p>
                    <br/>
                    <h2>2021 UC Berkeley CivHacks - 1st Place</h2>
                    <p>Created mobile app in Python and JavaScript that visualizes criminal activities to improve student safety at UC Berkeley.</p>
                    <p>Implemented Gmail APIs and built scraping algorithms in Python to collect key data from email notifications.</p>
                    <p>Created frontend GUI visualizations (heatmaps & timelines) in React Native to display crime rate data from backend.</p>
                    <br/>
                </section>

                <blockquote className='thanks'>
                    <p>Thanks for visiting my website.</p>
                </blockquote>

                <footer>
                    <p>Copyright © 2022 Bradley (Yihan) Tian All Rights Reserved.</p>
                </footer>

                </main>

                <script type="module" src="/main.js"></script>
        </>
    )
}   


export default Section;