import { AnimatePresence, motion } from "framer-motion";
import { FaRegWindowClose } from "react-icons/fa";
import "./modal.css"; // Importing the CSS file

//
import slidesData from "./carouselData";
import Carousel from "./Carousel";
//techstack icons
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";

const SpringModal2 = ({ isOpen2, setIsOpen2 }) => {
    console.log("isOpen2:", isOpen2); // Console log for isOpen2 state
    const slides = slidesData.slides;
    return (
        <AnimatePresence>
        {isOpen2 && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen2(false)}
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
                        <FaRegWindowClose size={30}  onClick={() => setIsOpen2(false)}/>
                    </div>
                    <div className="carouselContent">
                        <Carousel data={slides} />
                    </div>
                    <div className="portfolioMainContent">

                        <div className="titleContent">
                            <h1>Title</h1>
                            <div className="wordContent">
                            <p>Greenhouse Monitoring & Control System (GMCS) is an application for enhancing agricultural 
                                efficiency by observing greenhouse statistics to manage mechanical components such as windows 
                                and humidity control systems. The interface displays critical greenhouse information as well as 
                                upcoming weather alerts. The system can automatically adjust to optimize plant growth and allows for 
                                manual overrides of components. 
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

export default SpringModal2;
