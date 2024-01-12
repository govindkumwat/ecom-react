import React from 'react'
import { Postlist } from '../Components/Postlist'

export const Home = () => {
  const categoryItem = [1,2,3,4,5,6,7,8]
  const TrendingProducts = [1,2,3]
  return (
    <>
    <div className='homeMainBanner'>
      <img src='https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-123899.jpg?w=1060&t=st=1704951210~exp=1704951810~hmac=37fd1ca1dd9b516b7c450721edaadaab306f8bfc7fc7b67a080692202bd90b5a'/>
    </div>

    <div className='topCategories'>
      <div className='topCategoriesHeading'>
        TOP CATEGORIES
      </div>
      <div className='topCategoriesMenus'>
        {
          categoryItem.map((data) => (
            <div className='topCategoriesMenusImg'>
              <img  src='https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100'/>
              <div className='topCategoriesMenusTitle'>Electronics</div>
            </div>
          ))
        }
       
      </div>
    </div>

    <div className='trendingProducts'>
    <div className='topCategoriesHeading'>
        TOP PRODUCTS
      </div>
      <div className='products homeProducts'>
        {
          TrendingProducts.map((data) => (
            <Postlist/>
          ))
        }
      </div>
    </div>

    <div className='recentlyVisited'>
    <div className='topCategoriesHeading'>
        RECENTLY VISITED PRODUCTS
      </div>
      <div className='products homeProducts'>
        {
          TrendingProducts.map((data) => (
            <Postlist/>
          ))
        }
      </div>
    </div>
    </>
  )
}
