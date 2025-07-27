import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre <span className="text-yellow-600">Nós</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a história por trás do mais exclusivo estúdio de nail design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gasparotto Nail Designer Studio"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Excelência em Nail Design desde 2019
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O Gasparotto Nail Designer nasceu da paixão por transformar unhas em verdadeiras obras de arte. 
              Com mais de 5 anos de experiência, nossa fundadora combina técnicas tradicionais com as 
              mais modernas tendências do mercado.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nosso estúdio é um ambiente acolhedor e sofisticado, onde cada cliente recebe atendimento 
              personalizado e exclusivo. Utilizamos apenas produtos premium e técnicas inovadoras para 
              garantir resultados excepcionais.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certificada</h4>
                  <p className="text-sm text-gray-600">Profissional qualificada</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">500+ Clientes</h4>
                  <p className="text-sm text-gray-600">Satisfação garantida</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos <span className="text-yellow-600">Valores</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Paixão</h4>
              <p className="text-gray-600">
                Fazemos o que amamos com dedicação e entusiasmo em cada trabalho realizado.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Qualidade</h4>
              <p className="text-gray-600">
                Utilizamos apenas produtos premium e técnicas de alta qualidade para resultados perfeitos.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Inovação</h4>
              <p className="text-gray-600">
                Sempre atualizadas com as últimas tendências e técnicas do mercado de nail design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;