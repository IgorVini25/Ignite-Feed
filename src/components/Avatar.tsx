import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface iAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...props }: iAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
