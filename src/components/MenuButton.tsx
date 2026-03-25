'use client';

import { useState, useEffect, useCallback, type MouseEvent } from 'react';
import styles from './MenuButton.module.css';

/* ─── Types ─── */
interface MenuItem {
  nameAr: string;
  nameEn: string;
  price: string;
}

interface MenuCategory {
  titleAr: string;
  titleEn: string;
  items: MenuItem[];
}

/* ─── Kuwaiti Dinar format: always 3 decimal places ─── */
function formatPrice(raw: number): string {
  return raw.toFixed(3);
}

/* ─── Full menu data extracted from menu images ─── */
const MENU_DATA: MenuCategory[] = [
  /* ── Club Sandwiches ── */
  {
    titleAr: 'كلوب ساندويتشات',
    titleEn: 'Club Sandwiches',
    items: [
      { nameAr: 'كلوب حلوم', nameEn: 'Halloumi Club', price: formatPrice(1.35) },
      { nameAr: 'زنجر كلوب', nameEn: 'Zinger Club', price: formatPrice(1.5) },
      { nameAr: 'كلوب رويال', nameEn: 'Royal Club', price: formatPrice(1.5) },
      { nameAr: 'كلوب لحم بقر', nameEn: 'Beef Club', price: formatPrice(1.5) },
      { nameAr: 'كلوب بيض', nameEn: 'Egg Club', price: formatPrice(1.25) },
      { nameAr: 'كلوب راشد', nameEn: 'Rashid Club', price: formatPrice(1.5) },
    ],
  },

  /* ── Meals ── */
  {
    titleAr: 'الوجبات',
    titleEn: 'Meals',
    items: [
      { nameAr: 'شكن فيليه فرنسي', nameEn: 'Chicken Fillet French', price: formatPrice(1) },
      { nameAr: 'همبرجر فرنسي', nameEn: 'Hamburger French', price: formatPrice(1) },
      { nameAr: 'تلياني فرنسي', nameEn: 'Talyani French', price: formatPrice(1.2) },
      { nameAr: 'بروان فرنسي', nameEn: 'Prawn French', price: formatPrice(1.1) },
      { nameAr: 'شباب فرنسي', nameEn: 'Shabab French', price: formatPrice(1.1) },
      { nameAr: 'زعيم فرنسي', nameEn: 'Zaeem French', price: formatPrice(1.1) },
      { nameAr: 'لديرة فرنسي', nameEn: 'Ladeera French', price: formatPrice(1.1) },
      { nameAr: 'هوت دوق فرنسي', nameEn: 'Hotdog French', price: formatPrice(1.1) },
      { nameAr: 'مرتديلا', nameEn: 'Mortadella', price: formatPrice(0.7) },
      { nameAr: 'همبرجر متن', nameEn: 'Hamburger Mutton', price: formatPrice(1) },
      { nameAr: 'همبرجر دجاج', nameEn: 'Hamburger Chicken', price: formatPrice(1) },
      { nameAr: 'كنق برجر لحم', nameEn: 'King Burger Beef', price: formatPrice(1.2) },
      { nameAr: 'كنق برجر دجاج', nameEn: 'King Burger Chicken', price: formatPrice(1.35) },
    ],
  },

  /* ── Sandwiches ── */
  {
    titleAr: 'سندويشات',
    titleEn: 'Sandwiches',
    items: [
      { nameAr: 'حلوم', nameEn: 'Halloum', price: formatPrice(0.4) },
      { nameAr: 'مكس', nameEn: 'Mix', price: formatPrice(0.15) },
      { nameAr: 'بيض طماط', nameEn: 'Egg Tomato', price: formatPrice(0.2) },
      { nameAr: 'بيض مسلوق', nameEn: 'Egg Boiled', price: formatPrice(0.15) },
      { nameAr: 'بيض مقلي', nameEn: 'Egg Fry', price: formatPrice(0.2) },
      { nameAr: 'لبنة', nameEn: 'Labna', price: formatPrice(0.15) },
      { nameAr: 'جبن كرافت', nameEn: 'Cheese Kraft', price: formatPrice(0.15) },
      { nameAr: 'مرتديلا', nameEn: 'Mortadella', price: formatPrice(0.15) },
      { nameAr: 'هوت دوق', nameEn: 'Hotdog', price: formatPrice(0.35) },
      { nameAr: 'كيما', nameEn: 'Keema', price: formatPrice(0.35) },
      { nameAr: 'تكة دجاج', nameEn: 'Chicken Tikka', price: formatPrice(0.35) },
      { nameAr: 'لحم', nameEn: 'Mutton', price: formatPrice(0.35) },
      { nameAr: 'فلافل', nameEn: 'Filafil', price: formatPrice(0.15) },
    ],
  },

  /* ── Chapathi Mix ── */
  {
    titleAr: 'شباتي خلطة',
    titleEn: 'Chapathi Mix',
    items: [
      { nameAr: 'شباتي راشد', nameEn: 'Chapathi Rashid', price: formatPrice(0.4) },
      { nameAr: 'شباتي ببجي', nameEn: 'Chapathi Pubg', price: formatPrice(0.35) },
      { nameAr: 'شباتي ناصر', nameEn: 'Chapathi Nasar', price: formatPrice(0.35) },
      { nameAr: 'شباتي عزيز', nameEn: 'Chapathi Azoez', price: formatPrice(0.35) },
      { nameAr: 'شباتي اماراتي', nameEn: 'Chapathi Emarati', price: formatPrice(0.35) },
      { nameAr: 'شباتي بيرلنقو', nameEn: 'Chapathi Berlingo', price: formatPrice(0.2) },
      { nameAr: 'شباتي ٧٧', nameEn: 'Chapathi 77', price: formatPrice(0.2) },
      { nameAr: 'شباتي سارة', nameEn: 'Chapathi Sara', price: formatPrice(0.2) },
      { nameAr: 'شباتي نورة', nameEn: 'Chapathi Nora', price: formatPrice(0.2) },
      { nameAr: 'شباتي منيرة', nameEn: 'Chapathi Muneera', price: formatPrice(0.2) },
      { nameAr: 'شباتي عسكري', nameEn: 'Chapathi Askari', price: formatPrice(0.2) },
      { nameAr: 'ش. بيض طماط جبن', nameEn: 'Ch. Egg Tomato Cheese', price: formatPrice(0.2) },
      { nameAr: 'ش. جبن كرافت', nameEn: 'Ch. Cheese Kraft', price: formatPrice(0.15) },
      { nameAr: 'شباتي تكة', nameEn: 'Chapathi Tikka', price: formatPrice(0.25) },
      { nameAr: 'شباتي رول تمر', nameEn: 'Chapathi Dates Roll', price: formatPrice(0.2) },
      { nameAr: 'شباتي لوتس بسكويت', nameEn: 'Chapathi Lotus Biscuit', price: formatPrice(0.25) },
      { nameAr: 'شباتي رويال فارس', nameEn: 'Chapathi Royal Faris', price: formatPrice(0.35) },
      { nameAr: 'شباتي عسل جبن', nameEn: 'Chapathi Honey Cheese', price: formatPrice(0.35) },
      { nameAr: 'شباتي اسباني', nameEn: 'Chapathi Spanish', price: formatPrice(0.4) },
      { nameAr: 'شباتي خلطات كبير', nameEn: 'Chapathi Mix Large', price: formatPrice(7) },
      { nameAr: 'شباتي خلطات صغير', nameEn: 'Chapathi Mix Small', price: formatPrice(4) },
    ],
  },

  /* ── Samoon Round ── */
  {
    titleAr: 'صمون مدور',
    titleEn: 'Samoon Round',
    items: [
      { nameAr: 'همبرجر', nameEn: 'Hamburger', price: formatPrice(0.5) },
      { nameAr: 'همبرجر دجاج', nameEn: 'Hamburger Chicken', price: formatPrice(0.7) },
      { nameAr: 'شكن فيليه', nameEn: 'Chicken Fillet', price: formatPrice(0.8) },
      { nameAr: 'كنق برجر لحم', nameEn: 'King Burger Beef', price: formatPrice(0.85) },
      { nameAr: 'كنق برجر دجاج', nameEn: 'King Burger Chicken', price: formatPrice(0.85) },
    ],
  },

  /* ── Snacks ── */
  {
    titleAr: 'مأكولات خفيفة',
    titleEn: 'Snacks',
    items: [
      { nameAr: 'شباتي', nameEn: 'Chapathi', price: formatPrice(0.05) },
      { nameAr: 'سمبوسة خضار', nameEn: 'Samboosa Veg.', price: formatPrice(0.05) },
      { nameAr: 'سمبوسة جبن', nameEn: 'Samboosa Cheese', price: formatPrice(0.05) },
      { nameAr: 'سمبوسة بيض', nameEn: 'Samboosa Egg', price: formatPrice(0.05) },
      { nameAr: 'فلافل', nameEn: 'Falafil', price: formatPrice(0.05) },
      { nameAr: 'كبة بطاط', nameEn: 'Potato Kubba', price: formatPrice(0.05) },
      { nameAr: 'بطاط مدور', nameEn: 'Potato Round', price: formatPrice(0.025) },
      { nameAr: 'بطاط رول', nameEn: 'Potato Roll', price: formatPrice(0.05) },
    ],
  },

  /* ── Breakfast & Plates ── */
  {
    titleAr: 'ريوق و مواعين',
    titleEn: 'Breakfast & Plates',
    items: [
      { nameAr: 'ورق عنب', nameEn: 'Grape Leaves', price: formatPrice(1) },
      { nameAr: 'حمص', nameEn: 'Hammous', price: formatPrice(0.5) },
      { nameAr: 'رب خيار', nameEn: 'Rob Khiyar', price: formatPrice(0.5) },
      { nameAr: 'مشكل', nameEn: 'Mix', price: formatPrice(0.5) },
      { nameAr: 'بيض طماطم', nameEn: 'Egg Tomato', price: formatPrice(0.5) },
      { nameAr: 'بيض مقلي', nameEn: 'Egg Fry', price: formatPrice(0.5) },
      { nameAr: 'كيما', nameEn: 'Keema', price: formatPrice(0.5) },
      { nameAr: 'تكة دجاج', nameEn: 'Chicken Tikka', price: formatPrice(0.75) },
      { nameAr: 'تكة لحم', nameEn: 'Beef Tikka', price: formatPrice(0.75) },
      { nameAr: 'دجاج ٦٥', nameEn: 'Chicken 65', price: formatPrice(0.75) },
      { nameAr: 'بطاط شبس', nameEn: 'Chips', price: '0.350 / 0.600' },
    ],
  },

  /* ── Dishes ── */
  {
    titleAr: 'طبخ',
    titleEn: 'Dishes',
    items: [
      { nameAr: 'دجاج مقلي برياني', nameEn: 'Chicken Fry Biriyani', price: formatPrice(1.5) },
      { nameAr: 'لحم برياني', nameEn: 'Mutton Biriyani', price: formatPrice(1.75) },
      { nameAr: 'دجاج ٦٥ عيش', nameEn: 'Chicken 65 Rice', price: formatPrice(1.75) },
      { nameAr: 'دجاج ٦٥ عيش احمر', nameEn: 'Chicken 65 W. Red Rice', price: formatPrice(2) },
      { nameAr: 'سمك بلطي برياني', nameEn: 'Tilapia Biriyani', price: formatPrice(1.75) },
      { nameAr: 'برياني دجاج خصوصي', nameEn: 'Chicken Biriyani Sp.', price: formatPrice(1.25) },
      { nameAr: 'تشلي فراي مع عيش', nameEn: 'Chilly Fry W. Rice', price: formatPrice(1.75) },
      { nameAr: 'عيش برياني', nameEn: 'Biriyani Rice', price: formatPrice(1) },
      { nameAr: 'عيش احمر', nameEn: 'Red Rice', price: formatPrice(1.25) },
    ],
  },

  /* ── Hot Drinks ── */
  {
    titleAr: 'مشروبات ساخنة',
    titleEn: 'Hot Drinks',
    items: [
      { nameAr: 'نسكفي', nameEn: 'Coffee', price: formatPrice(0.15) },
      { nameAr: 'رويال كرك', nameEn: 'Royal Karak', price: '0.250 / 0.400' },
      { nameAr: 'شاي حليب', nameEn: 'Tea Milk', price: formatPrice(0.15) },
      { nameAr: 'شاي سادة', nameEn: 'Black Tea', price: formatPrice(0.1) },
      { nameAr: 'نسكفي سادة', nameEn: 'Black Coffee', price: formatPrice(0.15) },
      { nameAr: 'ماء', nameEn: 'Water', price: formatPrice(0.1) },
      { nameAr: 'بيبسي', nameEn: 'Pepsi', price: formatPrice(0.15) },
    ],
  },

  /* ── Special Offers ── */
  {
    titleAr: 'عروض خاصة',
    titleEn: 'Special Offers',
    items: [
      { nameAr: 'تروقة', nameEn: 'Tarweeqa', price: formatPrice(1.5) },
      { nameAr: 'كومبو (٣ فيليه + بيبسي + فرايز)', nameEn: 'Combo Offer', price: formatPrice(2.8) },
      { nameAr: 'صلصة اضافية', nameEn: 'Extra Sauce', price: formatPrice(0.05) },
    ],
  },
];

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(0);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setOpenedAt(Date.now());
    setIsOpen(true);
  }, []);

  const handleOverlayClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      // Guard against delayed "ghost click" taps on older devices.
      if (e.target !== e.currentTarget) return;
      if (Date.now() - openedAt < 350) return;
      handleClose();
    },
    [handleClose, openedAt]
  );

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* Close on Escape key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        onClick={handleOpen}
        aria-label="قائمة الطعام والأسعار"
      >
        <div className={styles.menuButtonIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l19-9-9 19-2-8-8-2z" />
          </svg>
        </div>
        <span className={styles.menuButtonText}>قائمة الطعام والأسعار</span>
        <div className={styles.menuButtonArrow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="قائمة الطعام"
          >
            {/* Header */}
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l19-9-9 19-2-8-8-2z" />
                </svg>
                قائمة الطعام
              </h2>
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="إغلاق"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <div className={styles.modalBody}>
              {MENU_DATA.map((category, catIdx) => (
                <div key={catIdx} className={styles.category}>
                  <div className={styles.categoryHeader}>
                    <span className={styles.categoryTitleAr}>{category.titleAr}</span>
                    <span className={styles.categoryTitleEn}>{category.titleEn}</span>
                  </div>

                  <div className={styles.itemsGrid}>
                    {category.items.map((item, idx) => (
                      <div key={idx} className={styles.menuItem}>
                        <div className={styles.itemInfo}>
                          <span className={styles.itemNameAr}>{item.nameAr}</span>
                          <span className={styles.itemNameEn}>{item.nameEn}</span>
                        </div>
                        <div className={styles.itemPrice}>
                          <span className={styles.priceValue}>{item.price}</span>
                          <span className={styles.priceCurrency}>د.ك</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.modalFooter}>
              <p>الأسعار بالدينار الكويتي</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
