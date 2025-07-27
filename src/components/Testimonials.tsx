import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Cliente VIP",
      // avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Simplesmente perfeito! O atendimento é excepcional e o resultado sempre supera minhas expectativas. Já sou cliente há 2 anos e não troco por nada!",
      service: "Nail Art Premium"
    },
    {
      id: 2,
      name: "Ana Costa",
      role: "Noiva 2024",
      // avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Fiz minhas unhas para o casamento e ficou um sonho! A atenção aos detalhes e o carinho no atendimento fizeram toda a diferença no meu dia especial.",
      service: "Especial Noivas"
    },
    {
      id: 3,
      name: "Juliana Santos",
      role: "Executiva",
      // avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Profissionalismo impecável! Sempre pontual, ambiente limpo e organizado. É o meu cantinho de relaxamento semanal. Super recomendo!",
      service: "Esmaltação Gel"
    },
    {
      id: 4,
      name: "Carla Mendes",
      role: "Influencer",
      // avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Trabalho incrível! Sempre cria designs únicos que viralizam nas minhas redes sociais. A criatividade e qualidade são incomparáveis.",
      service: "Nail Art Premium"
    },
    {
      id: 5,
      name: "Patricia Lima",
      role: "Empresária",
      // avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Atendimento VIP do início ao fim. O studio é um luxo e o resultado é sempre perfeito. Vale cada centavo investido!",
      service: "Alongamento Premium"
    },
    {
      id: 6,
      name: "Fernanda Rocha",
      role: "Modelo",
      // avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Já fiz unhas em vários lugares, mas aqui é diferente. A qualidade dos produtos e a técnica são de outro nível. Minhas unhas nunca ficaram tão bonitas!",
      service: "Cuidados Especiais"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que Nossas <span className="text-yellow-600">Clientes</span> Dizem
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação das nossas clientes é nossa maior recompensa
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
            <div className="text-gray-600">Clientes Felizes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
            <div className="text-gray-600">Clientes Retornam</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">5 Anos</div>
            <div className="text-gray-600">de Excelência</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-yellow-400 opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Service */}
              <div className="text-sm text-yellow-600 font-medium mb-4 uppercase tracking-wide">
                {testimonial.service}
              </div>

              {/* Author */}
              <div className="flex items-center">
                {/* <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>

            </div>
          ))}
              <p className="text-gray-600 mb-6 text-sm leading-relaxed italic">Obs: Todos os comentários foram replicados dos elogios encaminhados via canal Whatsapp</p>

        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça Parte das Nossas <span className="text-yellow-400">Clientes Satisfeitas</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Junte-se às centenas de clientes que já descobriram a excelência do Gasparotto Nail Designer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a target='_blank' href='http://wa.me/5513991627992' className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
              Agendar Meu Horário
            </a >
            <a target='_blank'
                  href="https://www.instagram.com/gasparotto_nail_designer?utm_source=qr&igsh=Y3owZHZ5NzRudGt2" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Ver Nosso Trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;