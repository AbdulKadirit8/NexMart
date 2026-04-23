import React from 'react'

export default function PicValidater(e) {
  if (e.target.files.length === 0) {
    return "Please upload an Image"
  }
  else if (e.target.files.length === 1) {
    let file=e.target.files[0]
    if(!(["image/jpeg","image/webp","image/jpg","image/gif","image/png"].includes(file.type))){
      return "Invalid image type, Please upload png, jpg, jpeg, webp, gif types"
    } 
    else if(file.size>1048576){
      return "Pic is too Heavy, Please upload image upto 1MB"
    }
    else{
      return ""
    }
  }
  
}
