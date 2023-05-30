import { useRouter } from 'next/router';
import React from 'react'

const productsDetail = () => {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <div>productsDetail: {slug}</div>
  )
}

export default productsDetail