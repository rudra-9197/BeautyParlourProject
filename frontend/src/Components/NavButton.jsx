
import { Star, MapPin, Phone, Mail, Menu } from 'lucide-react'





const Navbutton = () =>{

    return(

        <div className="fixed top-4 right-4 z-50">
            {/* Navigation Button */}
        <button className="bg-pink-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
          <Menu className="w-6 h-6" />
          <span className="sr-only">Open menu</span>
        </button>

        <div className=''>


        </div>
      </div>
    )
          

}


export default Navbutton;