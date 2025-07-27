import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [ portfolioItems, setPortifolioItems] = useState([
    {
      id: 1,
      category: 'nail-art',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Nail Art Floral',
      description: 'Design delicado com flores pintadas à mão',
      likes: 238,
      isLiked: false
    },
    {
      id: 2,
      category: 'gel',
      image: 'https://images.pexels.com/photos/3997984/pexels-photo-3997984.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Esmaltação Nude',
      description: 'Acabamento perfeito em tom nude clássico',
      likes: 190,
      isLiked: false
    },
    {
      id: 3,
      category: 'nail-art',
      image: 'https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Design Geométrico',
      description: 'Padrões geométricos modernos em dourado',
      likes: 312,
      isLiked: false
    },
    {
      id: 4,
      category: 'alongamento',
      image: 'https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Alongamento Stiletto',
      description: 'Alongamento elegante com formato stiletto',
      likes: 406,
      isLiked: false
    },
    {
      id: 5,
      category: 'especiais',
      image: 'https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Noiva Clássica',
      description: 'Design especial para dia do casamento',
      likes: 174,
      isLiked: false
    },
    {
      id: 6,
      category: 'nail-art',
      image: 'https://images.pexels.com/photos/3997985/pexels-photo-3997985.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Arte Abstrata',
      description: 'Criação artística com cores vibrantes',
      likes: 268,
      isLiked: false
    }
  ])

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'nail-art', name: 'Nail Art' },
    { id: 'gel', name: 'Esmaltação Gel' },
    { id: 'alongamento', name: 'Alongamento' },
    { id: 'especiais', name: 'Especiais' }
  ];
  



  const handleLike = (item:any) => {
    const currentHeart = portfolioItems.map((e) => 
    {
      let newObj = {id: e.id,
      category: e.category,
      image: e.image,
      title: e.title,
      description: e.description,
      likes: e.likes ,
      isLiked: true
    }

      if(e.id === item.id){

        if(item.isLiked){
          newObj["likes"] = newObj.likes - 1 
          newObj["isLiked"] = false
          return newObj
        }

        newObj["likes"] = newObj.likes +1
        newObj["isLiked"] = true
        return newObj
      }

      return e
    })
    setPortifolioItems(currentHeart)
  }


  const filteredItems = selectedCategory === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nosso <span className="text-yellow-600">Portfólio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore alguns dos nossos trabalhos mais especiais e inspiradores
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                

              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Heart onClick={()=> handleLike(item)} style={{ color:item.isLiked ? "red" : "", cursor:"pointer"}} className="w-5 h-5" />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                  <span className="text-xs text-yellow-600 font-medium uppercase tracking-wide">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Gostou do que viu? Entre em contato para criar seu design único!
          </p>
          <a target='_blank'
                  href="https://www.instagram.com/gasparotto_nail_designer?utm_source=qr&igsh=Y3owZHZ5NzRudGt2" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Mais Trabalhos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;