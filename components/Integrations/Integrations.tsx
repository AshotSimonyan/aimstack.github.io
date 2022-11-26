import {IntegrationsStyle, Slider, SliderItem} from "./Integrations.style";
import {useKeenSlider} from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css"
import integrationsList from "./inetgrationsList";import Link from 'next/link'


const Integrations = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: {
            perView: 8,
            spacing: 200,
        },
        breakpoints: {
            "(max-width: 1440px)": {
                slides: { perView: 8, spacing: 90 },
            },
        }
    })
    return (
        <IntegrationsStyle>
            <Slider ref={ref} className="keen-slider">
                {
                    integrationsList.map(({name, url}) => {
                        return (
                            <SliderItem key={name} className='keen-slider__slide' href={url} target='_blank' rel='noopener noreferrer'>
                                <Image src={`/images/static/integrations/${name}.png`}  alt='AimStack' width={100} height={100} layout="responsive"/>
                            </SliderItem>
                        )
                })
                }
            </Slider>
        </IntegrationsStyle>
    );
};

export default Integrations;
