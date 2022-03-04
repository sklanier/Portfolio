import Link from 'next/link';

const Hero = () => (
    <section className="bg-primaryBlue">
        <div id="hero" className="h-screen bg-hero-image bg-fixed bg-cover bg-center bg-no-repeat">
            <div className="text-xl text-white flex justify-center items-center m-auto h-screen">
                <div className="text-center w-6/12 mt-20">
                    <h2>I'm steve. I like to</h2>
                    <h1 className="heroText">
                        make stuff.
                        {/* <span className="font-avenir">+</span> */}
                        
                    </h1>
                    <hr width="100px" className="m-auto"></hr>
                    <h1 className="heroSub leading-5">currently a full stack developer in Wisconsin. a few things i enjoy: breaking things. fixing things. learning things. building things. (not necessarily in that order.)</h1>
                    <Link href="/projects">
                        <a className="heroBtn">view my projects</a>
                    </Link>
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