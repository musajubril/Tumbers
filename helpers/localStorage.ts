import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { getRequest, postRequest } from '../api/apiCall'
import { REGISTRY } from '../api/apiUrl'
import { queryKeys } from '../api/queryKey'


export const getWebStorage = () => {
  const [state, setState] = React.useState<{
    name: string,
    partnerName: string,
    countdown: string | number | Date | undefined,
    date: string | number | Date | undefined
  }>({
    name: '',
    partnerName: '',
    countdown: '',
    date: ''
  })

  React.useEffect(() => {
    const {
      name,
      partnerName,
      date,
      countdown
    } = localStorage

    setState({
      ...state,
      name: name ? name : '',
      partnerName: partnerName ? partnerName : '',
      countdown: countdown ? countdown : new Date(),
      date: date ? date : new Date()
    })
  },[])
  return state
}