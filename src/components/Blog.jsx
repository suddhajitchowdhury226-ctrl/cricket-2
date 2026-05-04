import { FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaCommentAlt } from 'react-icons/fa';
import './Blog.css';

const posts = [
  {
    id: 1,
    cat: 'Match Report',
    title: 'Champions CC Dominate Warriors XI in Thrilling League Clash',
    excerpt: 'In a breathtaking display of cricketing excellence, Champions CC powered to a dominant 42-run victory against Warriors XI at the National Stadium. James Mitchell led the charge with a blistering 87 off 56 balls.',
    date: 'May 10, 2025',
    author: 'Admin',
    comments: 18,
    img: '/news.jpeg',
    featured: true,
  },
  {
    id: 2,
    cat: 'Club News',
    title: 'Pre-Season Training Camp Kicks Off with Record Numbers',
    excerpt: 'Over 60 players turned out for the club\'s annual pre-season training camp this year, marking record participation as Crusaders CC prepares for the 2025 season.',
    date: 'Apr 28, 2025',
    author: 'Coaching Staff',
    comments: 9,
    img: '/news1.jpeg',
  },
  {
    id: 3,
    cat: 'Youth Cricket',
    title: 'U19 Academy Stars to Represent State in National Tournament',
    excerpt: 'Three of our talented U19 academy players have been selected to represent the state in the upcoming national youth cricket championships — a proud moment for the club.',
    date: 'Apr 20, 2025',
    author: 'Youth Coordinator',
    comments: 14,
    img: '/news2.jpeg',
  },
  {
    id: 4,
    cat: 'Fixtures',
    title: 'Full Fixture List Released for the 2025 Summer Season',
    excerpt: 'The complete fixture schedule for the 2025 summer season has been announced. Crusaders CC will play 12 home games and 8 away fixtures across all competitions starting May 15.',
    date: 'Apr 15, 2025',
    author: 'Admin',
    comments: 7,
    img: '/news.jpeg',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="blog section-padding">
      <div className="container">
        <div className="blog-header">
          <div>
            <p className="section-subtitle">Latest Updates</p>
            <h2 className="section-title">CLUB <span>NEWS & BLOG</span></h2>
          </div>
          <a href="#" className="btn-outline">All Articles <FaArrowRight /></a>
        </div>

        <div className="blog-grid">
          {/* Featured Post */}
          <div className="blog-card featured-post">
            <div className="blog-img">
              <img src={posts[0].img} alt={posts[0].title} />
              <span className="blog-cat">{posts[0].cat}</span>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span><FaCalendarAlt /> {posts[0].date}</span>
                <span><FaUser /> {posts[0].author}</span>
                <span><FaCommentAlt /> {posts[0].comments} Comments</span>
              </div>
              <h3 className="blog-title">{posts[0].title}</h3>
              <p className="blog-excerpt">{posts[0].excerpt}</p>
              <a href="#" className="read-more">Read More <FaArrowRight /></a>
            </div>
          </div>

          {/* Side Posts */}
          <div className="blog-side">
            {posts.slice(1).map(post => (
              <div className="blog-card side-post" key={post.id}>
                <div className="blog-img-sm">
                  <img src={post.img} alt={post.title} />
                  <span className="blog-cat">{post.cat}</span>
                </div>
                <div className="blog-body-sm">
                  <div className="blog-meta">
                    <span><FaCalendarAlt /> {post.date}</span>
                    <span><FaCommentAlt /> {post.comments}</span>
                  </div>
                  <h4 className="blog-title-sm">{post.title}</h4>
                  <a href="#" className="read-more sm">Read More <FaArrowRight /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
