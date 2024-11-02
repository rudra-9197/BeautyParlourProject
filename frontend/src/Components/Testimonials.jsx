

const Testimonials = () =>{


    const testimonials = [
        { name: 'Ragini R.', text: 'I always feel great after visiting u ,awesome! parlour in koratagere' },
        { name: 'Nithin N.', text: 'I recently had the pleasure of witnessing the incredible work of Thanu from Dreamz Makeup Studio and Herbal Beauty Parlour for my brother’s pre-wedding and wedding events. Thanu did a fantastic job on both my brother and my sister-in-law. My sister-in-law looked absolutely marvelous and stunning, with every detail perfectly accentuated!' },
        { name: 'Noor M.', text: 'The attention to detail and personalized service is unmatched.' },
      ]

    return(


        <section className="py-16 bg-white">
                   {/* Testimonials */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-rose-100 rounded-lg p-6">
                <p className="text-gray-600 mb-4 font-thin font-serif">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    )
}

export default Testimonials;