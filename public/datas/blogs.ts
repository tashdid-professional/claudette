export interface Blog {
  id: number;
  slug: string;
  category: string;
  author: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  description1: string;
  descriptionmiddle: string;
  description2: string;
  image: string;
  isFeatured?: boolean;
}

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "the-cosmetics-world",
    category: "Lipstick",
    author: "Janny Joe",
    day: "08",
    month: "Apr",
    title: "THE COSMETICS WORLD",
    excerpt: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ...",
    description1: "Lorem ipsum dolor sit amet, odio legere cotidieque ex quo, an noster evertitur vel, ei solet democritum est. Id mel tibique ancillae convenire. Admodum tacimates maiestatis his id. Sed everti accusamus facilisi ne. Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.",
    descriptionmiddle: "Et qui falli latine consequuntur. In appellantur concludaturque pro. Commune scriptorem ad pri, ut euripidis posidonium has. Eum ei verear dolorum.",
    description2: "Duo quas viris delenit cu, dolores inciderint scribentur mel in. Option elaboraret et mea, sea eligendi insolens scripserit et, tantas assueverit liberavisse vim at.Prima modus erroribus id cum, te mea munere doming equidem. At per ullum facilisis.Lorem ipsum dolor sit amet, ceteros temporibus mei ad, eum Mel purto adipisci eu, ex eum nisl consul, has virtute inermis ne. Eripxit delicatissimi in eos. Pri ut congue dolorem. Impetus consequat in qui, pro posse bonorum delicatissimi ad, veri voluptatibus ei qui.Munere accusamus ex has, pri vero populo voluptaria eum no, eos atomoru.",
    image: "/Images/products/1.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    slug: "prep-a-good-primer",
    category: "Lipstick",
    author: "Janny Joe",
    day: "09",
    month: "Apr",
    title: "PREP A GOOD PRIMER",
    excerpt: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ...",
    description1: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.",
    descriptionmiddle: "Et qui falli latine consequuntur. In appellantur concludaturque pro. Commune scriptorem ad pri, ut euripidis posidonium has. Eum ei verear dolorum.",
    description2: "Duo quas viris delenit cu, dolores inciderint scribentur mel in. Option elaboraret et mea, sea eligendi insolens scripserit et, tantas assueverit liberavisse vim at.Prima modus erroribus id cum, te mea munere doming equidem. At per ullum facilisis.Lorem ipsum dolor sit amet, ceteros temporibus mei ad, eum Mel purto adipisci eu, ex eum nisl consul, has virtute inermis ne. Eripxit delicatissimi in eos. Pri ut congue dolorem. Impetus consequat in qui, pro posse bonorum delicatissimi ad, veri voluptatibus ei qui.Munere accusamus ex has, pri vero populo voluptaria eum no, eos atomoru.",
    image: "/Images/products/2.jpg",
    isFeatured: true,
  },
  {
    id: 3,
    slug: "know-how-to-apply-it",
    category: "Lipstick",
    author: "Janny Joe",
    day: "08",
    month: "Apr",
    title: "KNOW HOW TO APPLY IT",
    excerpt: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ...",
    description1: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.",
    descriptionmiddle: "Et qui falli latine consequuntur. In appellantur concludaturque pro. Commune scriptorem ad pri, ut euripidis posidonium has. Eum ei verear dolorum.",
    description2: "Duo quas viris delenit cu, dolores inciderint scribentur mel in. Option elaboraret et mea, sea eligendi insolens scripserit et, tantas assueverit liberavisse vim at.Prima modus erroribus id cum, te mea munere doming equidem. At per ullum facilisis.Lorem ipsum dolor sit amet, ceteros temporibus mei ad, eum Mel purto adipisci eu, ex eum nisl consul, has virtute inermis ne. Eripxit delicatissimi in eos. Pri ut congue dolorem. Impetus consequat in qui, pro posse bonorum delicatissimi ad, veri voluptatibus ei qui.Munere accusamus ex has, pri vero populo voluptaria eum no, eos atomoru.",
    image: "/Images/products/3.jpg",
  },
  {
    id: 4,
    slug: "50-shades-of-testing texts",
    category: "idk",
    author: "Tashdid",
    day: "08",
    month: "Apr",
    title: "50 SHADES OF GREAT",
    excerpt: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ...",
    description1: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.",
    descriptionmiddle: "Et qui falli latine consequuntur. In appellantur concludaturque pro. Commune scriptorem ad pri, ut euripidis posidonium has. Eum ei verear dolorum.",
    description2: "Duo quas viris delenit cu, dolores inciderint scribentur mel in. Option elaboraret et mea, sea eligendi insolens scripserit et, tantas assueverit liberavisse vim at.Prima modus erroribus id cum, te mea munere doming equidem. At per ullum facilisis.Lorem ipsum dolor sit amet, ceteros temporibus mei ad, eum Mel purto adipisci eu, ex eum nisl consul, has virtute inermis ne. Eripxit delicatissimi in eos. Pri ut congue dolorem. Impetus consequat in qui, pro posse bonorum delicatissimi ad, veri voluptatibus ei qui.Munere accusamus ex has, pri vero populo voluptaria eum no, eos atomoru.",
    image: "/Images/products/10.jpg",
  },
  {
    id: 5,
    slug: "summer-skincare-routine",
    category: "Skincare",
    author: "Elena Rose",
    day: "12",
    month: "May",
    title: "SUMMER SKINCARE ROUTINE",
    excerpt: "Discover the essential steps to keep your skin glowing and protected during the hot summer months with our expert tips...",
    description1: "As the temperature rises, your skin's needs change. This guide covers everything from lightweight hydration to the importance of SPF reapplication. We dive deep into the best ingredients for summer, such as Vitamin C for antioxidant protection and Hyaluronic Acid for oil-free moisture.",
    descriptionmiddle: "Learn how to transition your heavy winter creams to breezy summer serums without losing that healthy glow.",
    description2: "Our routine is designed for all skin types, focusing on maintaining a balanced barrier while dealing with increased sweat and sebum production.",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
    isFeatured: true,
  },
  {
    id: 6,
    slug: "art-of-perfect-eyeliner",
    category: "Eyes",
    author: "Marco V",
    day: "02",
    month: "Jun",
    title: "ART OF PERFECT EYELINER",
    excerpt: "Master the wing with our comprehensive guide to eyeliner techniques, from classic pencils to sharp liquid finishes...",
    description1: "Whether you prefer a subtle tightline or a bold dramatic wing, mastering eyeliner is a fundamental skill for any makeup enthusiast.",
    descriptionmiddle: "In this post, Marco V shares professional secrets for steadying your hand, choosing the right formula for your eye shape, and the absolute best tools for the job.",
    description2: "We explore the history of the cat-eye and provide a step-by-step tutorial for three versatile looks that transition perfectly from day to night. Stop struggling with uneven lines and start creating art on your eyelids.",
    image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg",
  },
];
