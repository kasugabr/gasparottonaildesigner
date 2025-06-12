import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "Agendamento",
      questions: [
        {
          question: "Como posso agendar meu horário?",
          answer: "Você pode agendar através do nosso formulário online, WhatsApp (11) 99999-9999 ou ligando diretamente para o studio. Recomendamos o agendamento antecipado devido à alta demanda."
        },
        {
          question: "Qual é a política de cancelamento?",
          answer: "Cancelamentos devem ser feitos com pelo menos 24 horas de antecedência. Cancelamentos de última hora podem estar sujeitos a taxa de cancelamento."
        },
        {
          question: "Posso remarcar meu horário?",
          answer: "Sim, você pode remarcar seu horário entrando em contato conosco com antecedência. Faremos o possível para acomodar sua nova data preferida."
        }
      ]
    },
    {
      category: "Serviços",
      questions: [
        {
          question: "Quanto tempo dura cada serviço?",
          answer: "O tempo varia conforme o serviço: Esmaltação gel (1h), Nail art simples (1h30), Nail art complexa (2-3h), Alongamento (2h), Manutenção (1h)."
        },
        {
          question: "Vocês trabalham com que tipos de produtos?",
          answer: "Utilizamos apenas produtos premium das melhores marcas do mercado, garantindo qualidade, durabilidade e segurança para suas unhas."
        },
        {
          question: "Fazem atendimento em domicílio?",
          answer: "Sim, oferecemos serviços em domicílio para ocasiões especiais, grupos ou clientes VIP. Entre em contato para consultar disponibilidade e valores."
        }
      ]
    },
    {
      category: "Preços e Pagamento",
      questions: [
        {
          question: "Qual é a forma de pagamento aceita?",
          answer: "Aceitamos dinheiro, cartão de débito/crédito (até 12x), PIX e transferência bancária. Para alguns serviços, solicitamos uma entrada antecipada."
        },
        {
          question: "Os preços podem variar?",
          answer: "Nossos preços são fixos para serviços padrão. Para nail arts personalizadas ou trabalhos especiais, o valor pode variar conforme a complexidade."
        },
        {
          question: "Oferecem pacotes ou descontos?",
          answer: "Sim! Temos pacotes especiais para noivas, clientes frequentes e grupos. Consulte nossas promoções mensais e programa de fidelidade."
        }
      ]
    },
    {
      category: "Cuidados",
      questions: [
        {
          question: "Quanto tempo dura a esmaltação gel?",
          answer: "A esmaltação gel dura entre 3 a 4 semanas, dependendo do crescimento da unha e cuidados diários. Para maior durabilidade, siga nossas dicas de cuidados."
        },
        {
          question: "Como cuidar das unhas em casa?",
          answer: "Use luvas para limpeza, hidrate as cutículas diariamente, evite usar as unhas como ferramentas e agende manutenções regulares."
        },
        {
          question: "Posso fazer nail art se tenho unhas fracas?",
          answer: "Sim! Oferecemos tratamentos de fortalecimento que podem ser combinados com nail art. Nossa especialista avaliará suas unhas e indicará o melhor procedimento."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-yellow-600">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>

        {/* FAQ Categories */}
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="flex items-center mb-6">
              <HelpCircle className="w-6 h-6 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
            </div>

            <div className="space-y-4">
              {category.questions.map((item, index) => {
                const itemIndex = categoryIndex * 100 + index; // Unique index
                const isOpen = openItems.includes(itemIndex);

                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-yellow-200 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(itemIndex)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h4>
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-black" />
                        ) : (
                          <Plus className="w-5 h-5 text-black" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 animate-fadeIn">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 md:p-12 text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Não Encontrou sua <span className="text-yellow-400">Resposta?</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está sempre pronta para esclarecer suas dúvidas e ajudar você da melhor forma
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
              Entrar em Contato
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;