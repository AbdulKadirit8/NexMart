import useSetting from "../hooks/useSetting"


export default function CUstumerSupport() {
    const settingData=useSetting()
    return (
        <>
            <section id="featured-departments" className="featured-departments section pt-0 pb-0">
                <div className="container" >
                    <div className="emergency-banner" data-aos="fade-up" data-aos-delay="400">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="emergency-content">
                                    <h3>Costumer Care Services Available 24/7</h3>
                                    <p>At {settingData.siteName}, customer satisfaction is at the heart of everything we do. Our dedicated support team is available 24/7 to provide prompt and personalized assistance for all your needs. Whether it’s order updates, product guidance, or resolving concerns, we ensure a smooth and dependable experience with every interaction, making your shopping journey effortless and worry-free.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <a href={`tel:${settingData.phone}`} target='_blank' className="emergency-btn m-1" style={{width:303}}>
                                    <i className="bi bi-telephone"></i>
                                    Call Emergency: {settingData.phone}
                                </a>
                                <a href={`https://wa.me/91${settingData.whatsapp}?text=Hello%20${settingData.siteName}%20I%20am%20interested`} target='_blank' className="emergency-btn m-1" style={{width:303}}>
                                    <i className="bi bi-whatsapp"></i>
                                    Whatsapp Only: {settingData.whatsapp}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
