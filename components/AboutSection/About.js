import Skills from './Skills/Skills'

const About = () => (
    <section id="about" className="-mt-20 pt-20">
        <div className="w-full bg-primaryBlue h-sectionHeight flex px-16">
            <div className="px-24 w-4/12 text-left">
                <h1 className="aboutTitle">about</h1>
                <p className="heroSub">
                    I consider myself a Jack of many trades. 
                    I've held a number of different positions over the years, 
                    and Each one has helped shape me into a well-rounded developer 
                    with a unique & broad skillset.
                </p>
                <p className="heroSub">
                    More than making stunning web content and software applications, 
                    I enjoy working with people. I believe wholeheartedly that coding 
                    is a team sport. Nothing great can be done alone, 
                    and a healthy relationship with my teammates is a vital prerequisite 
                    for success.
                </p>
                <img src="assets/img/SteveLanier-Signature@2x.png"/>
                <div className="mt-24 border-2 rounded-full h-60 w-60 flex items-center justify-center text-center p-8 text-white">
                    maybe something about how I love my wifey :) 
                </div>
            </div>
            <div className="flex-col items-center justify-center px-12 w-4/12 mt-56">
                <h1 className="aboutTitle underline text-center">technical skills</h1>
                <Skills/>
            </div>
            <div className="px-24 w-4/12 text-right">
                <h1 className="aboutTitle mt-80">talents</h1>
                <p className="heroSub">
                    More than making stunning web content and software applications, 
                    I enjoy working with people. I believe wholeheartedly that coding 
                    is a team sport. Nothing great can be done alone, 
                    and a healthy relationship with my teammates is a vital prerequisite 
                    for success.
                </p>
                <p className="heroSub">
                    More than making stunning web content and software applications, 
                    I enjoy working with people. I believe wholeheartedly that coding 
                    is a team sport. Nothing great can be done alone, 
                    and a healthy relationship with my teammates is a vital prerequisite 
                    for success.
                </p>
            </div>
        </div>
        <div className="bg-gradient-to-b from-primaryBlue to-black w-full h-40"></div>
    </section>
);

export default About;