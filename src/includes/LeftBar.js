import "../css/LeftBar.css";
import { Check } from "@mui/icons-material"

function LeftBar() {
    return (
        <>
            <div className='sidebar'>
                <div className="sidebar-header">
                    <span style={{ fontSize: "20px" }}> Azure Bank</span>
                    <label htmlFor="sidebar-toggle" className="fa fa-list fa-2x"></label>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <span><Check /></span>
                            <span>Informations personnelles</span>
                        </li>
                        <li>
                            <span className="fa fa-users"></span>
                            <span>Adresses légales</span>
                        </li>
                        <li>
                            <span></span>
                            <span>Informations justificatives</span>
                        </li>
                        <li>
                            <span className="fa fa-folder"></span>
                            <span>Signature du contrat</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default LeftBar;