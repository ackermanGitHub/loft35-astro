export interface IProduct {
  name: string;
  slug: string;
  category: string;
  image: IStoreImage;
  secondaryImages: IStoreImage[];
  price: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  brand?: string;
  isFeatured?: boolean;
  quantity?: number;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
export interface IStoreImage {
  name: string;
  src: string;
}

const data = {
  categories: [
    ["Pants"],
    ["T-Shirts"],
    ["Sweaters", "Coats"],
    ["Shirts"],
    ["Blouses"],
    ["Bags"],
    ["Lencerie"],
    ["Others"],
  ],
  products: [
    {
      name: "Red Shirt",
      slug: "red-shirt",
      category: "Shirts",
      image: {
        name: "bianca",
        src: "/products/shirts/blue/shirt-clothes-1.png",
      },
      secondaryImages: [
        {
          name: "bianca",
          src: "/products/shirts/blue/shirt-clothes-2.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/blue/shirt-clothes-3.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/blue/shirt-clothes-4.png",
        },
      ],
      price: "1500",
      brand: undefined,
      rating: 4.5,
      numReviews: 8,
      countInStock: 3,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
      isFeatured: true,
    },
    {
      name: "Beige Blouse",
      slug: "beige-blouse",
      category: "Blouses",
      image: {
        name: "bianca_1",
        src: "/products/shirts/celeste/shirt-clothes-1.png",
      },
      secondaryImages: [
        {
          name: "bianca",
          src: "/products/shirts/celeste/shirt-clothes-2.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/celeste/shirt-clothes-3.png",
        },
      ],
      price: "1500",
      brand: undefined,
      rating: 3.2,
      numReviews: 10,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
      isFeatured: true,
    },
    {
      name: "Black T-Shirt",
      slug: "black-tshirt",
      category: "T-Shirts",
      image: {
        name: "mart",
        src: "/products/shirts/green/shirt-clothes-1.png",
      },
      secondaryImages: [
        {
          name: "mart_1",
          src: "/products/shirts/green/shirt-clothes-2.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/green/shirt-clothes-3.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/green/shirt-clothes-4.png",
        },
      ],
      price: "1500",
      brand: undefined,
      rating: 4,
      numReviews: 3,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
      isFeatured: true,
    },
    {
      name: "Pink Long T-Shirt",
      slug: "Pink-long-tshirt",
      category: "T-Shirts",
      image: {
        name: "mart-production",
        src: "/products/shirts/pink/shirt-clothes-1.png",
      },
      secondaryImages: [
        {
          name: "mart-production_1",
          src: "/products/shirts/pink/shirt-clothes-2.png",
        },
      ],
      price: "1500",
      brand: undefined,
      rating: 2.9,
      numReviews: 13,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
    {
      name: "White T-Shirt",
      slug: "white-tshirt",
      category: "T-Shirts",
      image: {
        name: "mockupbee",
        src: "/products/shirts/red/shirt-clothes-1.png",
      },
      secondaryImages: [
        {
          name: "bianca",
          src: "/products/shirts/red/shirt-clothes-2.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/red/shirt-clothes-3.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/red/shirt-clothes-4.png",
        },
      ],

      price: "1500",
      brand: undefined,
      rating: 3.5,
      numReviews: 7,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
    {
      name: "Denim Dark Pants",
      slug: "denim-dark-pants",
      category: "Pants",
      image: {
        name: "cotton-studio",
        src: "/products/shirts/yellow/shirt-clothes-1.png",
      },
      secondaryImages: [
        {
          name: "bianca",
          src: "/products/shirts/yellow/shirt-clothes-2.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/yellow/shirt-clothes-3.png",
        },
        {
          name: "bianca",
          src: "/products/shirts/yellow/shirt-clothes-4.png",
        },
      ],
      price: "1500",
      brand: undefined,
      rating: 2.4,
      numReviews: 14,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
    {
      name: "Striped Sweater",
      slug: "striped-sweater",
      category: "Sweaters",
      image: {
        name: "dom-j",
        src: "/placeholder.png",
      },
      secondaryImages: [
        {
          name: "bianca",
          src: "/placeholder.png",
        },
        {
          name: "bianca",
          src: "/placeholder.png",
        },
      ],
      price: "1500",
      brand: undefined,
      rating: 2.4,
      numReviews: 14,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
    {
      name: "Black Coat",
      slug: "black-coat",
      category: "Coats",
      image: {
        name: "evg-kowalievska",
        src: "/placeholder.png",
      },
      secondaryImages: [
        {
          name: "evg-kowalievska_1",
          src: "/placeholder.png",
        },
      ],
      price: "1500",
      brand: undefined,
      rating: 2.4,
      numReviews: 14,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
    {
      name: "White Bag",
      slug: "white-bag",
      category: "Bags",
      image: {
        name: "fatin-hisham",
        src: "/placeholder.png",
      },
      secondaryImages: [],
      price: "1500",
      brand: undefined,
      rating: 2.4,
      numReviews: 14,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
    {
      name: "Denim Light Pants",
      slug: "denim-light-pants",
      category: "Pants",
      image: {
        name: "pixabay",
        src: "/placeholder.png",
      },
      secondaryImages: [],
      price: "1500",
      brand: undefined,
      rating: 2.4,
      numReviews: 14,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
  ],
  slider: [
    {
      name: "whataform_cartera",
      src: "/slider/whataform_cartera.jpg",
    },
    {
      name: "whataform_pink",
      src: "/slider/whataform_pink.jpg",
    },
    {
      name: "whataform_tojo_clau",
      src: "/slider/whataform_tojo_clau.jpg",
    },
    {
      name: "whataform_very_perry",
      src: "/slider/whataform_very_perry.jpg",
    },
  ],
};

export default data;
