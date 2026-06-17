type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/store_xx', label: 'StoreHome' },
  { href: '/store_xx/about_xx', label: 'about_xx' },
  { href: '/store_xx/products_xx', label: 'products_xx' },
  { href: '/store_xx/favorites_xx', label: 'favorites_xx' },
  { href: '/store_xx/reviews_xx', label: 'reviews_xx' },
  { href: '/store_xx/cart_xx', label: 'cart_xx' },
  { href: '/store_xx/orders_xx', label: 'orders_xx' },
];

export const linksAdmin: NavLink[] = [
  { href: '/store_xx/admin_xx/sales_xx', label: 'dashboard_xx' },
];

export const adminLinks: NavLink[] = [
  { href: '/store_xx/admin_xx/sales_xx', label: 'sales_xx' },
  { href: '/store_xx/admin_xx/products_xx', label: 'my products_xx' },
  // { href: '/store_xx/admin_xx/products_xx/create', label: 'create product_xx' },
];
