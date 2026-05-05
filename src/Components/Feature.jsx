import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeature } from '../Redux/ActionCreaters/FeatureActionCreaters'

export default function Feature() {
    let featureStateData = useSelector(state => state.featureStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFeature())
    }, [featureStateData.length])
    return (
        <>
            <section id="featured-departments" className="featured-departments section pb-0">

                {/*  Section Title  */}


                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row g-5">
                        {
                            featureStateData.filter(x => x.status).map((item) => {
                                return <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100" key={item.id} >
                                    <div className="department-highlight">
                                        <div className="highlight-icon">
                                            <span dangerouslySetInnerHTML={{__html:item.icon}} />
                                        </div>
                                        <h4>{item.name}</h4>
                                        <p className='text-justify'>{item.description}</p>
                                        
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
