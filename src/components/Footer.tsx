import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold">
                <span className="text-white">Gasparotto</span>
                <span className="text-yellow-400 ml-2">Nail Designer</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformando unhas em obras de arte há mais de 5 anos. 
              Sua beleza é nossa paixão e especialidade.
            </p>
            <div className="flex space-x-4">
              <a
                target='_blank'
                  href="https://www.instagram.com/gasparotto_nail_designer?utm_source=qr&igsh=Y3owZHZ5NzRudGt2"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                target='_blank' href='http://wa.me/5513991627992'
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre Nós', href: '#about' },
                { name: 'Serviços', href: '#services' },
                { name: 'Portfólio', href: '#portfolio' },
                { name: 'Agendamento', href: '#booking' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Serviços</h3>
            <ul className="space-y-3">
              {[
                'Nail Art Premium',
                'Esmaltação Gel',
                'Alongamento de Unhas',
                'Cuidados Especiais',
                'Especial Noivas'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 flex items-center">
                    <Sparkles className="w-3 h-3 text-yellow-400 mr-2" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Contato</h3>
            <div className="space-y-4">
              <a target='_blank' href='https://maps.app.goo.gl/6L5LLrCXXzKhgvkMA' className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <div className="text-gray-400">
                  <p>Rua Alfredo Shammass, 44</p>
                  <p>Marapé, Santos - SP</p>
                  <p>Apto: 13</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a target='_blank' href='http://wa.me/5513991627992' className="text-gray-400">(13) 99162.7992</a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a target='_blank' href='mailto:contato@gasparottonaildesigner.com.br'  className="text-gray-400">contato@gasparottonaildesigner.com.br</a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Horário de Funcionamento</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Segunda à Sexta: 09:00 - 19:00</p>
                <p>Sábado: 09:00 - 18:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              <p>
                © {currentYear} Gasparotto Nail Designer. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex items-center text-gray-400">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
              <span>para nossas clientes</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-between items-center mt-4 pt-4 border-t border-gray-800">
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#policy" className="hover:text-yellow-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#policy" className="hover:text-yellow-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#faq" className="hover:text-yellow-400 transition-colors">
                FAQ
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;