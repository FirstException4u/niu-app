export const globalConstants = {
  loremIpsum:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sint! Doloribus consequuntur at, labore asperiores dolorum possimus sint, neque cupiditate perspiciatis",
  brandIcon: "/icons/icon-hivie-2.svg",
  brandIconWithName: "/icons/icon-hivie-co-2.svg",
  brandName: "Hivie",
};

const firebaseStorageBaseUrl =
  "https://firebasestorage.googleapis.com/v0/b/website-73529.appspot.com/o/assets%2F";

function getFullUrl(category: any, key: any) {
  return `${firebaseStorageBaseUrl}${category}%2F${key}`;
}

export const firebaseStorage = {
  assets: {
    icons: {
      pilot: getFullUrl("icons", ""),
      iconHivie: getFullUrl("icons", ""),
      iconHivieSmall: getFullUrl("icons", ""),
      iconHivieCo: getFullUrl("icons", ""),
      iconHivieCo2: getFullUrl("icons", ""),
      iconHivie2: getFullUrl("icons", ""),
      asset8: getFullUrl("icons", ""),
      asset10: getFullUrl("icons", ""),
      asset12: getFullUrl("icons", ""),
      asset13: getFullUrl("icons", ""),
      asset14: getFullUrl("icons", ""),
      asset15: getFullUrl("icons", ""),
    },
    images: {
      vlog3: getFullUrl("images", ""),
      dashboard2: getFullUrl("images", ""),
      dashboard: getFullUrl("images", ""),
      getStarted: getFullUrl("images", ""),
      grid1: getFullUrl("images", ""),
      grid2: getFullUrl("images", ""),
      grid3: getFullUrl("images", ""),
      grid4: getFullUrl("images", ""),
      grid5: getFullUrl("images", ""),
      grid6: getFullUrl("images", ""),
      linear: getFullUrl("images", ""),
      map: getFullUrl("images", ""),
      noise: getFullUrl("images", ""),
      people1: getFullUrl("images", ""),
      people2: getFullUrl("images", ""),
      people3: getFullUrl("images", ""),
    },
  },
};
