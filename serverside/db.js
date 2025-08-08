const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./e-comm.db");

const products = [
  // {
  //   name: "Urban Chic Denim Jacket",
  //   price: 1999,
  //   imgsrc:
  //     "https://lh3.googleusercontent.com/aidapublic/AB6AXuDZ5fDF9pu5PVYIFHwbbbT74lPhB6SlziF1twg9WCux3TNaGIoc_Fpk_B49bMwRSNBiMNrcMIkuz4q4puO77hKIv15APx26GLMq05jWUgN4ZCx3id5O6HV_hq0vaUgVhHJx-ATWBkXsLJdUZM-8ZxMgeNWrNqv2ZckAUHhQQESDOy-Y2ZgyJqGH813CiH_TKBWUV_ObIIHOQ6Ek0CTnk30zfw7zv6PysoW89j9_nHF2p5hEv8pCJhATg2QxtQTaZ0Ua_FzNrpk98",
  //   category: "clothing",
  //   rating: 4,
  // },

  {
    name: "Sporty Performance Leggings",
    price: 950,
    imgsrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCw0Uk_QGr_1QvHkY9hLjjM7i_7KguFtcT8tIlGckt5Efdmoeqfr6ojeFKrRWWmSV9o1COeQ5jyOny1zk7HT1Mjo4MhcYaMRMHUm8fdVToWyG7d3cAmgSld42Uf6Wb7ZkyW8qSNril_8biGGjn4x2Vf017OMMWx7ReIQzS9NG1VUhH0ua_jYdEAj61lPs_8S4b-4CuV8EVxYIS22__yog63Nw5uNd4DU_jEuXCFSwDQBOn3kXHUo-A50Ovqnzq8osEMY5w_sPDubDw",
    category: "clothing",
    rating: 2,
  },

  {
    name: "Urban Hoodie",
    price: 1800,
    imgsrc: "/image/urban-hoodie.jpg",
    category: "clothing",
    rating: 5,
  },

  {
    name: "Classic T-shirt",
    price: 900,
    imgsrc: "/image/t-shirt.jpg",
    category: "clothing",
    rating: 4,
  },

  {
    name: "Evening Gown",
    price: 2500,
    imgsrc: "/image/evening-gown.jpg",
    category: "clothing",
    rating: 3,
  },

  {
    name: "Denim Jacket",
    price: 2200,
    imgsrc: "/image/danim-jecket.jpeg",
    category: "clothing",
    rating: 5,
  },

  {
    name: "Boho Fringe Crossbody Bag",
    price: 1200,
    imgsrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwivCE2D7xSxqR1UrBEzh66dd_I3tXZz7jwQJ7OLchaXI90Ou70TLvtAm7GciKQatp5RvHotj2OaoQ17_Aw8ilJ15h35frzp3P83IA4k8bW0kpiwCN8VMmvp9B456IveFoErAHBjauLIEW7avDQEKPmI4Tk2_0LB6EPqsnioJGoNAhIUdvucMc-bzoDqLDfDaaVyNXu5CxaH1fmgrrwtKEoOG5iNZ8wuCXcZMuOMmgS8WxdZxrwR8ssBsqiy3ECRKEHM0kOkOJXik",
    category: "bags",
    rating: 3,
  },

  {
    name: "Minimalist Leather Wallet",
    price: 500,
    imgsrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8nGeogxjAxHCeHJvxCAdRKfJeB-7N3DwPXhpHvTW0pQaOubuV9OevmXMxhLKziXXMfCoxQoPi-UUsHh9Ov_o9CmjdGdh0egPpVBw3Dn6e93Fs4glOlhEyDB2iac-gKxLDRqLkJrMMC2PqXqbskshX7dbTF4bowYsI4PNhwFNM6v2o7FWrsMqb9pd_vVVUK2Qnm6GdaIqLh2cQR7ZGQSAS-h8RKxxWRFVkJU6MNVTXbkvBzCy5sdxDl3zZbEikcnYpN7EuH2mXokA",
    category: "bags",
    rating: 5,
  },

  {
    name: "Leather Handbag",
    price: 3000,
    imgsrc: "/image/leather-bag.jpeg",
    category: "bags",
    rating: 4,
  },

  {
    name: "Canvas Tote",
    price: 1100,
    imgsrc: "/image/tote-bag.jpg",
    category: "bags",
    rating: 5,
  },

  {
    name: "Office Briefcase",
    price: 4500,
    imgsrc: "/image/briefcase.jpg",
    category: "bags",
    rating: 3,
  },

  {
    name: "Sling Bag",
    price: 1300,
    imgsrc: "/image/sling-bag.jpg",
    category: "bags",
    rating: 3,
  },

  {
    name: "Travel Duffel",
    price: 3600,
    imgsrc: "/image/travel-duffel.jpg",
    category: "bags",
    rating: 4,
  },

  {
    name: "Classic Aviator Sunglasses",
    price: 800,
    imgsrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyt4rFFIflbH2wJYIMNr1QlMR09McdB1zpZPT2ANXZIemWk5HMcYivV1NX0c_Oph860P4fwV0sLfF_AAQGAjMORV_LtwTVphh3eBiRke-ouSM9trhmuT43e8rezhvfY04mGTZ_W3meh9sZDwxFVWW9XzRb3ffOb_NGYXL-9Mf5nxQ-CAHvik1dQgvzzblhraBtddjOWfSjZ4Mc5z72TuvRphDxajc-araEBv8uQeF9xubkhZ8dO_iGbkX8CXENmLxlCzYv_lLCzAY",
    category: "accessories",
    rating: 5,
  },

  {
    name: "Cozy Knit Beanie",
    price: 1300,
    imgsrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgGOpghhupsiBown9tBy23jXZfzpICB3xiapiUqjp-mdI3DxS_4aBU6lGjl-m26TNqNFlyWZXJsljwsFE2qX7JrsO4CZF0C35245luOHbsyk2ShpZWbFWzIYiFt6Y2qaBm1RSKJ-HVgBTq1LwFf9hIY0riTpXu7cBJ9Xfo-kTrzijFlF0_MhlqL_U79_klXFFZz69zREBgj-foWFsRMG4tLq73OsBH4oQZHVE1v8ssIEZRE0xvZnRZ1sWpyn6UvQN4qZSCltCjANE",
    category: "accessories",
    rating: 3,
  },

  {
    name: "Statement Geometric Earrings",
    price: 550,
    imgsrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAI_n1i0WwvqD2cQlWIJIavi0gqsdze7SAV2PwyxtAdlwfFKZjcpI1WDxJ0QGSsTecKqvGMvUfQWkZDEiwgWCSaquo4kXewRtEc25GsIHRCJAL0bX2uxgWM57nsYifFT61XynBwSYS1tVDxttVwIdglBPH5pduTRMIGftIc0v0oLISFzPOUGlaCbpopcRqizciudYyRPRfehYLXYtAgc4QPDwhJUazYErfYEVEMLN3VI_RvyrErhGTMFHvg_vECoy1vaVCHkt07Xsw",
    category: "accessories",
    rating: 4,
  },

  {
    name: "Trendy Bucket Hat",
    price: 2200,
    imgsrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqWCTe9D2Q9xfstMi8qVh_8PB8vw48afQ5bty2GcYBzpdv1-ZG1g6_dTJtc5pooz6LG0XQ4DSw50-RTXspS6rUwPhP4Nv399ZPFIpfN9VPeeUp4dBFM2qa9rtkKXVDAryQVJ0uQ7aLEMkX1QRF_Gh65NS3e-57Uk6dEQfsO6T0uVg7db7iQK1cP98pAVm-3zwqlPthuzCSBWkehTAaM_QI31NayPF62KdLEaY29TCscTbQ2Fz1BeM-uoLkEeD-uiTfLrFK5HE1BAI",
    category: "accessories",
    rating: 4,
  },

  {
    name: "Aviator Sunglasses",
    price: 2200,
    imgsrc: "/image/aviator-sunglasses.jpg",
    category: "accessories",
    rating: 5,
  },

  {
    name: "Blue Light Blockers",
    price: 1100,
    imgsrc: "/image/bluelight.jpg",
    category: "accessories",
    rating: 3,
  },

  {
    name: "Snapback Cap",
    price: 850,
    imgsrc: "/image/snapback.jpg",
    category: "accessories",
    rating: 4,
  },

  {
    name: "Baseball Cap",
    price: 1550,
    imgsrc: "/image/baseball-cap.jpg",
    category: "accessories",
    rating: 4,
  },

  {
    name: "Diamond Studs",
    price: 1100,
    imgsrc: "/image/diamond-studs.jpg",
    category: "accessories",
    rating: 3,
  },

  {
    name: "Hoop Earrings",
    price: 2500,
    imgsrc: "/image/hoop-ear.jpg",
    category: "accessories",
    rating: 5,
  },

  {
    name: "Rugged Hiking Boots",
    price: 5000,
    imgsrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAc_Icg7o3Ot_EWjKoI19jHD9owPiH4Sqr84uaV1Hg-Obe5dM6APVh3RmX8L-AtxgBWcAXbvVkIKPu-8YYXhgchijDpZwxmB4w71_ovQHaHrNNd8XufC_Fh8S3UJddyDjqOMqRwJUJmU5FEWntpbJWSdk1FZjSqlB2m2i9OGBb5d_e64TYO8D_NHiWSz5DDqh3Xbu-q_QcqP3UswRTLPzjq6FRqu92ScnMs25XismgfvL_A1AUSxt_4yf4eA8iqBoT4jSDl4XM-A-8",
    category: "shoes",
    rating: 5,
  },
  // {
  //   name: "Running Shoes",
  //   price: 2600,
  //   imgsrc: "/image/runningshoes.jpg",
  //   category: "shoes",
  //   rating: 4,
  // },

  {
    name: "Leather Loafers",
    price: 3400,
    imgsrc: "/image/leather-loafers.jpg",
    category: "shoes",
    rating: 4,
  },
];

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products 
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 name TEXT NOT NULL,
                 price INTEGER,
                 imgsrc TEXT,
                 category TEXT,
                 rating INTEGER
                )
        `);

  db.get(`SELECT COUNT(*) AS count FROM products`, (err, row) => {
    if (err) {
      console.error('Error checking products count:', err.message);
      return;
    }

    if (row.count === 0) {
      console.log('Inserting products...');

      const insertQuery = db.prepare(`
        INSERT INTO products (name, price, imgsrc, category, rating) VALUES (?, ?, ?, ?, ?)
      `);

      products.forEach(({ name, price, imgsrc, category, rating }) => {
        insertQuery.run(name, price, imgsrc, category, rating);
      });

      insertQuery.finalize();
    }})

});

module.exports = db;
