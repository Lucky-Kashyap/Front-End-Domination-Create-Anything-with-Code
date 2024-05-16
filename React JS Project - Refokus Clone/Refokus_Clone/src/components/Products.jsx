// import React, { useState } from "react";
// import Product from "./Product";
// import { motion } from "framer-motion";

// const Products = () => {
//   const products = [
//     {
//       title: "arqitel",
//       description:
//         "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
//       live: true,
//       case: false,
//     },
//     {
//       title: "cula",
//       description:
//         "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
//       live: true,
//       case: true,
//     },
//     {
//       title: "layout land",
//       description:
//         "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
//       live: true,
//       case: false,
//     },
//     {
//       title: "TTR",
//       description:
//         "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
//       live: true,
//       case: false,
//     },
//   ];

//   const [pos, setPos] = useState(0);

//   const mover = (val) => {
//     setPos(val * 23);
//   };

//   return (
//     <div className="mt-32 relative">
//       {products.map((elem, index) => (
//         <Product mover={mover} count={index} val={elem} key={index} />
//       ))}
//       <div className="absolute top-0 w-full h-full pointer-events-none">
//         <motion.div
//           initial={{ y: pos, x: "-50%" }}
//           animate={{ y: pos + "rem" }}
//           transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
//           className="absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden"
//         >
//           <motion.div
//             animate={{ y: -pos + "rem", opacity: 1 }}
//             className="w-full h-full"
//             transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
//             initial={{ opacity: 0 }}
//           >
//             <video width="32rem" height="23rem" controls>
//               <source
//                 src="../assets/webflow-education-promo.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </motion.div>
//           <motion.div
//             animate={{ y: -pos + "rem" }}
//             className="w-full h-full"
//             transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
//           >
//             <video width="32rem" height="23rem" controls>
//               <source
//                 src="../assets/webflow-education-promo.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </motion.div>
//           <motion.div
//             animate={{ y: -pos + "rem" }}
//             className="w-full h-full"
//             transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
//           >
//             {" "}
//             <video width="32rem" height="23rem" controls>
//               <source
//                 src="../assets/webflow-education-promo.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </motion.div>
//           <motion.div
//             animate={{ y: -pos + "rem" }}
//             className="w-full h-full"
//             transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
//           >
//             <video width="32rem" height="23rem" controls>
//               <source
//                 src="../assets/webflow-education-promo.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
    {
      title: "layout land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product mover={mover} count={index} val={elem} key={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-200"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-300"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-500"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
