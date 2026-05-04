import { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import './Shop.css';

const categories = ['All', 'Bats', 'Kits', 'Accessories', 'Jerseys'];

const products = [
  { id: 1, name: 'Pro Player Cricket Bat', cat: 'Bats', price: 189.99, oldPrice: 249.99, rating: 4.8, reviews: 124, img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&q=80', badge: 'Best Seller', stock: true },
  { id: 2, name: 'Champions CC Official Jersey', cat: 'Jerseys', price: 59.99, oldPrice: null, rating: 4.9, reviews: 89, img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80', badge: 'New', stock: true },
  { id: 3, name: 'Complete Cricket Kit Bag', cat: 'Kits', price: 349.99, oldPrice: 429.99, rating: 4.7, reviews: 56, img: 'https://images.unsplash.com/photo-1540747913346-19212a4cf655?w=400&q=80', badge: 'Sale', stock: true },
  { id: 4, name: 'Wicket Keeper Gloves', cat: 'Accessories', price: 79.99, oldPrice: null, rating: 4.5, reviews: 42, img: 'https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?w=400&q=80', badge: null, stock: true },
  { id: 5, name: 'Batting Helmet Pro', cat: 'Accessories', price: 129.99, oldPrice: 159.99, rating: 4.6, reviews: 78, img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', badge: 'Sale', stock: true },
  { id: 6, name: 'Junior Cricket Bat', cat: 'Bats', price: 89.99, oldPrice: null, rating: 4.4, reviews: 31, img: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80', badge: null, stock: false },
];

export default function Shop() {
  const [active, setActive] = useState('All');
  const [wishlist, setWishlist] = useState([]);

  const filtered = active === 'All' ? products : products.filter(p => p.cat === active);

  const toggleWish = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <section id="shop" className="shop section-padding">
      <div className="container">
        <div className="shop-header">
          <div>
            <p className="section-subtitle">Our Store</p>
            <h2 className="section-title">CRICKET <span>SHOP</span></h2>
          </div>
          <a href="#" className="btn-outline view-all-btn">View All Products</a>
        </div>

        <div className="filter-tabs">
          {categories.map(c => (
            <button key={c} className={`filter-btn ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map(product => (
            <div className="product-card" key={product.id}>
              {product.badge && (
                <span className={`product-badge ${product.badge === 'Sale' ? 'sale' : product.badge === 'New' ? 'new' : 'bestseller'}`}>
                  {product.badge}
                </span>
              )}
              {!product.stock && <div className="out-of-stock">Out of Stock</div>}

              <div className="product-img">
                <img src={product.img} alt={product.name} />
                <div className="product-actions">
                  <button className={`action-btn wish ${wishlist.includes(product.id) ? 'active' : ''}`} onClick={() => toggleWish(product.id)}>
                    <FaHeart />
                  </button>
                  <button className="action-btn"><FaEye /></button>
                </div>
              </div>

              <div className="product-info">
                <span className="product-cat">{product.cat}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} />
                  ))}
                  <span>({product.reviews})</span>
                </div>
                <div className="product-price-row">
                  <div className="product-price">
                    <span className="price-current">${product.price}</span>
                    {product.oldPrice && <span className="price-old">${product.oldPrice}</span>}
                  </div>
                  <button className={`add-to-cart ${!product.stock ? 'disabled' : ''}`} disabled={!product.stock}>
                    <FaShoppingCart /> {product.stock ? 'Add to Cart' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
