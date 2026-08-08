export const translations = {
  FR: { title: "🔥 VENDO STORE FRANCE", btn: "VOIR PRODUIT", marge: "+5€ marge", currency: "€" },
  US: { title: "🔥 VENDO STORE USA", btn: "VIEW PRODUCT", marge: "+$5 profit", currency: "$" },
  CM: { title: "🔥 VENDO STORE CAMEROUN", btn: "VOIR PRODUIT", marge: "+3000F marge", currency: "F" }
};

const addMarge = (p) => ({...p, prix: (p.prixF + 5).toFixed(2), marge: 5.00});

export const products = [
  // ========== 20 PRODUITS FRANCE ==========
  ...[
    {id: 1, pays: "FR", nom: "Air Fryer 8L Écran Tactile", nom_en: "8L Air Fryer", prixF: 49.99, img: "https://images.unsplash.com/photo-1585032226651-75945a013316?w=600", categorie: "Maison", badge: "+50K VENDUS", desc: "1800W | Sans huile | Cuisson saine | 4.8★"},
    {id: 2, pays: "FR", nom: "Brosse Lissante Électrique", nom_en: "Hair Straightener Brush", prixF: 13.99, img: "https://images.unsplash.com/photo-1522337360788-4593f64dc85b?w=600", categorie: "Beauté", badge: "+100K", desc: "Lissage rapide | Anti-frisottis | 3 températures"},
    {id: 3, pays: "FR", nom: "Lampe LED Projecteur Galaxy", nom_en: "Galaxy Projector Lamp", prixF: 12.99, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600", categorie: "Maison", badge: "VIRAL TIKTOK", desc: "Ciel étoilé | Bluetooth | Télécommande"},
    {id: 4, pays: "FR", nom: "O'CHEAL Crème Anti-rides", nom_en: "Anti-wrinkle Cream", prixF: 1.76, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", categorie: "Beauté", badge: "+30K", desc: "Anti-rides | Collagène | Massage | 4.7★"},
    {id: 5, pays: "FR", nom: "Robe Courte Fleurie Dos Nu", nom_en: "Floral Summer Dress", prixF: 9.79, img: "https://images.unsplash.com/photo-1515378791036-0648ba3beba3?w=600", categorie: "Mode Femme", badge: "710 VENDUS", desc: "Imprimé floral | Été | Dos nu | 4.5★"},
    {id: 6, pays: "FR", nom: "Sac à Dos Anti-vol USB", nom_en: "Anti-theft Backpack", prixF: 20.99, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", categorie: "Mode", badge: "+30K", desc: "Anti-vol | Port USB | Imperméable | 15 pouces"},
    {id: 7, pays: "FR", nom: "Masseur Dos Cou Shiatsu", nom_en: "Shiatsu Massager", prixF: 24.99, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600", categorie: "Beauté", badge: "+20K", desc: "Chaleur | Soulage douleurs | Rechargeable"},
    {id: 8, pays: "FR", nom: "Mini Imprimante Thermique", nom_en: "Mini Thermal Printer", prixF: 19.99, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", categorie: "Tech", badge: "VIRAL", desc: "Sans encre | Bluetooth | iOS/Android"},
    {id: 9, pays: "FR", nom: "Gourde Intelligente 1L", nom_en: "Smart Water Bottle", prixF: 17.99, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600", categorie: "Sport", badge: "2026", desc: "Rappel hydratation | LED | App mobile"},
    {id: 10, pays: "FR", nom: "Pistolet Massage Musculaire", nom_en: "Massage Gun", prixF: 29.99, img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600", categorie: "Sport", badge: "PRO", desc: "6 têtes | 4 vitesses | 2000mAh"},
    {id: 11, pays: "FR", nom: "Chargeur Rapide 65W", nom_en: "65W Fast Charger", prixF: 14.99, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600", categorie: "Tech", badge: "PD 65W", desc: "USB-C + USB-A | iPhone/Samsung/Laptop"},
    {id: 12, pays: "FR", nom: "Crème Yeux Collagène", nom_en: "Collagen Eye Cream", prixF: 1.93, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", categorie: "Beauté", badge: "6K VENDUS", desc: "Anti-cernes | Anti-poches | 4.7★"},
    {id: 13, pays: "FR", nom: "Jean Droit Taille Haute", nom_en: "High Waist Jeans", prixF: 16.99, img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600", categorie: "Mode Femme", badge: "BASIC", desc: "Stretch | Poches | Bleu foncé"},
    {id: 14, pays: "FR", nom: "Support Téléphone Voiture", nom_en: "Car Phone Holder", prixF: 3.99, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", categorie: "Tech", badge: "+200K", desc: "Aimant puissant | 360° | Tableau bord"},
    {id: 15, pays: "FR", nom: "Lumière Escalier LED", nom_en: "LED Stair Light", prixF: 9.99, img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600", categorie: "Maison", badge: "PACK 10", desc: "Détecteur mouvement | Rechargeable"},
    {id: 16, pays: "FR", nom: "Ensemble Sport Femme", nom_en: "Women Sport Set", prixF: 14.99, img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600", categorie: "Mode Femme", badge: "YOGA", desc: "Brassière + Legging | Seamless"},
    {id: 17, pays: "FR", nom: "T-shirt Oversize Homme", nom_en: "Oversize T-shirt", prixF: 7.99, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600", categorie: "Mode Homme", badge: "TREND", desc: "Coton 220g | Coupe large | Streetwear"},
    {id: 18, pays: "FR", nom: "Sérum Vitamine C", nom_en: "Vitamin C Serum", prixF: 4.99, img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600", categorie: "Beauté", badge: "ÉCLAIRCIT", desc: "Éclat | Taches | Acide hyaluronique"},
    {id: 19, pays: "FR", nom: "Pinceau Maquillage 32pcs", nom_en: "32pcs Makeup Brush", prixF: 8.99, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600", categorie: "Beauté", badge: "PRO", desc: "Poils synthétiques | Sac inclus"},
    {id: 20, pays: "FR", nom: "Patch Boutons 100pcs", nom_en: "100pcs Pimple Patch", prixF: 0.99, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", categorie: "Beauté", badge: "+500K", desc: "Invisible | Soigne en 6h | Hydrocolloïde"}
  ].map(addMarge),

  // ========== 15 PRODUITS USA ==========
  ...[
    {id: 21, pays: "US", nom: "Smartwatch for Men", nom_en: "Smartwatch for Men", prixF: 24.99, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", categorie: "Watches", badge: "+50K SOLD", desc: "Calls | WhatsApp | Heart rate | 10 days battery"},
    {id: 22, pays: "US", nom: "Foldable Treadmill", nom_en: "Foldable Treadmill", prixF: 194.99, img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600", categorie: "Sport", badge: "FREE SHIPPING", desc: "1HP | 12km/h | Home use | Foldable"},
    {id: 23, pays: "US", nom: "Men's 3 Piece Suit", nom_en: "Men's 3 Piece Suit", prixF: 54.99, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600", categorie: "Men Fashion", badge: "WEDDING", desc: "Jacket + Pants + Vest | Black | Slim fit"},
    {id: 24, pays: "US", nom: "LED Face Mask 7 Colors", nom_en: "LED Face Mask", prixF: 44.99, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", categorie: "Beauty", badge: "PRO", desc: "Anti-acne | Anti-aging | 7 colors | Rechargeable"},
    {id: 25, pays: "US", nom: "Running Shoes Men", nom_en: "Running Shoes", prixF: 22.99, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", categorie: "Men Fashion", badge: "COMFORT", desc: "Breathable | Cushion | Light | Running"},
    {id: 26, pays: "US", nom: "Muscle Massage Gun", nom_en: "Massage Gun", prixF: 29.99, img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600", categorie: "Sport", badge: "PRO", desc: "6 heads | 4 speeds | 2000mAh | Relieves muscles"},
    {id: 27, pays: "US", nom: "Leather Jacket Men", nom_en: "Leather Jacket", prixF: 29.99, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600", categorie: "Men Fashion", badge: "BOMBER", desc: "PU Leather | Zipper pockets | Style"},
    {id: 28, pays: "US", nom: "Evening Dress Long", nom_en: "Long Evening Dress", prixF: 30.99, img: "https://images.unsplash.com/photo-1515378791036-0648ba3beba3?w=600", categorie: "Women Fashion", badge: "LUXE", desc: "Sequins | Backless | Party | Elegant"},
    {id: 29, pays: "US", nom: "Couple Watch Set", nom_en: "Couple Watch", prixF: 34.99, img: "https://images.unsplash.com/photo-1524805444758-089113d48a4a?w=600", categorie: "Watches", badge: "PACK 2", desc: "Men + Women | Gift box | Luxury"},
    {id: 30, pays: "US", nom: "Mechanical Skeleton Watch", nom_en: "Skeleton Watch", prixF: 39.99, img: "https://images.unsplash.com/photo-1524805444758-089113d48a4a?w=600", categorie: "Watches", badge: "PREMIUM", desc: "Automatic | Transparent | Leather"},
    {id: 31, pays: "US", nom: "Tactical Military Watch", nom_en: "Tactical Watch", prixF: 19.99, img: "https://images.unsplash.com/photo-1524805444758-089113d48a4a?w=600", categorie: "Watches", badge: "TACTICAL", desc: "Compass | Thermometer | 10ATM waterproof"},
    {id: 32, pays: "US", nom: "IPL Hair Removal", nom_en: "IPL Hair Removal", prixF: 84.99, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", categorie: "Beauty", badge: "PERMANENT", desc: "IPL | 999999 flashes | Body + Face"},
    {id: 33, pays: "US", nom: "RF Facial Device", nom_en: "RF Facial Device", prixF: 34.99, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", categorie: "Beauty", badge: "LIFTING", desc: "EMS | Firming | Anti-wrinkle"},
    {id: 34, pays: "US", nom: "Cargo Pants Men", nom_en: "Cargo Pants", prixF: 13.99, img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600", categorie: "Men Fashion", badge: "MILITARY", desc: "Multi-pockets | Cotton | Straight"},
    {id: 35, pays: "US", nom: "Health Ring", nom_en: "Health Ring", prixF: 29.99, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600", categorie: "Tech", badge: "NEW", desc: "Heart rate | Sleep | 7 days battery"}
  ].map(addMarge),

  // ========== 15 PRODUITS CAMEROUN ==========
  ...[
    {id: 36, pays: "CM", nom: "Ecouteurs Bluetooth TWS", nom_en: "TWS Earbuds", prixF: 9.99, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600", categorie: "Tech", badge: "+80K VENDUS", desc: "Bluetooth 5.3 | 40h batterie | Écran LED"},
    {id: 37, pays: "CM", nom: "Montre Geneva Bracelet Cuir", nom_en: "Geneva Leather Watch", prixF: 14.99, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600", categorie: "Montres", badge: "LUXE", desc: "Bracelet cuir | Boîte cadeau | Quartz"},
    {id: 38, pays: "CM", nom: "Montre Femme Maille Or", nom_en: "Women Gold Watch", prixF: 12.99, img: "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?w=600", categorie: "Montres", badge: "ÉLÉGANT", desc: "Maille acier | Quartz | Étanche 3ATM"},
    {id: 39, pays: "CM", nom: "Montre Sport Chrono", nom_en: "Sport Watch", prixF: 17.99, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600", categorie: "Montres", badge: "SPORT", desc: "Chrono | Alarme | Étanche 5ATM"},
    {id: 40, pays: "CM", nom: "Montre Enfant LED", nom_en: "Kids LED Watch", prixF: 4.99, img: "https://images.unsplash.com/photo-1524805444758-089113d48a4a?w=600", categorie: "Montres", badge: "ENFANT", desc: "Silicone | Couleurs | Étanche"},
    {id: 41, pays: "CM", nom: "Robe T-shirt Verte", nom_en: "Green T-shirt Dress", prixF: 5.59, img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", categorie: "Mode Femme", badge: "+1K", desc: "Avec poches | Décontractée | Trapèze"},
    {id: 42, pays: "CM", nom: "Sweat Zippé Noir", nom_en: "Black Hoodie", prixF: 11.99, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600", categorie: "Mode", badge: "STREET", desc: "Capuche | Unisexe | Épais | Streetwear"},
    {id: 43, pays: "CM", nom: "Short Lin Beige", nom_en: "Linen Short", prixF: 7.99, img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600", categorie: "Mode Femme", badge: "ÉTÉ", desc: "Cordon | Poches | Fluide | Été"},
    {id: 44, pays: "CM", nom: "Chemise Oversize", nom_en: "Oversize Shirt", prixF: 10.99, img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600", categorie: "Mode Femme", badge: "PACK 4", desc: "Blanc | Rose | Jaune | Rayé"},
    {id: 45, pays: "CM", nom: "Lunettes Soleil Cat Eye", nom_en: "Cat Eye Sunglasses", prixF: 4.99, img: "https://images.unsplash.com/photo-1511499767150-a48a237f8cb9?w=600", categorie: "Mode Femme", badge: "UV400", desc: "Anti-UV | Rétro | 3 couleurs"},
    {id: 46, pays: "CM", nom: "Huile Barbe Homme", nom_en: "Beard Oil", prixF: 5.99, img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600", categorie: "Beauté", badge: "HOMME", desc: "Croissance | Adoucit | Bois de santal"},
    {id: 47, pays: "CM", nom: "Brosse Nettoyage Visage", nom_en: "Face Cleansing Brush", prixF: 7.99, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", categorie: "Beauté", badge: "SILICONE", desc: "Étanche | 3 modes | Nettoie pores"},
    {id: 48, pays: "CM", nom: "ENVISHA Crème Retinol", nom_en: "ENVISHA Retinol Cream", prixF: 6.99, img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600", categorie: "Beauté", badge: "4.8★", desc: "Jour & Nuit | Anti-boutons | 2K vendus"},
    {id: 49, pays: "CM", nom: "Coffret Soins 10 Pièces", nom_en: "10pcs Skincare Set", prixF: 24.99, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", categorie: "Beauté", badge: "PACK", desc: "Routine complète | Toner + Sérum + Crème"},
    {id: 50, pays: "CM", nom: "Montre PAAZOMU Cadran Vert", nom_en: "PAAZOMU Green Watch", prixF: 15.00, img: "https://images.unsplash.com/photo-1524805444758-089113d48a4a?w=600", categorie: "Montres", badge: "LUXE", desc: "Acier inox | Quartz | Date + Jour"}
  ].map(addMarge)
];
