import React from 'react';
const images = [
    {
        alt: "gen",
        width: "200",
        height: "113",
        src: "2FCo_1.ad2ee302.png",
        srcSet: "2FCo_1.ad2ee302.png",
    },
    {
        alt: "gen",
        width: "200",
        height: "96",
        src: "2FCo_3.37f82c98.png",
        srcSet: "2FCo_3.37f82c98.png",
    },
    {
        alt: "gen",
        width: "200",
        height: "112",
        src: "2FCo_2.7e06895b.png",
        srcSet: "2FCo_2.7e06895b.png",
    },
    {
        alt: "gen",
        width: "123",
        height: "78",
        src: "2Fgrov.97a72987.png",
        srcSet: "2Fgrov.97a72987.png",
    }
];

function ClientSection() {
    return (
        <div className="NewClient_sec6__EgRtw">
            <h1 className="NewClient_section6Heading__TGGXE">We Work With Amazing Clients</h1>
            <div className="NewClient_image_section___eIHp">
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            alt={image.alt}
                            loading="lazy"
                            width={image.width}
                            height={image.height}
                            decoding="async"
                            data-nimg="1"
                            style={{ color: 'transparent', height: '8rem', width: '12rem' }}
                            srcSet={image.srcSet}
                            src={image.src}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientSection;