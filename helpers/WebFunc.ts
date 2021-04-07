import React from 'react'
import moment from 'moment'
import { WebView } from './interfaces'
import { patchRequest, postRequest, postStory } from './../api/apiCall';
import { WEBSITE_DATA, UPDATE_GALLERY, ADD_STORY } from './../api/apiUrl';
import { useMutation } from 'react-query';

export const UpdateWebsite = () => {

  const TitleAndDate = ({title, wedding_date}:{title:string, wedding_date:Date | null}) => {

    useMutation(patchRequest).mutate({
      url: WEBSITE_DATA, data: {title,wedding_date} })
  }
  const CoverPhoto = ({cover_photo}:{cover_photo:File}) => {
    
    useMutation(patchRequest).mutate({
      url: WEBSITE_DATA, data: {cover_photo} })
  }
  const GalleryPhoto = ({image}:{image:File}) => {
    
    useMutation(postRequest).mutate({
      url: UPDATE_GALLERY, data: {image} })
  }
  const UploadStory = ({image, title, content}:{image:File, title:string, content: string}) => {
    
    useMutation(postRequest).mutate({
      url: ADD_STORY, data: {image, title, content} })
  }
  return {
    TitleAndDate,
    CoverPhoto,
    GalleryPhoto,
    UploadStory
  }
}
// export const WebFunctions = () => {

//   const webdata = {
//     state,
//     handleChange,
//     handleDate,
//     handleGallery,
//     handleStoryImage,
//     handleDescription,
//     addStory,
//     updateWebsite,
//     handleCoverPhoto,
//     alert,
//     openAlert
//   }
//   return webdata
// }
export const WebsiteData = () => {
  const [website, setWebsite] = React.useState<WebView>({
    title:'',
    date:'',
    countdown:new Date(),
    story:[],
    gallery: [],
    cover: ''
  })
  React.useEffect(() => {
    const webdata = localStorage.website ? JSON.parse(localStorage.website) : ''
    setWebsite(webdata)
  }, [])
  return website
}