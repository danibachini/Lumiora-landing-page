
export default function Carousel() {

    const images:string[] = ['allure.png', 'cosmopolitan.png', 'elle.png', 'GQ.png', 'instyle.png', 'marie-claire.png', 'vanity-fair.png', 'vogue.png'];
    const carouselImages:string[] = [...images, ...images, ...images]; 

    return (
        <div>
            <h3 className="font-serif text-lg md:text-xl my-10">They are talking about us</h3>
            <div id="slide-parent">
                <div id="slide">
                    {carouselImages.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
