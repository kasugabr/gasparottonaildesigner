import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tendências de Nail Art para 2024",
      excerpt: "Descubra as principais tendências que estão dominando o mundo do nail design este ano.",
      image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Gasparotto Designer",
      date: "15 Jan 2024",
      readTime: "5 min",
      category: "Tendências"
    },
    {
      id: 2,
      title: "Como Cuidar das Unhas em Casa",
      excerpt: "Dicas essenciais para manter suas unhas saudáveis e bonitas entre as visitas ao studio.",
      image: "https://images.pexels.com/photos/3997984/pexels-photo-3997984.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Gasparotto Designer",
      date: "12 Jan 2024",
      readTime: "3 min",
      category: "Cuidados"
    },
    {
      id: 3,
      title: "Nail Art para Noivas: Guia Completo",
      excerpt: "Tudo o que você precisa saber para escolher o design perfeito para o seu dia especial.",
      image: "https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Gasparotto Designer",
      date: "08 Jan 2024",
      readTime: "7 min",
      category: "Eventos"
    },
    {
      id: 4,
      title: "A Arte do Alongamento de Unhas",
      excerpt: "Conheça as diferentes técnicas de alongamento e descubra qual é a melhor para você.",
      image: "https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Gasparotto Designer",
      date: "05 Jan 2024",
      readTime: "4 min",
      category: "Técnicas"
    },
    {
      id: 5,
      title: "Cores que Combinam com Cada Estação",
      excerpt: "Saiba como escolher as cores perfeitas de esmalte para cada época do ano.",
      image: "https://images.pexels.com/photos/3997985/pexels-photo-3997985.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Gasparotto Designer",
      date: "02 Jan 2024",
      readTime: "6 min",
      category: "Dicas"
    },
    {
      id: 6,
      title: "Mitos e Verdades sobre Esmaltação Gel",
      excerpt: "Esclarecemos as principais dúvidas sobre a esmaltação em gel e seus benefícios.",
      image: "https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Gasparotto Designer",
      date: "28 Dez 2023",
      readTime: "5 min",
      category: "Educativo"
    }
  ];

  const categories = [
    "Todas", "Tendências", "Cuidados", "Técnicas", "Eventos", "Dicas", "Educativo"
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nosso <span className="text-yellow-600">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dicas, tendências e tudo sobre o mundo do nail design
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm rounded-full border border-gray-300 text-gray-600 hover:border-yellow-400 hover:text-yellow-600 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <div className="mb-4">
                  <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 self-start">
                  Ler Artigo Completo
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <button className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors group">
                  Ler mais
                  <ArrowRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Não Perca Nenhuma <span className="text-yellow-600">Novidade</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Assine nossa newsletter e receba dicas exclusivas, tendências e promoções especiais diretamente no seu e-mail
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
              Assinar
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Prometemos não fazer spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;