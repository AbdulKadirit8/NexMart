import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSetting, createSetting, getSetting } from '../../Redux/ActionCreaters/SettingActionCreaters'
import AdminSlider from '../../Components/Admin/AdminSlider'

export default function AdminSettingPage() {

    let [data, setData] = useState({
        siteName: '',
        map1: '',
        map2: '',
        address: '',
        email: '',
        phone: '',
        whatsapp: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        youtube: '',
        instagram: '',
        privacyPolicy: '',
        termsAndConditions: ''
    })
    let settingStateData = useSelector(state => state.settingStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    function postData(e) {
        e.preventDefault()
    }

    useEffect(() => {
        let time = (() => {

            //Using Redux
            dispatch(getSetting())
            if (settingStateData.length) {
                setData({ ...data, ...settingStateData[0] })
            }
        })()
        return () => clearTimeout(time)
    }, [settingStateData.length])
    return (
        <>
            <section id="hero" className="hero section pb-0">

                <div className="container my-3 admin">

                    <div className="row">

                        <div className="col-md-3">
                            <div data-aos="fade-right" data-aos-delay="100">
                                <AdminSlider />
                            </div>

                        </div>
                        <div className="col-md-9">
                            <div data-aos="fade-left" data-aos-delay="100">
                                <h4 className='bg-primary text-light text-center p-2 rounded'>Setting</h4>
                                <form onSubmit={postData}>
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <label className='ps-1'>SiteName</label>
                                            <input type="text" name="siteName" onChange={getInputData} className='form-control border border-primary' placeholder='Site Name' />
                                        </div>
                                        
                                        <div className="col-lg-6 mb-3">
                                            <label className='ps-1'>Email</label>
                                            <input type="text" name="email" onChange={getInputData} className='form-control border border-primary' placeholder='Email Address' />
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <label className='ps-1'>Phone</label>
                                            <input type="text" name="phone" onChange={getInputData} className='form-control border border-primary' placeholder='Phone Number' />
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <label className='ps-1'>WhatsApp</label>
                                            <input type="text" name="whatsapp" onChange={getInputData} className='form-control border border-primary' placeholder='WhatsApp Number' />
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <label className='ps-1'>Address</label>
                                            <textarea type="text" name="address" rows={2} onChange={getInputData} className='form-control border border-primary' placeholder='Address'></textarea>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <label className='ps-1'>Map1</label>
                                            <textarea type="text" name="map1" rows={2} onChange={getInputData} className='form-control border border-primary' placeholder='Map1'></textarea>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <label className='ps-1'>Map2</label>
                                            <textarea type="text" name="map2" rows={2} onChange={getInputData} className='form-control border border-primary' placeholder='Map2'></textarea>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <label className='ps-1'>Facebook</label>
                                            <input type="url" name="map2" onChange={getInputData} className='form-control border border-primary' placeholder='Facebook profile page URL' />
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <label className='ps-1'>YouTube</label>
                                            <input type="url" name="map2" onChange={getInputData} className='form-control border border-primary' placeholder='YouTube page URL' />
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <label className='ps-1'>Instagram</label>
                                            <input type="url" name="map2" onChange={getInputData} className='form-control border border-primary' placeholder='Instagram profile page URL' />
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <label className='ps-1'>Twitter</label>
                                            <input type="url" name="map2" onChange={getInputData} className='form-control border border-primary' placeholder='Twitter profile page URL' />
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <label className='ps-1'>Linkedin</label>
                                            <input type="url" name="map2" onChange={getInputData} className='form-control border border-primary' placeholder='Linkedin profile page URL' />
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className='btn btn-primary w-100'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
