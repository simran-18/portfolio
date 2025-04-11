import { useEffect, useRef, useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  const contentRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };
  useEffect(() => {
    const el = contentRef.current;
    if (el && el.scrollHeight > el.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

  return (
    <>
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative h-[350px] w-full md:w-[240px] lg:w-[440px] border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
      >
        {/* Scrollable content area */}
        <div
          ref={contentRef}
          className="overflow-hidden h-full pr-2"
        >
          <p className="font-bold text-cyan">{experience.job}</p>
          <p className="text-orange">{experience.company}</p>
          <p className="text-lightGrey">{experience.date}</p>
          <ul className="list-disc mt-4 pl-4 space-y-1">
            {experience.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* View More button */}
        {isOverflowing && (
          <button
            className="absolute bottom-2 right-2 bg-orange text-white text-xs px-3 py-1 rounded shadow"
            onClick={() => setShowModal(true)}
          >
            View More
          </button>
        )}
      </motion.div>
      <AnimatePresence>
  {showModal && (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        className="bg-white p-6 rounded-xl max-w-2xl w-full overflow-y-auto max-h-[80vh] shadow-xl relative"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-cyan">{experience.job}</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-black text-xl font-bold hover:text-red-500 focus:outline-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="text-orange">{experience.company}</p>
        <p className="text-lightGrey mb-4">{experience.date}</p>
        <ul className="list-disc pl-4 space-y-2 text-black">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default SingleExperience;
