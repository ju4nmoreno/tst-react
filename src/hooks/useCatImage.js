import { useState, useEffect } from 'react'

const IMG_INIT_URL = 'https://cataas.com'

export default function useCatImage ({ fact }) {
  const [pathImg, setPathImg] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=500&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setPathImg(url)
      })
  }, [fact])

  return {
    pathImg: `${IMG_INIT_URL}${pathImg}`
  }
}
