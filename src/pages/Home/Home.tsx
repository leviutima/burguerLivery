import hamburguer from '@/assets/bg-top.jpg';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export function Home() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className='flex flex-col items-center gap-2 lg:items-start md:mx-[10px] md:flex'>
                <motion.h2 initial={{ y: 64, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 }} className='font-extrabold text-[#272a50] text-[50px] text-center sm:text-[60px] sm:text-center lg:text-start lg:text-[3.5rem] lg:w-[600px]'>
                    Hamburguers para todos os gostos
                </motion.h2>
                <motion.p initial={{ y: 64, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 }} className='font-medium text-[20px] text-center sm:text-center lg:text-start lg:text-[25px] lg:w-[500px]'>
                    Nós fazemos deliciosos hamburguers e entregamos na sua porta
                </motion.p>
                <Link to='/cardapio'>
                    <motion.Button className='bg-[#FFC00C] w-36 h-14 rounded-full text-[#272a50]' 
                    initial={{ y: 65, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 }}>
                        Peça agora
                    </motion.Button>
                </Link>
            </div>
            <div>
                <motion.img 
                    initial={{ x: 64, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.5 }} src={hamburguer} className="clip-ellipse w-[50vw] hidden lg:block" alt="Hamburguer" />
            </div>
        </div>
    );
}
