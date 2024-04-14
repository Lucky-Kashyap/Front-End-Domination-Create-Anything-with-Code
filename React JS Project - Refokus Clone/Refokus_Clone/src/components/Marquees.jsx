import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  // const images = [
  //   {
  //     url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
  //   },
  //   {
  //     url: "https://assets-global.website-files.com/6334198f23…f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
  //   },
  //   {
  //     url: "https://assets-global.website-files.com/6334198f23…0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
  //   },
  //   {
  //     url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
  //   },
  //   {
  //     url: "https://assets-global.website-files.com/6334198f23…7d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg",
  //   },
  //   {
  //     url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
  //   },
  //   {
  //     url: "https://assets-global.website-files.com/6334198f23…7d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
  //   },
  //   {
  //     url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
  //   },
  //   {
  //     url: "https://assets-global.website-files.com/6334198f23…4b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg",
  //   },
  // ];

  const images = [
    [
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
    ],
    [
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
    ],
  ];
  return (
    <div className="py-20 mt-20">
      {images.map((item, index) => (
        <Marquee imagesUrls={item} key={index} />
      ))}
    </div>
  );
};

export default Marquees;
