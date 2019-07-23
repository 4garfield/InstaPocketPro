export class HomeHeader {
  title: string;
  subTitle: string;
  contact: string;
}

export class HomePromo {
  desktopLayout: string;
  text: {
    title: string;
    desc: string;
  };
  img: {
    src: string;
    alt: string;
    srcset: string;
  };
}

export class HomeContent {
  header: HomeHeader;
  promos: HomePromo[];
  footer: {
    title: string;
    try: string;
  };
}
