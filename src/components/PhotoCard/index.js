import React, { useEffect, useRef, useState } from 'react'

import { Article, ImgWrapper, Img, Button } from './styles'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
    } catch (error) {
      return false
    }
  })

  console.log(liked)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}
