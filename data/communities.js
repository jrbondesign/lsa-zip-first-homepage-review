// Real communities from localsenioradvisor.com public city pages (fetched Oct 8 2026).
// Never invent names, care types, or photos. Photos and URLs point at the live site.
window.LSA_COMMUNITIES = {
  "salt-lake": {
    label: "Salt Lake City",
    areaNote: null,
    communities: [
      {
        name: "Capitol Hill Senior Living",
        city: "Salt Lake City, UT",
        careTypes: "Assisted Living, Memory Care, Independent Living",
        url: "https://localsenioradvisor.com/communities/capitol-hill-senior-living",
        photo: "https://localsenioradvisor.com/uploads/small_Image_885_e69bf28ba3.jpg"
      },
      {
        name: "Legacy Village of Sugar House",
        city: "Salt Lake City, UT",
        careTypes: "Assisted Living, Independent Living, Memory Care",
        url: "https://localsenioradvisor.com/communities/legacy-village-of-sugar-house",
        photo: "https://localsenioradvisor.com/uploads/small_image_0_981a5f5c53.png"
      },
      {
        name: "Auberge at Aspen Park",
        city: "Salt Lake City, UT",
        careTypes: "Memory Care, Skilled Nursing",
        url: "https://localsenioradvisor.com/communities/auberge-at-aspen-park",
        photo: "https://localsenioradvisor.com/uploads/small_Image_744_26cdc7738a.jpg"
      },
      {
        name: "Cottonwood Creek",
        city: "Salt Lake City, UT",
        careTypes: "Assisted Living, Memory Care",
        url: "https://localsenioradvisor.com/communities/cottonwood-creek",
        photo: "https://localsenioradvisor.com/uploads/small_Cottonwood_Creek_01_a55fb8d2b4.jpg"
      },
      {
        name: "Parklane Senior Living",
        city: "Salt Lake City, UT",
        careTypes: "Independent Living",
        url: "https://localsenioradvisor.com/communities/parklane-senior-living",
        photo: "https://localsenioradvisor.com/uploads/small_Parklane_Senior_Living_featured_087e6feb75.jpg"
      },
      {
        name: "Sunrise at Holladay",
        city: "Salt Lake City, UT",
        careTypes: "Assisted Living, Independent Living, Memory Care",
        url: "https://localsenioradvisor.com/communities/sunrise-at-holladay",
        photo: "https://localsenioradvisor.com/uploads/small_Sunrise_at_Holladay_featured_e774fc4f1a.jpg"
      }
    ]
  },
  "ogden": {
    label: "Ogden",
    areaNote: null,
    communities: [
      {
        name: "Auberge at North Ogden",
        city: "Ogden, UT",
        careTypes: "Assisted Living, Memory Care",
        url: "https://localsenioradvisor.com/communities/auberge-at-north-ogden",
        photo: "https://localsenioradvisor.com/uploads/small_Image_746_45fffcb7fa.jpg"
      },
      {
        name: "Legacy House of Ogden",
        city: "Ogden, UT",
        careTypes: "Assisted Living, Memory Care",
        url: "https://localsenioradvisor.com/communities/legacy-house-of-ogden",
        photo: "https://localsenioradvisor.com/uploads/image_0_f20c46522b.png"
      },
      {
        name: "Hidden Valley Assisted Living and Memory Care",
        city: "Ogden, UT",
        careTypes: "Assisted Living, Memory Care",
        url: "https://localsenioradvisor.com/communities/hidden-valley-assisted-living-and-memory-care",
        photo: "https://localsenioradvisor.com/uploads/Hidden_Valley_Assisted_Living_and_Memory_01_1b7d294788.jpg"
      },
      {
        name: "Our House of Ogden",
        city: "Ogden, UT",
        careTypes: "Assisted Living, Memory Care",
        url: "https://localsenioradvisor.com/communities/our-house-of-ogden",
        photo: "https://localsenioradvisor.com/uploads/small_Our_House_of_Ogden_01_0a5b18bd6c.jpg"
      },
      {
        name: "Spring Gardens of North Ogden",
        city: "Ogden, UT",
        careTypes: "Assisted Living, Independent Living, Memory Care",
        url: "https://localsenioradvisor.com/communities/spring-gardens-of-north-ogden",
        photo: "https://localsenioradvisor.com/uploads/small_Spring_Gardens_of_North_Ogden_01_1bc182c80b.jpg"
      },
      {
        name: "The Harrison Regent",
        city: "Ogden, UT",
        careTypes: "Independent Living",
        url: "https://localsenioradvisor.com/communities/the-harrison-regent",
        photo: "https://localsenioradvisor.com/uploads/The_Harrison_Regent_01_94c6736c08.jpg"
      }
    ]
  }
};

// Map Utah zip prefixes to area keys. Other 84xxx zips use Salt Lake as the nearest published set.
window.LSA_zipToArea = function (zip) {
  if (!/^84\d{3}$/.test(zip)) return null;
  if (zip.indexOf("844") === 0) {
    return {
      key: "ogden",
      heading: "Senior living communities near " + zip,
      note: null
    };
  }
  if (zip.indexOf("841") === 0) {
    return {
      key: "salt-lake",
      heading: "Senior living communities near " + zip,
      note: null
    };
  }
  return {
    key: "salt-lake",
    heading: "Senior living communities near " + zip,
    note: "Showing Salt Lake City communities, the closest published set for this Utah zip."
  };
};
