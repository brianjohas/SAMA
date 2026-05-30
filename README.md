# SAMA Fashion - Online Clothing Store

## Project Overview

SAMA Fashion is a modern, responsive e-commerce website specializing in online clothing sales. The project includes a customer-facing storefront with product browsing capabilities and an admin dashboard for inventory management.

## Features

### Customer Features
- **Responsive Design**: Mobile-friendly layout that works across all devices
- **Product Catalog**: Browse clothing across multiple categories (Men, Women, Kids, Accessories, Footwear)
- **New Arrivals**: Dedicated section for the latest fashion items
- **Product Filtering**: Filter products by category and availability
- **Shopping Experience**: Add to cart and wishlist functionality (UI ready)
- **Slider**: Auto-rotating banner showcase
- **Contact Form**: Get in touch with customer support

### Admin Dashboard
- **Product Management**: Add, edit, and delete products
- **Inventory Control**: Track stock status for items
- **Order Overview**: View recent customer orders
- **Category Management**: Organize products by categories
- **Dashboard Analytics**: Quick overview of key metrics
- **Secure Access**: Password-protected admin panel

## Project Structure

```
SAMA/
├── index.html              # Homepage
├── shop.html              # Product shop page
├── new-arrivals.html      # New arrivals showcase
├── contact.html           # Contact page
├── admin.html             # Admin dashboard
├── css/
│   ├── style.css          # Main styling with primary blue theme
│   └── admin.css          # Admin panel styling
├── js/
│   ├── main.js            # Core functionality (slider, filtering, products)
│   └── admin.js           # Admin dashboard functionality
└── README.md              # Project documentation
```

## Color Scheme

The website uses a professional blue color scheme:
- **Primary Blue**: #0066CC
- **Light Blue**: #E6F0FF
- **Dark Blue**: #004999
- **Accent Colors**: White, Light Gray

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript (ES6+)**: Dynamic functionality and interactions
- **Font Awesome**: Icon library for UI elements

## Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/brianjohas/SAMA.git
```

2. Navigate to the project directory:
```bash
cd SAMA
```

3. Open the website in your browser:
```bash
# Option 1: Open index.html directly
open index.html

# Option 2: Use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## Admin Access

To access the admin dashboard:
1. Navigate to `/admin.html`
2. Default password: `admin123` (demo only - change in production)
3. Manage products, categories, and orders from the dashboard

**Important**: This is a demo password. In production, implement proper authentication with:
- User authentication system
- Secure password hashing
- Session management
- Role-based access control

## Product Data

The store currently features 10 sample products across categories:
- Men's Clothing
- Women's Clothing
- Kids' Clothing
- Accessories
- Footwear

Sample product data is stored in JavaScript arrays and rendered dynamically. In production, integrate with a backend API/database.

## Pages & Navigation

### Public Pages
- **Home** (`index.html`): Featured products and category showcase
- **Shop** (`shop.html`): Full product catalog with filtering
- **New Arrivals** (`new-arrivals.html`): Latest products by category
- **Contact** (`contact.html`): Customer inquiry form

### Admin Page
- **Dashboard** (`admin.html`): Product and inventory management

## Features Breakdown

### Homepage
- Auto-rotating banner slider
- Featured products grid
- Category-based browsing
- Product search and filtering

### Shop Page
- Full product catalog
- Advanced filtering by category
- Stock availability indicators
- Product cards with ratings

### Admin Dashboard
- Secure login system
- Product CRUD operations
- Category management
- Stock status tracking
- Order overview

## Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication system
- [ ] Shopping cart functionality
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist persistence
- [ ] Email notifications
- [ ] Search functionality
- [ ] Product recommendations

## File Sizes

- `js/main.js`: ~9.5 KB
- `js/admin.js`: ~8.5 KB
- `css/style.css`: ~17.5 KB
- `css/admin.css`: ~10.2 KB

## Performance

The website is optimized for:
- Fast load times
- Smooth animations
- Responsive interactions
- Efficient JavaScript execution

## License

This project is open source and available under the MIT License.

## Author

Created by brianjohas

## Support

For issues, questions, or contributions, please visit the GitHub repository:
https://github.com/brianjohas/SAMA

---

**Note**: This is a frontend-focused e-commerce template. To make it production-ready, you'll need to:
1. Set up a backend server
2. Implement a database for products and orders
3. Add proper authentication and authorization
4. Integrate payment processing
5. Set up SSL/HTTPS
6. Implement proper error handling and logging
