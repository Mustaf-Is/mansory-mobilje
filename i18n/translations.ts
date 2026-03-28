export type Language = 'sq' | 'en';

export const translations = {
  nav: {
    home: { sq: 'Ballina', en: 'Home' },
    about: { sq: 'Rreth Nesh', en: 'About' },
    customize: { sq: 'Personalizo', en: 'Customize' },
    services: { sq: 'Shërbimet', en: 'Services' },
    ourWork: { sq: 'Punimet Tona', en: 'Our Work' },
    contact: { sq: 'Kontakti', en: 'Contact' },
  },
  hero: {
    badge: { sq: 'Prodhues i Mobiljeve me Porosi', en: 'Custom Furniture Manufacturer' },
    titleLine1: { sq: 'Krijojmë Rehati,', en: 'Crafting Comfort,' },
    titleLine2: { sq: 'Dizajnojmë Ëndrra.', en: 'Designing Dreams.' },
    description: {
      sq: 'Nga dhoma gjumi me porosi deri te divanet dhe dollapët e dizajnuar. Ne transformojmë hapësirat tuaja me mjeshtëri të jashtëzakonshme, të përshtatura sipas stilit tuaj.',
      en: 'From bespoke bedrooms to custom-designed sofas and wardrobes. We transform your living spaces with exceptional craftsmanship tailored to your unique style.',
    },
    ctaCustomize: { sq: 'Fillo Personalizimin', en: 'Start Customizing' },
    ctaWork: { sq: 'Shiko Punimet Tona', en: 'View Our Work' },
  },
  customizer: {
    title: { sq: 'Zgjidhni Stilin Tuaj', en: 'Choose Your Style' },
    descriptionDesktop: {
      sq: 'Shfletoni koleksionin tonë të shtretërve dhe vizualizoni ato në ngjyra të ndryshme.',
      en: 'Browse our bed collection and visualize them in different fabric colors.',
    },
    desktopHint: {
      sq: ' Përdorni shigjetat për të eksploruar stile të ndryshme.',
      en: ' Use the arrows to explore different styles.',
    },
    mobileHint: { sq: ' Rrëshqitni për të eksploruar stile të ndryshme.', en: ' Swipe to explore different styles.' },
    swipeToBrowse: { sq: 'Rrëshqitni për të shfletuar', en: 'Swipe to browse' },
    availableColors: { sq: 'Ngjyrat e Disponueshme', en: 'Available Colors' },
    browseStyles: { sq: 'Shfleto Stilet', en: 'Browse Styles' },
    footnote: {
      sq: '* Përdorni shigjetat ose indikatorët për të shfletuar stile të ndryshme shtretërish. Çdo stil ka opsionet e veta të ngjyrave.',
      en: '* Use arrows or indicators to browse different bed styles. Each style has its own color options.',
    },
  },
  beds: {
    'cloud-comfort': {
      name: { sq: 'Shtrati Cloud Comfort', en: 'Cloud Comfort Bed' },
      description: { sq: 'Kokështrat elegante me tapiceri të butë kadifeje', en: 'Elegant curved headboard with soft velvet upholstery' },
    },
    'royal-chesterfield': {
      name: { sq: 'Shtrati Royal Chesterfield', en: 'Royal Chesterfield Bed' },
      description: { sq: 'Dizajn luksoz me tapiceri diamanti dhe pëlhurë premium', en: 'Luxurious diamond-tufted design with premium fabric' },
    },
    'milano-channel': {
      name: { sq: 'Shtrati Milano Channel', en: 'Milano Channel Bed' },
      description: { sq: 'Dizajn modern me linja të guximshme gjeometrike', en: 'Modern channel-tufted design with bold geometric lines' },
    },
    'dante-tufted': {
      name: { sq: 'Shtrati Dante Tufted', en: 'Dante Tufted Bed' },
      description: { sq: 'Dizajn tradicional me nuancë moderne', en: 'Traditional tufted design with a modern twist' },
    },
  },
  services: {
    badge: { sq: 'Çfarë Ofrojmë', en: 'What We Offer' },
    title: { sq: 'Shërbimet Tona', en: 'Our Services' },
    subtitle: {
      sq: 'Çdo pjesë që krijojmë ndërtohet nga e para, dizajnohet sipas hapësirës suaj dhe dorëzohet me montim të plotë.',
      en: 'Every piece we create is built from scratch, designed around your space, and delivered with full installation.',
    },
    items: [
      {
        title: { sq: 'Dhoma Gjumi', en: 'Bedrooms' },
        description: {
          sq: 'Kompletet e plota të dhomës së gjumit të punuara sipas dimensioneve dhe stilit tuaj — nga minimalizmi modern te eleganca klasike. Ne dizajnojmë dhe ndërtojmë çdo pjesë për hapësirën tuaj.',
          en: 'Complete bedroom sets crafted to your exact dimensions and style — from minimalist modern to classic elegance. We design and build every piece to fit your space perfectly.',
        },
      },
      {
        title: { sq: 'Dollapë', en: 'Wardrobes' },
        description: {
          sq: 'Dollapë me porosi të integruar dhe të pavarur me zgjidhje të zgjuara ruajtjeje. Zgjidhni planimetrinë, përfundimin dhe pajisjet për një dollap që funksionon aq bukur sa duket.',
          en: 'Custom built-in and freestanding wardrobes with smart storage solutions. Choose your layout, finish, and hardware for a wardrobe that works as beautifully as it looks.',
        },
      },
      {
        title: { sq: 'Mobilje me Porosi', en: 'Custom Furniture' },
        description: {
          sq: 'Keni një vizion unik? Ne e sjellim në jetë. Nga dhomat e ngrënies dhe anësore deri te njësitë e TV-së dhe raftet — pjesë plotësisht të personalizuara sipas shtëpisë dhe shijes suaj.',
          en: 'Have a unique vision? We bring it to life. From dining rooms and sideboards to TV units and shelving — fully bespoke pieces tailored to your home and taste.',
        },
      },
      {
        title: { sq: 'Divane', en: 'Sofas' },
        description: {
          sq: 'Divane të punuara me dorë, të dizajnuara rreth rehatisë dhe estetikës suaj. Zgjidhni pëlhurën, ngjyrën, madhësinë dhe konfigurimin për një pjesë që e përcakton hapësirën tuaj të jetesës.',
          en: 'Handcrafted sofas designed around your comfort and aesthetic. Select your fabric, color, size, and configuration for a piece that defines your living space.',
        },
      },
    ],
  },
  about: {
    badge: { sq: 'Kush Jemi', en: 'Who We Are' },
    title: { sq: 'Rreth Mansory Mobilje', en: 'About Mansory Mobilje' },
    paragraph1: {
      sq: 'Mansory Mobilje është prodhues i mobiljeve me porosi me seli në Ferizaj, Kosovë, i specializuar në dizajnimin, prodhimin dhe montimin e mobiljeve të cilësisë së lartë, të bëra me porosi për hapësira banesore dhe komerciale.',
      en: 'Mansory Mobilje is a custom furniture manufacturer based in Ferizaj, Kosovo, specializing in the design, production, and installation of high-quality, tailor-made furniture for residential and commercial spaces.',
    },
    paragraph2: {
      sq: 'Ne krijojmë një gamë të gjerë zgjidhjesh, duke përfshirë dhoma gjumi, dollapë, divane me dizajn të personalizuar, dhoma ngrënieje dhe anësore. Nga koncepti fillestar deri te dorëzimi përfundimtar, ne sigurojmë komunikim transparent dhe standardet më të larta të cilësisë.',
      en: 'We create a wide range of solutions, including bedrooms, wardrobes, custom-designed sofas, dining rooms, and sideboards. From the initial concept to final delivery, we ensure transparent communication and the highest standards of quality.',
    },
    quote: {
      sq: '"Transformojmë idetë në mobilje funksionale dhe elegante."',
      en: '"Transforming ideas into functional and elegant furniture."',
    },
    features: [
      {
        title: { sq: 'Materiale Premium', en: 'Premium Materials' },
        description: {
          sq: 'Punojmë me materiale të nivelit më të lartë për të siguruar mjeshtëri dhe qëndrueshmëri të jashtëzakonshme.',
          en: 'We work with top-tier materials to ensure exceptional craftsmanship and durability.',
        },
      },
      {
        title: { sq: 'Dizajn me Porosi', en: 'Tailor-Made Design' },
        description: {
          sq: 'Çdo pjesë është punuar me kujdes për t\'iu përshtatur preferencave dhe dimensioneve tuaja specifike.',
          en: 'Every piece is carefully crafted to match your specific preferences and dimensions.',
        },
      },
      {
        title: { sq: 'Dërgesë & Montim', en: 'Delivery & Install' },
        description: {
          sq: 'Ofrojmë dërgesë dhe montim profesional në gjithë Kosovën dhe vendet fqinje.',
          en: 'We offer delivery and professional installation across Kosovo and neighboring countries.',
        },
      },
      {
        title: { sq: 'Mbi 7 Vite Përvojë', en: '7+ Years Experience' },
        description: {
          sq: 'Një ekip i përkushtuar profesionistësh që transformojnë idetë në realitet elegant që nga viti 2016.',
          en: 'A dedicated team of professionals transforming ideas into elegant reality since 2016.',
        },
      },
    ],
  },
  gallery: {
    badge: { sq: 'Portofoli Ynë', en: 'Our Portfolio' },
    title: { sq: 'Punimet Tona', en: 'Our Work' },
    subtitle: {
      sq: 'Eksploroni një përzgjedhje të projekteve tona të përfunduara. Shembuj real të mobiljeve me porosi të krijuara për klientët tanë të kënaqur.',
      en: 'Explore a selection of our completed projects. Real examples of custom furniture created for our satisfied clients.',
    },
  },
  contact: {
    brandDescription: {
      sq: 'Të specializuar në dhoma gjumi me porosi, dollapë, divane dhe më shumë. Ne transformojmë idetë tuaja në elegancë funksionale me materiale premium dhe mjeshtëri eksperte.',
      en: 'Specializing in custom bedrooms, wardrobes, sofas, and more. We transform your ideas into functional elegance with premium materials and expert craftsmanship.',
    },
    quickLinks: { sq: 'Lidhje të Shpejta', en: 'Quick Links' },
    contactUs: { sq: 'Na Kontaktoni', en: 'Contact Us' },
    home: { sq: 'Ballina', en: 'Home' },
    aboutUs: { sq: 'Rreth Nesh', en: 'About Us' },
    customizer: { sq: 'Personalizuesi', en: 'Customizer' },
    ourWork: { sq: 'Punimet Tona', en: 'Our Work' },
    rights: { sq: 'Të gjitha të drejtat e rezervuara.', en: 'All rights reserved.' },
    tagline: { sq: 'Dizajnuar për Përsosmëri.', en: 'Designed for Excellence.' },
  },
  project: {
    notFound: { sq: 'Projekti nuk u gjet', en: 'Project not found' },
    goBack: { sq: 'Kthehu në ballina', en: 'Go back to home' },
    backToPortfolio: { sq: 'Kthehu te Portofoli', en: 'Back to Portfolio' },
    viewFullSize: { sq: 'Shiko në madhësi të plotë', en: 'View full size' },
    view: { sq: 'Shiko', en: 'View' },
    details: { sq: 'Detajet e Projektit', en: 'Project Details' },
    category: { sq: 'Kategoria', en: 'Category' },
    customMade: { sq: 'Punuar me Porosi', en: 'Custom Made' },
    customMadeDesc: { sq: 'E përshtatur sipas specifikimeve të klientit', en: 'Tailored to client specifications' },
    materials: { sq: 'Materialet', en: 'Materials' },
    materialsDesc: { sq: 'Dru i fortë dhe pëlhura me cilësi premium', en: 'Premium quality hardwood & fabrics' },
    requestDesign: { sq: 'Kërko Këtë Dizajn', en: 'Request This Design' },
  },
  carousel: {
    swipeToBrowse: { sq: 'Rrëshqitni për të shfletuar', en: 'Swipe to browse' },
  },
  projects: {
    categories: {
      Bedroom: { sq: 'Dhomë Gjumi', en: 'Bedroom' },
      'Living Room': { sq: 'Dhomë Ndenjeje', en: 'Living Room' },
      Commercial: { sq: 'Komerciale', en: 'Commercial' },
    },
    items: [
      {
        id: 1,
        title: { sq: 'Mur TV & Oxhak me Mermer të Errët', en: 'Dark Marble TV & Fireplace Wall' },
        description: {
          sq: 'Një pikë qendrore e guximshme e dhomës së ndenjjes që kombinon panele vertikale të errëta me një pllakë mermeri të bardhë si sfond TV. E rrethuar me rafte ekzpozimi prej qelqi me ndriçim LED, kjo njësi muri bashkon kontrastin dramatik me ruajtje praktike në një pjesë të vetme deklarative.',
          en: 'A bold living room centrepiece combining dark vertical slat panelling with a large-format white marble slab as the TV backing. Flanked by illuminated glass display shelves with LED strip lighting, this wall unit merges dramatic contrast with practical storage in a single statement piece.',
        },
      },
      {
        id: 2,
        title: { sq: 'Dhoma e Gjumit Master Chesterfield', en: 'Chesterfield Master Bedroom' },
        description: {
          sq: 'Një dhomë gjumi luksoze master e përqendruar rreth një shtrati me stil Chesterfield me tapiceri kadifeje me butona të thellë. Dizajni i plotë — duke përfshirë kokështratin, anët dhe stolin — është punuar me dorë për të krijuar një estetikë kohezive me ndriçim ambient LED.',
          en: 'A luxurious master bedroom centred around a custom Chesterfield-style bed with deep button-tufted velvet upholstery. The full-frame design — including the headboard, side rails, and foot bench — is handcrafted to create a cohesive, hotel-grade aesthetic with ambient LED ceiling lighting.',
        },
      },
      {
        id: 3,
        title: { sq: 'Komplet Dhome Gjumi me Lëkurë Krem', en: 'Cream Leather Bedroom Suite' },
        description: {
          sq: 'Një komplet dhome gjumi e rafinuar, e tapicuar tërësisht me lëkurë krem premium. Kokështrati me panele dhe korniza e shtratit kanë qepje gjeometrike të pastër, të plotësuara me jastëkë akcentuese terrakota. E dizajnuar për klientë që preferojnë elegancën e thjeshtë me ndjesinë e ngrohtë bashkëkohore.',
          en: 'A refined bedroom suite upholstered entirely in premium cream leather. The panelled headboard and matching bed frame feature clean geometric stitching, complemented by terracotta accent cushions. Designed for clients who prefer understated elegance with a warm, contemporary feel.',
        },
      },
      {
        id: 4,
        title: { sq: 'Mur TV & Oxhak me Panele Arrë', en: 'Walnut Slat TV & Fireplace Wall' },
        description: {
          sq: 'Një mur dekorativ nga dyshemeja deri në tavan i ndërtuar me panele arrë, që strehon një niçe TV të integruar dhe një oxhak elektrik poshtë. Projekti dokumenton procesin e plotë të ndërtimit — nga struktura deri te instalimi përfundimtar — duke demonstruar mjeshtërinë tonë në çdo fazë.',
          en: 'A floor-to-ceiling feature wall built from rich walnut-finish slat panelling, housing a recessed TV niche and an integrated electric fireplace below. The project documents the full build process — from structural framing to the finished installation — demonstrating our craftsmanship at every stage.',
        },
      },
      {
        id: 5,
        title: { sq: 'Dhomë Gjumi me Kadife Gri', en: 'Grey Velvet Bedroom' },
        description: {
          sq: 'Një dhomë gjumi e sofistikuar me shtrat kadifeje gri me kokështrat të lartë me kanale dhe bazë të tapicuar. E shoqëruar me tavolina nate elegante të bardha dhe ndriçim të ngrohtë varës, dizajni balancon butësinë dhe strukturën për një atmosferë moderne boutique-hoteli.',
          en: 'A sophisticated bedroom featuring a custom grey velvet bed with a tall channelled headboard and matching upholstered base. Paired with sleek white bedside tables and warm pendant lighting, the design balances softness and structure for a modern, boutique-hotel atmosphere.',
        },
      },
      {
        id: 6,
        title: { sq: 'Mur Ekzpozimi Boutique', en: 'Boutique Display Wall' },
        description: {
          sq: 'Një mur ekzpozimi komercial me porosi i dizajnuar për një interior retail. Mobilje arrë kornizojnë një seri niçesh të thella, të ndriçuara me llak të gjallë të verdhë me panele lëkure me butona. Çdo niçe ka ndriçim spotesh dhe rafte qelqi, duke krijuar një vitrinë mbresëlënëse produktesh.',
          en: 'A custom commercial display wall designed for a retail interior. Walnut-finish cabinetry frames a series of deep, illuminated niches finished in vibrant yellow lacquer with button-tufted leather back panels. Each niche features recessed spotlights and glass shelving, creating a striking product showcase.',
        },
      },
    ],
  },
} as const;

export type Translations = typeof translations;
