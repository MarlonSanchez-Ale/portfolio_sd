import logo_icon from '../../assets/Images/Logo_icon_result.webp'
import logo_text from '../../assets/Images/logo_text_result.webp'
import { motion } from 'framer-motion'


const firstPartVariants = {
    hidden: { opacity: 0, rotateY: -90 }, 
    visible: { opacity: 1, rotateY: 0 }, 
};


const secondPartVariants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0 },  
};


export default function Loader() {
    return (
        <div className='flex flex-row justify-center items-center'>
            <motion.div
                variants={firstPartVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.0, ease: "easeInOut" }} 
                style={{ width: 300, height: 300 }} 
            >
                
                <motion.img
                    src={logo_icon}
                    alt="Parte 1 del logo"
                    style={{ width: '100%', height: '100%', backfaceVisibility: 'hidden' }}
                />
            </motion.div>

          
            <motion.div
                variants={secondPartVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.0, duration: 0.8, ease: "easeInOut" }} 
                style={{ width: 500, height: 200 }} 
            >
             
                <motion.img
                    src={logo_text}
                    alt="Parte 2 del logo"
                    style={{ width: '100%', height: '100%' }}
                />
            </motion.div>
        </div>

    )
}