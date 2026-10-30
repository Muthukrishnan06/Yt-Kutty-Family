export const SHOP_PHONE = '6381574175';
export const SHOP_PHONE_DISPLAY = '+91 63815 74175';
export const SHOP_LOCATION_DISPLAY = 'Tirunelveli, Tamil Nadu, India';

export function getWhatsAppUrl(message: string): string {
  const cleanNumber = '916381574175';
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getProductEnquiryUrl(productName: string, price: number): string {
  const msg = `Hello Yt Kutty Sports Wear, I am interested in "${productName}" (Price: ₹${price.toLocaleString('en-IN')}) from your website. Please share availability and delivery/shop details.`;
  return getWhatsAppUrl(msg);
}

export function getServiceEnquiryUrl(serviceName: string, price: number): string {
  const msg = `Hello Yt Kutty Sports Wear, I would like to enquire about your "${serviceName}" service (Approx: ₹${price}). Can I bring my bat / place an order?`;
  return getWhatsAppUrl(msg);
}

export function getCartEnquiryUrl(items: Array<{ name: string; quantity: number; price: number }>, total: number, note?: string): string {
  let lines = [`*New Cricket Equipment Enquiry from Website*`, `*Yt Kutty Sports Wear - Tirunelveli*`, ``];
  items.forEach((item, idx) => {
    lines.push(`${idx + 1}. *${item.name}* x ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`);
  });
  lines.push(``);
  lines.push(`*Estimated Total: ₹${total.toLocaleString('en-IN')}*`);
  if (note && note.trim()) {
    lines.push(`*Customer Note:* ${note.trim()}`);
  }
  lines.push(``);
  lines.push(`Please confirm stock and collection/shipping details. Thank you!`);
  return getWhatsAppUrl(lines.join('\n'));
}
