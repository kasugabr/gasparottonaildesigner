import React from 'react';
import { Shield, Clock, CreditCard, AlertTriangle, CheckCircle, Heart } from 'lucide-react';

const Policy = () => {
  const policies = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Política de Agendamento",
      items: [
        "Agendamentos devem ser feitos com antecedência mínima de 24 horas",
        "Confirmação será enviada via WhatsApp até 2 horas antes do horário",
        "Tolerância de 15 minutos de atraso, após isso o horário poderá ser cancelado",
        "Remarcações gratuitas com 24h de antecedência"
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Política de Pagamento",
      items: [
        "Aceitamos dinheiro, cartão (débito/crédito) e PIX",
        "Pagamento no cartão pode ser parcelado em até 12x",
        "Para serviços especiais, pode ser solicitada entrada antecipada",
        "Preços sujeitos a alteração sem aviso prévio"
      ]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Política de Cancelamento",
      items: [
        "Cancelamentos com menos de 24h podem ter taxa de 50% do valor",
        "No-show (não comparecimento) será cobrado 100% do valor do serviço",
        "Cancelamentos por motivo de saúde são isentos de taxa (com comprovante)",
        "Reagendamentos de última hora estão sujeitos à disponibilidade"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Política de Higiene e Segurança",
      items: [
        "Todos os instrumentos são esterilizados após cada uso",
        "Utilizamos apenas materiais descartáveis quando necessário",
        "Produtos são de uso individual e não compartilhados",
        "Ambiente higienizado constantemente com álcool 70%"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Garantia de Qualidade",
      items: [
        "Garantia de 7 dias para problemas técnicos do serviço",
        "Retoque gratuito em caso de descascamento precoce (até 7 dias)",
        "Não cobrimos danos causados por mau uso ou acidentes",
        "Satisfação garantida ou seu dinheiro de volta"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Política de Relacionamento",
      items: [
        "Tratamos cada cliente com respeito e individualidade",
        "Feedback é sempre bem-vindo para melhorarmos nossos serviços",
        "Programa de fidelidade com descontos especiais",
        "Atendimento personalizado e consultoria gratuita"
      ]
    }
  ];

  return (
    <section id="policy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Política do <span className="text-yellow-600">Estúdio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossas políticas para garantir a melhor experiência para todos
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white mb-6">
                {policy.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">{policy.title}</h3>
              
              <ul className="space-y-3">
                {policy.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Informações <span className="text-yellow-600">Importantes</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-yellow-600 mr-2" />
                Compromisso com a Qualidade
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                No Gasparotto New Designer, nosso compromisso é oferecer sempre o melhor serviço possível. 
                Utilizamos apenas produtos premium e seguimos rigorosamente todos os protocolos de higiene e segurança.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe está sempre se atualizando com as últimas tendências e técnicas do mercado 
                para proporcionar uma experiência única e resultados excepcionais.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 text-yellow-600 mr-2" />
                Atendimento Personalizado
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Acreditamos que cada cliente é única e merece um atendimento especial. Por isso, 
                oferecemos consultoria gratuita para ajudar você a escolher o design perfeito.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Valorizamos o relacionamento de longo prazo com nossas clientes e estamos sempre 
                disponíveis para esclarecer dúvidas e oferecer suporte pós-serviço.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 md:p-12 text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Termos e <span className="text-yellow-400">Condições</span>
          </h3>
          <p className="text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Ao agendar um serviço conosco, você concorda com todas as políticas descritas acima. 
            Estas políticas podem ser atualizadas periodicamente, e sempre informaremos nossos clientes sobre mudanças importantes.
          </p>
          <p className="text-sm text-gray-400">
            Última atualização: Janeiro de 2024 • Gasparotto New Designer • CNPJ: 12.345.678/0001-99
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policy;