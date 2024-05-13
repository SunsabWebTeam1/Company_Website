import { AnimatePresence, motion } from "framer-motion";
import { FaRegWindowClose } from "react-icons/fa";
import "./modal.css"; // Importing the CSS file

//
import slidesData from "./carouselData";
import { Carousel } from "./Carousel";

//techstack icons
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";

const SpringModal9= ({ isOpen9, setIsOpen9}) => {
    const slides = slidesData.slides;
    return (
        <AnimatePresence>
        {isOpen9 && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen9(false)}
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
                        <FaRegWindowClose size={30}  onClick={() => setIsOpen9(false)}/>
                    </div>
                    <div className="carouselContent">
                        <Carousel data={slides} />
                    </div>
                    <div className="portfolioMainContent">

                        <div className="titleContent">
                            <h1>QuickPortfolio </h1>
                            <div className="wordContent">
                            <p>QuickPortfolio is a platform designed for early-career computing professionals to effortlessly create 
                                portfolios that highlight their projects, problem-solving approaches, and work artifacts for potential 
                                employers. It is a full-stack web application that has list pagination, data serialization/marshalling to 
                                AWS using their DynamoDB data solution, and features a responsive modern UI, resulting in beautifully 
                                crafted and elegant portfolios made in record time
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

export default SpringModal9;