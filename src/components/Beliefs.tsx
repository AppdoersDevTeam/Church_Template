import React, { useEffect, useRef, useState } from 'react';
import { Heart, BookOpen, Shield, Star, Cross, Users, Globe, Lightbulb } from 'lucide-react';

const Beliefs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreBeliefs = [
    {
      icon: Cross,
      title: "Jesus Christ",
      description: "We believe in Jesus Christ as our Lord and Savior, fully God and fully human, who died for our sins and rose again."
    },
    {
      icon: BookOpen,
      title: "The Bible",
      description: "We believe the Bible is God's inspired Word, our ultimate authority for faith and practice."
    },
    {
      icon: Heart,
      title: "God's Love",
      description: "We believe in God's unconditional love and grace, available to all who believe in Jesus Christ."
    },
    {
      icon: Users,
      title: "The Church",
      description: "We believe the Church is the body of Christ, called to worship, serve, and share God's love."
    },
    {
      icon: Globe,
      title: "Mission",
      description: "We believe in sharing the Gospel and serving our community with compassion and justice."
    },
    {
      icon: Shield,
      title: "Eternal Life",
      description: "We believe in the promise of eternal life through faith in Jesus Christ."
    }
  ];

  const creeds = [
    {
      title: "The Apostle's Creed",
      content: `I believe in God, the Father almighty, creator of heaven and earth.
I believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; he descended to the dead. On the third day he rose again; he ascended into heaven, he is seated at the right hand of the Father, and he will come to judge the living and the dead.
I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.`
    },
    {
      title: "The Nicene Creed",
      content: `We believe in one God, the Father, the Almighty, maker of heaven and earth, of all that is, seen and unseen.
We believe in one Lord, Jesus Christ, the only Son of God, eternally begotten of the Father, God from God, Light from Light, true God from true God, begotten, not made, of one Being with the Father. Through him all things were made. For us and for our salvation he came down from heaven: by the power of the Holy Spirit he became incarnate from the Virgin Mary, and was made man. For our sake he was crucified under Pontius Pilate; he suffered death and was buried. On the third day he rose again in accordance with the Scriptures; he ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead, and his kingdom will have no end.
We believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son. With the Father and the Son he is worshipped and glorified. He has spoken through the Prophets. We believe in one holy catholic and apostolic Church. We acknowledge one baptism for the forgiveness of sins. We look for the resurrection of the dead, and the life of the world to come. Amen.`
    }
  ];

  return (
    <section id="beliefs" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              Beliefs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are united by our faith in Jesus Christ and affirm the historic creeds that have shaped the Christian church for centuries.
          </p>
        </div>

        {/* Core beliefs grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Core Christian Beliefs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreBeliefs.map((belief, index) => (
              <div
                key={belief.title}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-teal-700 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
                    <belief.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">{belief.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Historic creeds */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Historic Creeds
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {creeds.map((creed, index) => (
              <div
                key={creed.title}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900 mb-4">{creed.title}</h4>
                </div>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {creed.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            Have questions about our beliefs? We'd love to have a conversation with you.
          </p>
          <button className="bg-gradient-to-r from-navy-600 to-navy-700 text-white px-8 py-3 rounded-full font-semibold hover:from-navy-700 hover:to-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Beliefs; 