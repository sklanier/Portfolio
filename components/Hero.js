import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => (
    <section className="bg-primaryBlue">
        <div id="hero" className="h-screen bg-hero-image bg-fixed bg-cover bg-center bg-no-repeat">
            <div className="text-xl text-white flex justify-center items-center m-auto h-screen">
                <div className="text-center w-5/12">
                    <h2>I'm Steve, and I like to</h2>
                    <h1 className="heroText">develop + chill</h1>
                    <hr width="100px" className="m-auto"></hr>
                    <h1 className="heroSub">currently a full stack developer based sheboygan falls WI, and am 100% willing to relocate for the right job. a few things i enjoy... breaking things. fixing things. learning things. building things. (not necessarily in that order.)</h1>
                    <AnchorLink href="#projects"><button className="heroBtn">view my projects</button></AnchorLink>
                </div>
            </div>
        </div>
        <div id="hero-subtext" className="text-xl text-white flex justify-center items-center -mt-80">
                <div className="text-center w-5/12">
                    <h2>I'm Steve, and I like to</h2>
                    <h1 className="heroText">develop + chill</h1>
                    <hr width="100px" className="m-auto"></hr>
                </div>
            </div>
    </section>
);

export default Hero;