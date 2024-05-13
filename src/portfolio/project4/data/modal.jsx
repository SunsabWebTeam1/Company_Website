import { AnimatePresence, motion } from "framer-motion";
import { FaRegWindowClose } from "react-icons/fa";
import "./modal.css"; // Importing the CSS file

//
import slidesData from "./carouselData";
import { Carousel } from "./Carousel";

//techstack icons
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";

const SpringModal4 = ({ isOpen4, setIsOpen4 }) => {
    const slides = slidesData.slides;
    return (
        <AnimatePresence>
        {isOpen4 && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen4(false)}
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
                        <FaRegWindowClose size={30}  onClick={() => setIsOpen4(false)}/>
                    </div>
                    <div className="carouselContent">
                        <Carousel data={slides} />
                    </div>
                    <div className="portfolioMainContent">

                        <div className="titleContent">
                            <h1>Green Flag Lawn</h1>
                            <div className="wordContent">
                            <p>This mobile app was built to help 
                                streamline Green Flag Lawn's existing 
                                system by enhancing communication 
                                efficiency between the technicians and 
                                office administrative staff, which helps to 
                                boost productivity among field technicians 
                                as a result.​

                                ​

                                Additionally, the project will help to 
                                improve management processes and 
                                facilitate business tracking, making it 
                                primed for expansion.​
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

export default SpringModal4;