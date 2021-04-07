

export const LOGIN_URL = `https://ufedo.herokuapp.com/api/v1/token`
export const REGISTER_URL = `https://ufedo.herokuapp.com/api/v1/register`

export const GET_COUPLE_DATA = `https://ufedo.herokuapp.com/api/v1/couples`

export const REGISTRY = `https://ufedo.herokuapp.com/api/v1/registries`

export const REGISTRY_ITEM = (id:string|string[]|undefined) => `https://ufedo.herokuapp.com/api/v1/registries/${id}`

// story = /websites/stories title image content
export const ADD_STORY = `https://ufedo.herokuapp.com/api/v1/websites/stories`
// gallery = /websites/galleries image
export const UPDATE_GALLERY = `https://ufedo.herokuapp.com/api/v1/websites/galleries`
// title and wedding = /websites title wedding_date
// cover_photo = /websites cover_photo
export const WEBSITE_DATA = `https://ufedo.herokuapp.com/api/v1/websites`

export const VIEW_WEBSITE = (hashTag: string | string[] | undefined) => `https://ufedo.herokuapp.com/api/v1/websites/${hashTag}`

export const VIEW_REGISTRY = (hashTag: string) => `https://ufedo.herokuapp.com/api/v1/registries/${hashTag}`

export const UPDATE_HASH_TAG = (id: string | number) => `https://ufedo.herokuapp.com/api/v1/couples/${id}`

export const UPDATE_WEDDING_DATA = (id:string|number) => `https://ufedo.herokuapp.com/api/v1/couples/${id}`
export const UPDATE_STORY = (id:string|number) => `https://ufedo.herokuapp.com/api/v1/stories/${id}`
