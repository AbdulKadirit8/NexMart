import { NavLink } from "react-router-dom";


export default function Breadcrum({ pageTitle, pageDescription }) {
    return (
        <>
            <div className="page-title">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="heading-title">{pageTitle}</h1>
                                <p className="mb-0">
                                    {pageDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li className="current">{pageTitle}</li>
                        </ol>
                    </div>
                </nav>
            </div>
        </>
    )
}
