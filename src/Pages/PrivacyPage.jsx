import Breadcrum from '../Components/Breadcrum'
import useSetting from '../hooks/useSetting'

export default function PrivacyPage() {
     const settingData= useSetting()
    return (
        <>
            <Breadcrum pageTitle={"Privacy & Policy"} pageDescription={`At ${settingData.siteName}, your privacy matters. We are committed to protecting your personal information, ensuring secure transactions, and handling your data responsibly with transparency, trust, and care throughout your shopping experience.`} />
        </>
    )
}
