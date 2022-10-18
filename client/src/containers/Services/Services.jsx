import React from "react";
import { motion } from "framer-motion";

import { Title } from "../../components";
import { BiCrown, BiGlobe, BiLayer } from "react-icons/bi";

const abouts = [
  {
    title: "UI/UX Design",
    icon: <BiCrown />,
    description:
      "Turn what you have in mind of a digital product into reality. For any platform you consider.",
  },
  {
    title: "Application Development",
    icon: <BiLayer />,
    description:
      "Standard designing, building, and implementing your applications with documentation. ",
  },

  {
    title: "Web Development",
    icon: <BiGlobe />,
    description:
      "Create and maintain your websites and also take care of its performance and traffic capacity.",
  },
];

const Services = () => {
  return (
    <div className="services app__flex">
      <Title Title={"Services"} />

      <div className="services__cards">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="services__card-item"
            key={index}
          >
            <div className="icon">{about.icon}</div>

            <h2 style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
