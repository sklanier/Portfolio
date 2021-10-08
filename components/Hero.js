import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => (
    <section className="bg-primaryBlue">
        <div id="hero" className="h-screen bg-hero-image bg-fixed bg-cover bg-center bg-no-repeat">
            <div className="text-xl text-white flex justify-center items-center m-auto h-screen">
                <div className="text-center w-5/12">
                    <h2>I'm steve, and I like to</h2>
                    <h1 className="heroText">develop <span className="font-avenir">+</span> chill</h1>
                    <hr width="100px" className="m-auto"></hr>
                    <h1 className="heroSub leading-5">currently a full stack developer in Wisconsin, but I'm willing to relocate for the right job. a few things i enjoy... breaking things. fixing things. learning things. building things. (not necessarily in that order.)</h1>
                    <AnchorLink href="#projects"><button className="heroBtn">view my projects</button></AnchorLink>
                </div>
            </div>
            <div id="hero" className="h-screen bg-hero-image bg-fixed bg-cover bg-center bg-no-repeat">
            <div className="text-xl text-white flex justify-center items-center m-auto h-screen">
            </div>
        </div>
        </div>
    </section>
);

export default Hero;