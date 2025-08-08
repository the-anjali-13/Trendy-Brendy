import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const products = [
  {
    title: "Summer Breeze Dress",
    description: "Light and airy dress perfect for summer days.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDD7lEum7fZBh_cAqlf9y6o5bfdKJJqdBOZ9vhv4w7949O0y5S3mFeD_K6_lZtck0XN1vHAb_BSskCd6OTjbzIZ_enEkISEdLlAAZY1BVNUeBUIirbfAgblgIvmydY_Cb7EZ3cyFrDqMwaB49M50MDEsGKOlffK7EcA56TdTuqTPx6FsYafj851fWoKSayezkA4R4iwbTG2zGOPl3FKOV3No3ZluhXtVsFnYJNDKKWldyAKt0AXBc54hfifzQ4RcF5_oGD7fVI1lXk", // Replace with actual image paths
  },
  {
    title: "Urban Chic Backpack",
    description: "Stylish and functional backpack for city adventures.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjMEdb0GkJIKDZipxwr98EOS_VflvxgB0NW-YlJwyBQqwrEkWCilSvUQwTyYMbAN-T4SHvJ_QsZTyVZRFTPhRsECOiWYpZ8esXSdhfYssVtAa191yBwrfZ9GDtkch1YQrEIsa8sBN6VOCrWHM-F8Bi8KQu8JiGTxncdwRACAl7-3VFBseCgDoN9ltUzkaOZocnaq0xyhSFKkkk13iZCuIed6_kbAvdaZb4OTkW9AbEPGXFFrkR7QGsSo7zdss0mNdx5N_xomMTQMc",
  },
  {
    title: "Sunset Shades Sunglasses",
    description: "Trendy sunglasses with a warm, sunset-inspired tint.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATxrfRmYdjrsTByMJteJSfGVYf0cGNTG9kxpCAFK2Auj3jZvp-pCq9knsB0w7RN0Szg6jEta1Qo29thbJIdRIEIzHEMpRoa5tRNZgegiyTokoPmu7JF66dq00sznxtIIXJ2qtpYrHKB3nj_WSlspReuPG-HvlwWdIDjaY1biQcUfIpEzvFaxjoC6-aPimpOef1gxTUOwQae16GbqDhX9E6FVIKUrTYfxxsMSgUYVb41psnKqGCV4FMXWx9BDcEukubvbsqpTFnmb4",
  },
  {
    title: "Boho Bliss Sandals",
    description: "Comfortable and chic sandals with a bohemian flair.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDV0k5k6aU8AS7uvBHYObYcc5DO0_d8XSkbtK0Wuu1fruOPzho9RuDEY4PxRZCyVfkz8ey9dnFnY9N-odYtVS_YWSxwt2lDo5nTsoyzsh-T-Q1UhwV3XMPELQ2agMKHglDGZOPkVAeku0IdZjIIOr9u93T9NmFRjPK9_svT-f3fSLm2YMzQ_LJyEdsVbQosL2cUHJBMTR0hoMopIPD_TZFB2UIAuunEn2VajMg48SyD4JrhiFxGaiPD4vpb8Hn2ACr6RObFp6eToCA",
  },
];

const trendingProducts = [
  {
    title: "Street Style Icon",
    description:
      "Embrace the latest street style trends with this edgy and fashionable outfit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiDQwG8WvvSYVna2yOBWXCN52v2-PT-t2IHz8idFlgkd0wG6owDWp7RnLnVdermTEi08pXFcth2GvedmGirEJYBVQYcBrKvVdHudPLi5QLufZMvdRXBPEEbnO7V0GTjDfYqdK6rvurIej_CWJR7VF1dRPF1QYBfLaEbIlKxqnGlHcxOvu771BNqDm_f_eBw8Kt8xxj50iCfb-1SgjTmMVA5Ik4hFaJ0PKIVIOfIa8IvbzG0fPcmyZywUtBbarHioIadbCxWMUtGmc",
  },
  {
    title: "Urban Explorer",
    description:
      "Explore the city in style with this comfortable and trendy urban explorer outfit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByvprDKMEHqEeWAG8QnYI5cbyAOGBNLCcilW9gZUYBpP-EUIo7BC2iRwsCirSxAXvDGqPhY4vgOCsT3h_0XXP6y7ELI4b7tUpT6p_xdbYNt1F_3crLsXUL6jkcssasri_tuApph-Sd1gVFSJuakcEALfLfbtvJ5NHp_w6TsOtYfB2c-nsbtGYhEEaCDyl-q13LxDqZIdjO3cIkyVvLFriDr0hS5gkR3Z5O8r5VO4eyq04MMpe4AIBFXtREVe36LnQERW2PRNFSiGo",
  },
  {
    title: "Evening Elegance",
    description:
      "Make a statement at your next event with this elegant and sophisticated evening dress.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFuM1TfgWX2_RXYVYLR_Ks-Z5OjnM3mKW7DqtcO8iHskJxZb28VVddiqEhRcmOg2AZObs85O6ZwZceyk_a5t4HR4483YOMMqMPgGk6i3cwtNX2yUz923PGRoc1veXiWgX6rJOjIdRE6RIeTVLuzw3eXDjtGEqGfPE7BAGKUFYKwKVffz_AWsJ6JB6Wte4K40tU4uovaFtUWzyqCnFznbKV13dw-DtWHn6mGXMAvV9hc5qSN8MFy73zb3GvSV_ERcRdVPYB3jRj2eY",
  },
  {
    title: "Casual Cool",
    description:
      "Stay cool and casual with this relaxed and stylish outfit for everyday wear.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoEr_NxlafXgveoP5kA-d3gXn7qUjbSOILi95ESKGCxJXZv0lt6TdWV6kUNoh917Pg8yz9SuGV7pcTqrQOqAxlxmPPM9z8G8f47pELMlGUuhYqDIbQG0x-Eiyi0jTQnaEF6U0CDoQYutZgLEfa-mYdEsyiZEw2v97l3ik4XxMfYLQNg9jKe3ecdWw98NFfV3i5lbJw12miBlEmbeHI7Aio-3vyyOngT_mOpAY4SC-swsitf0TFdk37CP47Na4NmazTIbAmO-PetIk",
  },
];

const reviews = [
  {
    name: "Sophia Carter",
    date: "July 15, 2024",
    rating: 5,
    text: "I absolutely love the dress I ordered from Trendy Brendy! The quality is amazing, and it fits perfectly. I received so many compliments when I wore it. Highly recommend!",
    img: "https://randomuser.me/api/portraits/med/women/37.jpg",
  },
  {
    name: "Ethan Bennett",
    date: "July 10, 2024",
    rating: 4,
    text: "The backpack is great for my daily commute. It's stylish and has plenty of space for all my essentials. The only thing is that the straps could be a bit more padded.",
    img: "https://randomuser.me/api/portraits/med/women/36.jpg",
  },
  {
    name: "Olivia Hayes",
    date: "July 5, 2024",
    rating: 5,
    text: "These sandals are a game-changer! They're so comfortable and go with everything. I can walk in them all day without any issues. Definitely my new favorite pair.",
    img: "https://randomuser.me/api/portraits/med/women/39.jpg",
  },
];

export default function Home() {
  return (
    <div className={styles.mainhome}>
      <div className={styles.mainwall}>
        <h1>Step into style with Trendy Brendy</h1>
        <p>
          Discover the latest fashion trends and express your unique style with
          our curated collection of clothing and accessories.
        </p>
        <button>Shop the latest Trends Now!</button>
      </div>
      <section className={styles.featuredSection}>
        <div className={styles.productGrid}>
          <h2 className={styles.featuredHeading}>Featured Products</h2>
        </div>

        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.cardText}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.productGrid}>
          <h2 className={styles.featuredHeading}>Trending Now</h2>
        </div>

        <div className={styles.productGrid}>
          {trendingProducts.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.cardText}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.reviewSection}>
        <h2 className={styles.reviewHeading}>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <img src={review.img} alt={review.name} className={styles.avatar} />
            <div>
              <p className={styles.name}>{review.name}</p>
              <p className={styles.date}>{review.date}</p>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < review.rating ? <FaStar/>:<CiStar/>}</span>
                ))}
              </div>
              <p className={styles.text}>{review.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
