import React from 'react';
import { Sparkles, Palette, Scissors, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Nail Art Premium",
      description: "Designs exclusivos e personalizados com técnicas avançadas de nail art.",
      price: "A partir de R$ 80",
      features: ["Desenhos únicos", "Produtos premium", "Duração de 3-4 semanas"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      "title": "Blindagem em Gel",
    "description": "Reforço das unhas naturais com gel para maior resistência e durabilidade, sem alongamento.",
    "price": "A partir de R$ 80",
    "features": ["Fortalecimento das unhas", "Acabamento natural e brilhante", "Proteção contra quebras e descamações"]
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Alongamento de Unhas",
      description: "Alongamento com gel ou molde F1 para unhas naturalmente belas.",
      price: "R$ 180",
      features: ["Aparência natural", "Resistência", "Manutenção inclusa*"], 
      info:"* Consulte nossos valores para pacotes com manutenção"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Cuidados Especiais",
      description: "Tratamentos especializados para fortalecimento e cuidado das unhas.",
      price: "A partir de R$ 45",
      features: ["Hidratação profunda", "Fortalecimento", "Cuticulagem"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-yellow-600">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma gama completa de serviços profissionais para suas unhas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-2 border-transparent hover:border-yellow-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <div className="text-2xl font-bold text-yellow-600 mb-4">{service.price}</div>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {service.info && <p className="text-gray-600 mb-4 leading-relaxed mt-4 text-xs">{service.info}</p>}
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Serviços <span className="text-yellow-400">Exclusivos</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Oferecemos também serviços personalizados para eventos especiais, noivas e ocasiões únicas
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
              <h4 className="text-xl font-bold text-yellow-400 mb-2">Noivas</h4>
              <p className="text-gray-300">Pacote especial para o dia mais importante</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
              <h4 className="text-xl font-bold text-yellow-400 mb-2">Eventos</h4>
              <p className="text-gray-300">Designs temáticos para ocasiões especiais</p>
            </div>
            
          </div>

          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;