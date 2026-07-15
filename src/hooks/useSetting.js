import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSetting } from "../Redux/ActionCreaters/SettingActionCreaters"

export default function useSetting() {
  let settingStateData = useSelector(state => state.settingStateData)
  let dispatch = useDispatch()

  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITENAME,
    logoIcon: import.meta.env.VITE_APP_LOGOICON,
    phone: import.meta.env.VITE_APP_PHONE,
    whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    email: import.meta.env.VITE_APP_EMAIL,
    address: import.meta.env.VITE_APP_ADDRESS,
    map1: import.meta.env.VITE_APP_MAP1,

    facebook: import.meta.env.VITE_APP_FACEBOOK,
    instagram: import.meta.env.VITE_APP_INSTAGRAM,
    twitter: import.meta.env.VITE_APP_TWITTER,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    youtube: import.meta.env.VITE_APP_YOUTUBE,
  })

  useEffect(() => {
    (() => {
      dispatch(getSetting())

      if (settingStateData.length) {
        let data = []
        Object.keys(settingData).forEach((x => {
          data.push([
            x,
            settingStateData[0][x]
              ? settingStateData[0][x]
              : settingData[x]
          ])
        }))
        setSettingData(Object.fromEntries(data))
      }
    })()
  }, [settingStateData.length])

  return settingData
}