import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/223559068.jpg?k=ba335a06d31542f847781fa7414a46cb06b9aa74c892f381a6e980f5296a05e2&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/223559068.jpg?k=ba335a06d31542f847781fa7414a46cb06b9aa74c892f381a6e980f5296a05e2&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Remo</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/223559068.jpg?k=ba335a06d31542f847781fa7414a46cb06b9aa74c892f381a6e980f5296a05e2&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Remo</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
