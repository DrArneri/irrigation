import {easeInOut, motion} from 'motion/react'

export default function Footer(){
  return (
     <motion.footer
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     viewport={{once: true, amount: 0.5}}
     transition={{duration:0.5, ease: easeInOut}}
     className="h-20 sm:h-24 md:h-25 w-full bg-footer-bg flex items-center justify-center sm:justify-start px-4 sm:px-6 md:px-8 lg:pl-12">
        <a href= {'#'}className="font-sfpro text-sm sm:text-base text-white hover:cursor-pointer hover:underline text-center sm:text-left">
          © 2026 AutoIrr. Все права защищены.
        </a>
      </motion.footer>
  )
}