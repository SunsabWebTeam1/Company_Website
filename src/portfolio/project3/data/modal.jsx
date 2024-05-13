import { AnimatePresence, motion } from "framer-motion";
import { FaRegWindowClose } from "react-icons/fa";
import "./modal.css"; // Importing the CSS file

//
import slidesData from "./carouselData";
import { Carousel } from "./Carousel";

//techstack icons
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";

const SpringModal3 = ({ isOpen3, setIsOpen3 }) => {
    const slides = slidesData.slides;
    return (
        <AnimatePresence>
        {isOpen3 && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen3(false)}
            className="modal-backdrop"
            >
            <motion.div
                initial={{ scale: 0, rotate: "12.5deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                exit={{ scale: 0, rotate: "0deg" }}
                onClick={(e) => e.stopPropagation()}
                className="modal-content"
            >
                <div className="modal-inner-content">
                    <div className="modal-buttons">  
                        <FaRegWindowClose size={30}  onClick={() => setIsOpen3(false)}/>
                    </div>
                    <div className="carouselContent">
                        <Carousel data={slides} />
                    </div>
                    <div className="portfolioMainContent">

                        <div className="titleContent">
                            <h1>Title</h1>
                            <div className="wordContent">
                            <p>Custom Weapon Warehouse is a demonstration of modified items created for a popular online video 
                                game. It features a filterable pagified list of items with video demonstrations and a page for user
                                submitted item ideas where users can create, submit, and vote on ideas. More content and features are regularly added.
                            </p>
                            </div>
                        </div>
                        <div className="techStackContent">
                            <h1>Tech Stack</h1>
                            <div className="techStack">
                                <FaHtml5 size={60} />
                                <FaCss3Alt size={60} />
                                <IoLogoJavascript size={60} />
                                <FaReact  size={60} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
  );
};

export default SpringModal3;