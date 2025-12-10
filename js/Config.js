// js/config.js
window.SITE = {
  title: "208GlossBoss",
  tagline: "Mobile Auto Detailing • Treasure Valley",
  phone: "208-576-8594",
  email: "208GlossBoss@gmail.com",
  serviceArea: "Boise, Meridian, Nampa, Caldwell, Kuna",
  // Services shown on Services page & Book form
  services: [
    { id: "interior", title: "Interior Detail", price: 100, desc: "Deep vacuum, wipe down plastics, window cleaning, protection where applicable.", est: "1-2 hours" },
    { id: "exterior", title: "Exterior Detail", price: 65, desc: "Hand wash, wheel cleaning, tire dressing, spray sealant.", est: "45-90 minutes" },
    { id: "full", title: "Full Detail", price: 180, desc: "Complete interior + exterior, clay, polish if requested.", est: "3-5 hours" }
  ],
  // Gallery: images and videos displayed in gallery page
  gallery: [
    { type: "image", src: "images/gallery1.jpg", alt: "Yukon interior - before/after 1" },
    { type: "image", src: "images/gallery2.jpg", alt: "Yukon interior - before/after 2" },
    { type: "image", src: "images/gallery3.jpg", alt: "Yukon interior - before/after 3" },
    { type: "image", src: "images/gallery4.jpg", alt: "Yukon interior - before/after 4" },
    { type: "video", src: "images/video1.mp4", poster: "images/gallery1.jpg", alt: "Yukon Detail Video" }
  ],
  // Social / extra
  facebook: "",
  instagram: "",
  // FormSubmit setup (sends booking form emails here)
  bookingEmail: "208GlossBoss@gmail.com"
};
