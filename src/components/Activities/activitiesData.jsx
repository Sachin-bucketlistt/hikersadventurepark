/* Activities data — each activity has a category, name, price, and image path.
   Drop your photos into /public/activities/ and name them to match the `image` field below. */

export const CATEGORIES = ['All', 'Speed', 'Heights', 'Family', 'Adrenaline', 'Teams', 'Water'];

export const ACTIVITIES = [
  // SPEED
  { category: 'Speed', name: 'Go Kart Adult Couple (3 Laps)', price: '₹600', image: 'https://media1.thrillophilia.com/filestore/qp3nkpxxzjt9vl4s95no7x3hkr2z_steptodown.com508578.jpg?w=400&dpr=2' },
  { category: 'Speed', name: 'Go Kart Adult (3 Laps)', price: '₹800', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yKkzeyIg5fspIa-2GR8oR-yiehgdFcqxP_R5XeOWlZP0sHJvvfiL8LLN&s=10' },
  { category: 'Speed', name: 'Superman Shot (First Time in Rishikesh)', price: '₹900', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/06/sm2.jpg' },
  { category: 'Speed', name: 'Go Kart Kids (3 Laps)', price: '₹600', image: 'https://cdn.shopify.com/s/files/1/1900/2575/files/How_to_Improve_Go_Karting_Lap_Times.jpg?v=1710849693' },
  { category: 'Speed', name: 'Eagle Flight (ZipLine)', price: '₹800', image: 'https://cdn.img.gen.in/assets/Business/10589/Feeds/8096/10589_638645436031442078121548.jpg?rendered=true' },
  { category: 'Speed', name: 'Sky Roller', price: '₹800', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&auto=format&fit=crop' },
  { category: 'Speed', name: 'Couple Go-Kart', price: '₹1,100', image: 'https://media.istockphoto.com/id/1322272202/photo/two-people-riding-a-double-seat-go-kart.jpg?s=612x612&w=0&k=20&c=K5R8251rL7G3e8tGq5jN-hS55x99dZ5J91811L_eL5c=' },
  { category: 'Speed', name: 'Superman Shot', price: '₹1,600', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/06/sm2.jpg' },
  { category: 'Speed', name: 'Sky Cycle (Adult)', price: '₹600', image: 'https://elevate-tsa.com/wp-content/uploads/2020/03/Sky-Cycling-1-scaled.jpg' },

  // HEIGHTS
  { category: 'Heights', name: 'Sky Cycle (Kids)', price: '₹400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pg8mDR0KwBKBNpFzcgE9EJQh3dSIxpyOYitoEOU_k_WvMox4dg41AqY&s=10' },
  { category: 'Heights', name: 'Tandem Sky-Cycle', price: '₹1,000', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500' },
  { category: 'Heights', name: 'Rock Climbing', price: '₹500', image: 'https://woodycamps.com/wp-content/uploads/2021/09/Rock-Climbing-Featured.jpg' },
  { category: 'Heights', name: 'Rock Climbing [50 Feet]', price: '₹500', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Rock-Climbing.webp' },
  { category: 'Heights', name: 'Rope Course Level 1 (10 different activities, challenge yourself)', price: '₹400', image: 'https://images.unsplash.com/photo-1508847154043-be12a927dfa6?w=500' },
  { category: 'Heights', name: 'Rope Course Level 2 (10 different activities, challenge yourself)', price: '₹500', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500' },
  { category: 'Heights', name: 'Rope Course Level 3 (10 different activities, challenge yourself)', price: '₹400', image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?w=500' },
  { category: 'Heights', name: 'Full Rope Course wth 30 Activities', price: '₹1,200', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500' },
  { category: 'Heights', name: 'Multi Activities Tower and Rope Course', price: '₹2,500', image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=500' },

  // ADRENALINE
  { category: 'Adrenaline', name: 'Giant Swing – Most Popular in Rishikesh', price: '₹600', image: 'https://campinginrishikesh.in/wp-content/uploads/2023/11/giant_swing_activity.jpg' },
  { category: 'Adrenaline', name: 'Giant Swing Per Person', price: '₹600', image: 'https://campinginrishikesh.in/wp-content/uploads/2023/11/giant_swing_activity.jpg' },
  { category: 'Adrenaline', name: 'Reverse Bungee – Most Popular in Rishikesh', price: '₹700', image: 'https://thrillfactory.in/cdn/shop/files/23591.jpg?v=1762259360&width=1200' },
  { category: 'Adrenaline', name: 'Rappeling – Most Popular in Rishikesh', price: '₹400', image: 'https://woodycamps.com/wp-content/uploads/2021/09/Rock-Climbing-Featured.jpg' },
  { category: 'Adrenaline', name: 'Slithering', price: '₹400', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/06/Slithering-min-300x300-1.jpg' },
  { category: 'Adrenaline', name: 'Tandem Zipline', price: '₹2,500', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500' },
  { category: 'Adrenaline', name: 'Giant Swing + Zipline', price: '₹1,000', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500' },

  // FAMILY
  { category: 'Family', name: 'Commondo Net Climbing', price: '₹400', image: 'https://5.imimg.com/data5/UZ/DZ/KH/SELLER-28262289/commando-net.jpg' },
  { category: 'Family', name: 'Tyre Wall Climbing', price: '₹400', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/06/tyre-wall.webp' },
  { category: 'Family', name: 'Snooker', price: '₹200', image: 'https://images.unsplash.com/photo-1544281679-5139f37a4773?w=500' },
  { category: 'Family', name: 'Archery (5 shots)', price: 'Under Maintenance', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500' },

  // TEAMS
  { category: 'Teams', name: 'Paint Ball', price: '₹800', image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500' },
  { category: 'Teams', name: 'Zip Zap Zoom', price: '₹1,700', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500' },
  { category: 'Teams', name: 'Full Park Access (42+ Activities)', price: '₹5,500', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/06/WhatsApp-Image-2022-04-12-at-12.04.09-PM-300x300-1.jpeg' },
  { category: 'Teams', name: 'Combo 10- sky tour, Race, swing', price: '₹2,500', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 9- Swing, Ride, Race', price: '₹1,800', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 8-Sky Tour', price: '₹3,900', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 7-Sky Tour with Go Kart', price: '₹4,500', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 6-Couple – Swing and Roll', price: '₹2,200', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 5- Couple – Roll and Ride', price: '₹2,100', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 4-Race, Ride and Paint', price: '₹2,000', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 3-Roll, Ride and Race', price: '₹2,000', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 2 – Roll and Paint', price: '₹1,400', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Combo 1-Race and Paint', price: '₹1,400', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },
  { category: 'Teams', name: 'Sky Tour Combo', price: '₹3,000', image: 'https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Combo-385x385.webp' },

  // WATER (keep the existing water activities as requested to preserve existing structure)
  { category: 'Water', name: 'Kayaking', price: '₹500', image: '/activities/kayaking.jpg' },
  { category: 'Water', name: 'Splash Pad', price: '₹300', image: '/activities/splash-pad.jpg' },
  { category: 'Water', name: 'Raft Ride', price: '₹400', image: '/activities/raft-ride.jpg' }
];
