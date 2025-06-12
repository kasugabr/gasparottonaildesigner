import React from 'react';
import { Sparkles, Calendar, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-yellow-400 opacity-30">
        <Sparkles className="w-8 h-8 animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-20 text-yellow-400 opacity-30">
        <Star className="w-12 h-12 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Gasparotto
            </span>
            <br />
            <span className="text-white">New Designer</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Transforme suas unhas em obras de arte com o mais exclusivo estúdio de nail design
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Calendar className="w-5 h-5 inline mr-2" />
            Agendar Agora
          </button>
          <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Ver Portfólio
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">500+</h3>
            <p className="text-gray-300">Clientes Satisfeitas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">5 Anos</h3>
            <p className="text-gray-300">de Experiência</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">100%</h3>
            <p className="text-gray-300">Satisfação</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;