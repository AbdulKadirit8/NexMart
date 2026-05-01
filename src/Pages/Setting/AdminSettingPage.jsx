import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateSetting,
    createSetting,
    getSetting,
} from "../../Redux/ActionCreaters/SettingActionCreaters";
import AdminSlider from "../../Components/Admin/AdminSlider";

export default function AdminSettingPage() {
    let [data, setData] = useState({
        siteName: "",
        map1: "",
        map2: "",
        address: "",
        email: "",
        phone: "",
        whatsapp: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        youtube: "",
        instagram: "",
        privacyPolicy: "",
        termsAndConditions: "",
    });
    let settingStateData = useSelector((state) => state.settingStateData);
    let dispatch = useDispatch();

    function getInputData(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    function postData(e) {
        e.preventDefault();
    }

    useEffect(() => {
        let time = (() => {
            //Using Redux
            dispatch(getSetting());
            if (settingStateData.length) {
                setData({ ...data, ...settingStateData[0] });
            }
        })();
        return () => clearTimeout(time);
    }, [settingStateData.length]);
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
                                <form onSubmit={postData}>
                                    <div className="container-fluid">
                                        {/* Header */}
                                        <h4 className="bg-primary text-light text-center p-2 rounded">
                                            Setting
                                        </h4>

                                        {/* ===== Basic Info ===== */}
                                        <div className="card shadow-sm p-3 mb-3 rounded-4">
                                            <h6 className="fw-bold mb-3 text-primary">
                                                Basic Information
                                            </h6>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label className="ps-2">Site Name</label>
                                                    <div className="input-group mb-2 border border-primary rounded">
                                                        <span className="input-group-text">
                                                            <i className="bi bi-globe2 text-primary"></i>
                                                        </span>

                                                        <input
                                                            type="text"
                                                            name="siteName"
                                                            onChange={getInputData}
                                                            className="form-control"
                                                            placeholder="Site Name"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="ps-2">Email</label>
                                                    <div className="input-group mb-2 border border-primary rounded">
                                                        <span className="input-group-text">
                                                            <i className="bi bi-envelope text-primary"></i>
                                                        </span>

                                                        <input
                                                            type="email"
                                                            name="email"
                                                            onChange={getInputData}
                                                            className="form-control"
                                                            placeholder="Email Address"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="ps-2">Phone</label>
                                                    <div className="input-group mb-2 border border-primary rounded">
                                                        <span className="input-group-text">
                                                            <i className="bi bi-telephone text-primary"></i>
                                                        </span>

                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            onChange={getInputData}
                                                            className="form-control"
                                                            placeholder="Phone Number"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="ps-2">WhatsApp</label>
                                                    <div className="input-group mb-2 border border-primary rounded">
                                                        <span className="input-group-text">
                                                            <i className="bi bi-whatsapp text-primary"></i>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            name="whatsapp"
                                                            onChange={getInputData}
                                                            className="form-control"
                                                            placeholder="WhatsApp Number"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ===== Location + Map ===== */}
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="card shadow-sm p-3 rounded-4 h-100">
                                                    <h6 className="fw-bold mb-2">Location</h6>

                                                    <label className="ps-2">Address</label>
                                                    <div className="input-group mb-2 border border-primary rounded border">
                                                        <span className="input-group-text">
                                                            <i className="bi bi-globe-central-south-asia fs-3 text-primary"></i>
                                                        </span>
                                                        <textarea
                                                            name="address"
                                                            rows={4}
                                                            onChange={getInputData}
                                                            className="form-control"
                                                            placeholder="Address"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card shadow-sm p-3 rounded-4 h-100">
                                                    <h6 className="fw-bold mb-2">Map Details</h6>
                                                    <label className="ps-2">Map1</label>
                                                    <div className="input-group mb-2 border border-primary rounded">
                                                        <span className="input-group-text">
                                                            <i className="bi bi-map text-primary"></i>
                                                        </span>

                                                        <input
                                                            name="map1"
                                                            onChange={getInputData}
                                                            className="form-control"
                                                            placeholder="Map1"
                                                        />
                                                    </div>
                                                    <label className="ps-2">Map2</label>
                                                    <div className="input-group mb-2 border border-primary rounded">
                                                        <span className="input-group-text">
                                                            <i className="bi bi-map text-primary"></i>
                                                        </span>

                                                        <input
                                                            name="map2"
                                                            onChange={getInputData}
                                                            className="form-control"
                                                            placeholder="Map2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ===== Social Media ===== */}
                                        <div className="card shadow-sm p-3 mt-3 rounded-4">
                                            <h6 className="fw-bold mb-3">Social Media Profiles</h6>

                                            {/* Facebook */}
                                            <div className="input-group mb-2 border border-primary rounded">
                                                <span className="input-group-text">
                                                    <i className="bi bi-facebook text-primary"> Facebook</i>
                                                </span>
                                                <input
                                                    type="url"
                                                    name="facebook"
                                                    onChange={getInputData}
                                                    className="form-control"
                                                    placeholder="Facebook page URL"
                                                />
                                            </div>

                                            {/* YouTube */}
                                            <div className="input-group mb-2 border border-primary rounded">
                                                <span className="input-group-text">
                                                    <i className="bi bi-youtube text-danger"> YouTube</i>
                                                </span>
                                                <input
                                                    type="url"
                                                    name="youtube"
                                                    onChange={getInputData}
                                                    className="form-control"
                                                    placeholder="YouTube page URL"
                                                />
                                            </div>

                                            {/* Instagram */}
                                            <div className="input-group mb-2 border border-primary rounded">
                                                <span className="input-group-text">
                                                    <i className="bi bi-instagram text-warning"> Instagram</i>
                                                </span>
                                                <input
                                                    type="url"
                                                    name="instagram"
                                                    onChange={getInputData}
                                                    className="form-control"
                                                    placeholder="Instagram profile page URL"
                                                />
                                            </div>

                                            {/* Twitter */}
                                            <div className="input-group mb-2 border border-primary rounded">
                                                <span className="input-group-text">
                                                    <i className="bi bi-twitter text-info"> Twitter</i>
                                                </span>
                                                <input
                                                    type="url"
                                                    name="twitter"
                                                    onChange={getInputData}
                                                    className="form-control"
                                                    placeholder="Twitter profile page URL"
                                                />
                                            </div>

                                            {/* LinkedIn */}
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="bi bi-linkedin text-primary"> Linkedin</i>
                                                </span>
                                                <input
                                                    type="url"
                                                    name="linkedin"
                                                    onChange={getInputData}
                                                    className="form-control"
                                                    placeholder="Linkedin profile page URL"
                                                />
                                            </div>

                                            <button className="btn btn-primary w-100">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
