import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-yellow-600">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para atender você da melhor forma possível
          </p>
        </div>

<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
  {/* Primeira coluna */}
  <div className="space-y-8">
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <a target='_blank' href='https://maps.app.goo.gl/6L5LLrCXXzKhgvkMA' className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
        <MapPin className="w-6 h-6 text-white" />
      </a>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Localização</h3>
      <p className="text-gray-600">
        Rua Alfredo Shammass, 44<br />
        Marapé, Santos - SP<br />
        Apto: 13
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <a target='_blank' href='http://wa.me/5513991627992' className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
        <Phone className="w-6 h-6 text-white" />
      </a>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Telefone</h3>
      <p className="text-gray-600">
        (13) 99162.7992<br />
        WhatsApp disponível
      </p>
    </div>
  </div>

  {/* Segunda coluna - E-mail e Horário */}
  <div className="space-y-8">
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <a target='_blank' href="mailto:contato@gasparottonaildesigner.com.br" className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
        <Mail className="w-6 h-6 text-white" />
      </a>
      <h3 className="text-lg font-bold text-gray-900 mb-2">E-mail</h3>
      <p className="text-gray-600">
        contato@gasparottonaildesigner.com.br
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
        <Clock className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Horário</h3>
      <div className="text-gray-600 space-y-1">
        <p>Segunda à Sexta: 09:00 - 19:00</p>
        <p>Sábado: 09:00 - 18:00</p>
        <p>Domingo: Fechado</p>
      </div>
    </div>
  </div>

  {/* Terceira coluna - Social media */}
</div>
  <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-6 text-white">
    <h3 className="text-lg font-bold mb-4 text-yellow-400">Siga-nos nas Redes</h3>
    <div className="flex space-x-4">
      <a target='_blank'
        href="https://www.instagram.com/gasparotto_nail_designer?utm_source=qr&igsh=Y3owZHZ5NzRudGt2"
        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
    <p className="text-sm text-gray-300 mt-4">
      @gasparotto_nail_designer
    </p>
  </div>

        

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nossa Localização
            </h3>
            <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="w-100 h-100  text-center text-gray-500">
                <iframe
                title="Localização no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.243772974342!2d-46.33246852476934!3d-23.630676578765756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1ca58c348f0f%3A0xc84f0a5e9572a5bb!2sR.%20Alfredo%20Shammass%2C%2044%20-%20Marap%C3%A9%2C%20Santos%20-%20SP%2C%2011020-020!5e0!3m2!1spt-BR!2sbr!4v1721417086270!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;